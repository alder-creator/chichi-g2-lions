from pathlib import Path
import asyncio
import shutil
import subprocess
import sys

VOICE = "en-GB-RyanNeural"
RATE = "-10%"

STORIES = {
    1: [
        "Chichi finds an old sketchbook at the back of the town art room. Inside are drawings of his street from many years ago.",
        "Chichi looks closely at one drawing. The bakery is there. The big tree is there. But someone has drawn a tiny star beside the wall.",
        "Chichi takes the sketchbook outside. He finds the same wall, but there is no star. Then he notices one loose brick near the ground.",
        "Chichi carefully pulls the brick forward. Behind it is a small metal box! His heart jumps. Has he discovered hidden treasure?",
        "Inside are three old pencils and a note: For the next artist. Chichi laughs. The treasure isn't gold. It is an invitation.",
        "Chichi draws the street as it looks today. Then he adds a new pencil to the box and hides it again for the next artist.",
    ],
    2: [
        "Chichi is the rookie in the town football league. During his first game, he kicks the ball much too hard. Whoosh! The ball flies over the fence and disappears into the bushes.",
        "Chichi squeezes through a gap to find it. Behind the bushes is another football field, small, overgrown and completely hidden. An old goal leans to one side. Who played here? Chichi wonders.",
        "Near the goal, Chichi spots a rusty metal box under some leaves. Inside is an old team photograph. The players are muddy, smiling and holding an enormous silver cup.",
        "Chichi turns the photograph over. Someone has written: Every teammate is valuable. He admires the old team. Then he looks again. Player number seven seems strangely familiar.",
        "Chichi races back and shows his teammates the photograph. Their coach stares at it and laughs. That's me! I was the rookie. Chichi nearly drops the picture.",
        "Coach explains that his team wasn't allowed to join the town league. Instead of giving up, they fixed the forgotten field and made a league of their own. And everyone was welcome.",
        "The team decides to bring the secret field back to life. They pull weeds, fix the goal and hang the old photograph beside it. Everyone cheers as Chichi takes the first kick. Whoosh! The ball sails over the fence. Coach groans. Not again!",
    ],
    3: [
        "Chichi visits the town museum to try its new virtual reality exhibit. It uses modern technology to show what the town looked like long ago. Before he puts on the headset, he notices an old train ticket on the floor. Where did you come from?",
        "Suddenly, Chichi is standing beside a dusty railroad. In the distance, cowboys are moving cattle across a huge ranch. An older steam train whistles beside the station. Chichi follows the track toward a little wooden bridge. This looks much older than our town! Chichi knows it is only virtual reality... or is it?",
        "At the station, a boy is struggling with a heavy wooden box. I promised to take this to the market, he says, but the train leaves soon! The box is too heavy to carry far. Chichi looks around. An idea begins to form in his mind.",
        "Chichi remembers something from the museum: a model cart made with a 3D printer. There is no 3D printer here, so he finds an old wooden cart instead. Together, they load the box onto it. Much easier! says the boy. But the train is getting closer, and they need to move faster.",
        "They race across the little bridge. Toot! The train begins to move. Chichi runs even faster, but he can hardly keep up. The boy waves desperately. Then the train suddenly stops. The driver leans out of the window. Forgot my lunch. Chichi blinks.",
        "They get the box aboard just in time. The boy smiles. I'll never forget this. Everything suddenly flickers. The ranch, the station, the bridge and the train disappear. Chichi is back in the museum. But something is different.",
        "The old ticket is still in Chichi's hand. He turns it over. Written on the back are four words: Thank you for the cart. Chichi stares at it. Virtual reality can't do that... can it? From somewhere behind him: Toot!",
    ],
}


def ensure_package(package: str, module: str):
    try:
        return __import__(module)
    except ImportError:
        print(f"Installing {package}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "--upgrade", package])
        return __import__(module)


edge_tts = ensure_package("edge-tts", "edge_tts")


def find_ffmpeg() -> str:
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    imageio_ffmpeg = ensure_package("imageio-ffmpeg", "imageio_ffmpeg")
    return imageio_ffmpeg.get_ffmpeg_exe()


FFMPEG = find_ffmpeg()


def clean_audio(raw_path: Path, final_path: Path):
    # Python 3.13-safe: no pydub/audioop. Re-encode through FFmpeg with a tiny
    # fade-in plus clean leading/trailing silence to avoid the startup click.
    filt = "afade=t=in:st=0:d=0.015,adelay=45|45,apad=pad_dur=0.060"
    cmd = [
        FFMPEG, "-y", "-hide_banner", "-loglevel", "error",
        "-i", str(raw_path),
        "-af", filt,
        "-codec:a", "libmp3lame", "-b:a", "128k",
        str(final_path),
    ]
    subprocess.check_call(cmd)


async def main():
    root = Path(__file__).resolve().parents[1]
    total = sum(len(pages) for pages in STORIES.values())
    done = 0

    print(f"Voice: {VOICE}   Rate: {RATE}")
    print(f"FFmpeg: {FFMPEG}")
    print()

    for week, pages in STORIES.items():
        out = root / "assets" / "audio" / "adventure" / f"week{week}"
        raw = out / "_raw"
        out.mkdir(parents=True, exist_ok=True)
        raw.mkdir(exist_ok=True)

        for i, text in enumerate(pages, 1):
            done += 1
            name = f"page_{i:02d}.mp3"
            raw_path = raw / name
            final_path = out / name
            print(f"[{done:02d}/{total}] Week {week} page {i}: {name}")
            await edge_tts.Communicate(text, VOICE, rate=RATE).save(str(raw_path))
            clean_audio(raw_path, final_path)

        shutil.rmtree(raw, ignore_errors=True)

    print("\nDONE - 20 cleaned Ryan narration MP3s generated in assets/audio/adventure/.")


if __name__ == "__main__":
    asyncio.run(main())
