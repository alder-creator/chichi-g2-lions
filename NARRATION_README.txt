RYAN ADVENTURE NARRATION - FIXED

1. Extract the app ZIP first.
2. Double-click GENERATE_RYAN_ADVENTURE_NARRATION.bat.
3. The BAT now tries `py -3` first, so it avoids the broken Windows Store `python` alias shown in the screenshot.
4. The generator is Python 3.13 safe: it does NOT use pydub/audioop.
5. It installs edge-tts and a bundled FFmpeg helper automatically if needed.
6. When finished, all 20 MP3s are placed directly in:
   assets/audio/adventure/week1
   assets/audio/adventure/week2
   assets/audio/adventure/week3

Voice: en-GB-RyanNeural
Rate: -10%
