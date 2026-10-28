"""Re-record the four G2 Week 4 Ryan adventure pages containing Taegukgi.

Place this script in the app's tools/ folder and run the adjacent BAT at the app root.
Displayed story spelling remains 'Taegukgi'; spoken alias is editable below.
"""
from __future__ import annotations
import asyncio
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / 'tools' / 'ryan_week4_manifest.json'
GENERATOR = ROOT / 'tools' / 'generate_ryan_week4.py'
AUDIO_DIR = ROOT / 'assets' / 'audio' / 'adventure' / 'week4'
BACKUP_DIR = AUDIO_DIR / '_original_before_taegukgi_fix'
WRITTEN = 'Taegukgi'
SPOKEN = 'Taygook-ee'  # Teacher-approved pronunciation guide for Ryan.
PAGES = (2, 5, 6, 7)


def ffmpeg_path():
    found = shutil.which('ffmpeg')
    if found:
        return found
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError as exc:
        raise RuntimeError('Please run: py -3 -m pip install imageio-ffmpeg') from exc


def install_persistent_speech_fix():
    """Make future full-week regenerations retain the teacher's preferred reading."""
    src = GENERATOR.read_text(encoding='utf-8')
    needle = 'for i,text in enumerate(words,1):'
    marker = "text=text.replace('Taegukgi','Taygook-ee')"
    if marker in src:
        print('Future Ryan generator already contains the pronunciation fix.')
        return
    if src.count(needle) != 1:
        raise RuntimeError('Could not safely update the future full-week generator. Original audio is untouched.')
    replacement = (needle + "\n            # Pronunciation fix only; manifest and displayed text keep correct spelling.\n"
                   "            if group=='adventure':" + f"\n                {marker}")
    updated = src.replace(needle, replacement)
    # Make a backup once, so the generator can be restored.
    backup = GENERATOR.with_suffix('.py.pre_taegukgi_backup')
    if not backup.exists():
        shutil.copy2(GENERATOR, backup)
    GENERATOR.write_text(updated, encoding='utf-8')
    print('Future full-week Ryan generator updated for Taegukgi pronunciation.')


async def main():
    if not MANIFEST.is_file() or not GENERATOR.is_file() or not AUDIO_DIR.is_dir():
        raise RuntimeError('App files not found. Place BAT at the root of the extracted G2 Lions app and this Python file in tools/.')
    data = json.loads(MANIFEST.read_text(encoding='utf-8'))
    voice, rate = data['voice'], data['rate']
    stories = data['adventure_pages']
    assert len(stories) == 8
    for page in PAGES:
        if WRITTEN not in stories[page - 1]:
            raise RuntimeError(f'Expected name missing from page {page}; not changing any audio.')
    print(f'Ryan Week 4 pronunciation fix: {WRITTEN} -> {SPOKEN}')
    print(f'Voice: {voice} | Rate: {rate} | Pages: {PAGES}')
    if '--dry-run' in sys.argv:
        for page in PAGES:
            print(f'Page {page}: {stories[page-1].replace(WRITTEN,SPOKEN)}')
        print('Dry run complete; no audio changed.')
        return
    try:
        import edge_tts
    except ImportError as exc:
        raise RuntimeError('Please run: py -3 -m pip install --upgrade edge-tts') from exc
    ffmpeg = ffmpeg_path()
    BACKUP_DIR.mkdir(exist_ok=True)
    for page in PAGES:
        target = AUDIO_DIR / f'page_{page:02}.mp3'
        if not target.exists():
            raise RuntimeError(f'Missing original narration: {target}')
        backup = BACKUP_DIR / target.name
        if not backup.exists():
            shutil.copy2(target, backup)
        raw = AUDIO_DIR / f'_taegukgi_raw_page_{page:02}.mp3'
        output = AUDIO_DIR / f'_taegukgi_new_page_{page:02}.mp3'
        text = stories[page - 1].replace(WRITTEN, SPOKEN)
        print(f'Recording page {page:02} (Ryan)...', flush=True)
        try:
            await edge_tts.Communicate(text,voice,rate=rate).save(str(raw))
            subprocess.check_call([
                ffmpeg,'-y','-hide_banner','-loglevel','error',
                '-i',str(raw),
                '-af','afade=t=in:st=0:d=0.015,adelay=45|45,apad=pad_dur=0.060',
                '-codec:a','libmp3lame','-b:a','128k',str(output),
            ])
            if output.stat().st_size < 5000:
                raise RuntimeError(f'Page {page} produced an unexpectedly small MP3.')
            os.replace(output,target)
            print(f'  OK: {target.relative_to(ROOT)} ({target.stat().st_size:,} bytes)')
        finally:
            raw.unlink(missing_ok=True)
            output.unlink(missing_ok=True)
    install_persistent_speech_fix()
    print('\nSUCCESS: four Ryan narrations have been re-recorded using the corrected pronunciation.')
    print('Original MP3s are backed up in assets\\audio\\adventure\\week4\\_original_before_taegukgi_fix')
    print('Please upload the four updated page_02, page_05, page_06 and page_07 MP3 files to ChatGPT.')

if __name__=='__main__':
    try:
        asyncio.run(main())
    except Exception as exc:
        print('\nERROR:',exc, file=sys.stderr)
        raise
