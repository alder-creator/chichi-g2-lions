from pathlib import Path
import asyncio
import shutil
import subprocess
import sys

VOICE = "en-GB-RyanNeural"
RATE = "-10%"

WORDS = {
    2: [
        "equality","justice","freedom","peace","allowed","fame","love","another","allow","league",
        "August","African","field","first base","boo","cheer","anyway","season","rookie","valuable",
        "nasty","teammate","admire","awhile","stand up for"
    ],
    3: [
        "virtual reality","technology","3D printer","ingredient","ranch","cattle","market","railroad",
        "return","week","older","promise","trip","load","take","drive","easier","life","mind","surprise",
        "train","hardly","imagine","never"
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
    total = sum(len(v) for v in WORDS.values())
    done = 0
    print(f"Voice: {VOICE}   Rate: {RATE}")
    print(f"Generating {total} vocabulary files for Weeks 2 and 3.")
    print()

    for week, words in WORDS.items():
        out = root / "assets" / "audio" / "vocab" / f"week{week}"
        raw = out / "_raw"
        out.mkdir(parents=True, exist_ok=True)
        raw.mkdir(exist_ok=True)
        for i, word in enumerate(words, 1):
            done += 1
            name = f"word_{i:02d}.mp3"
            raw_path = raw / name
            final_path = out / name
            print(f"[{done:02d}/{total}] Week {week}: {word}")
            await edge_tts.Communicate(word, VOICE, rate=RATE).save(str(raw_path))
            clean_audio(raw_path, final_path)
        shutil.rmtree(raw, ignore_errors=True)

    print("\nDONE - Ryan vocabulary audio is ready for Weeks 2 and 3.")

if __name__ == "__main__":
    asyncio.run(main())
