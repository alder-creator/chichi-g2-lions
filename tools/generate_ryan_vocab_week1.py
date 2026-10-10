from pathlib import Path
import asyncio
import shutil
import subprocess
import sys

VOICE = "en-GB-RyanNeural"
RATE = "-10%"

WORDS = [
    "time line","recover","accident","professor","brightness","memory","sweets","tune",
    "discover","comfort","prairie","painting","scandalous","achieve","wonder","hum",
    "canvas","skyscraper","amaze","delight","universe","astound","extraordinary",
    "dusky","whisper","enchant","yelping","ladder"
]

def ensure_package(package, module):
    try:
        return __import__(module)
    except ImportError:
        print(f"Installing {package}...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "--upgrade", package])
        return __import__(module)

edge_tts = ensure_package("edge-tts", "edge_tts")

def find_ffmpeg():
    exe = shutil.which("ffmpeg")
    if exe:
        return exe
    imageio_ffmpeg = ensure_package("imageio-ffmpeg", "imageio_ffmpeg")
    return imageio_ffmpeg.get_ffmpeg_exe()

FFMPEG = find_ffmpeg()

def clean_audio(raw_path, final_path):
    filt = "afade=t=in:st=0:d=0.015,adelay=45|45,apad=pad_dur=0.060"
    subprocess.check_call([
        FFMPEG, "-y", "-hide_banner", "-loglevel", "error",
        "-i", str(raw_path),
        "-af", filt,
        "-codec:a", "libmp3lame", "-b:a", "128k",
        str(final_path),
    ])

async def main():
    root = Path(__file__).resolve().parents[1]
    out = root / "assets" / "audio" / "vocab" / "week1"
    raw = out / "_raw"
    out.mkdir(parents=True, exist_ok=True)
    raw.mkdir(exist_ok=True)

    print(f"Voice: {VOICE}   Rate: {RATE}")
    print(f"Generating {len(WORDS)} Week 1 vocabulary files.\n")

    for i, word in enumerate(WORDS, 1):
        name = f"word_{i:02d}.mp3"
        raw_path = raw / name
        final_path = out / name
        print(f"[{i:02d}/{len(WORDS)}] {word}")
        await edge_tts.Communicate(word, VOICE, rate=RATE).save(str(raw_path))
        clean_audio(raw_path, final_path)

    shutil.rmtree(raw, ignore_errors=True)
    print("\nDONE - Week 1 Ryan vocabulary audio is ready.")

if __name__ == "__main__":
    asyncio.run(main())
