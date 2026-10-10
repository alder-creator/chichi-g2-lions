@echo off
setlocal
cd /d "%~dp0"
echo.
echo ============================================
echo  Chichi G2 - Generate Ryan Words to Know
echo ============================================
echo.
py -3 tools\generate_ryan_words_to_know.py
echo.
if errorlevel 1 (
  echo Generation failed. Please copy the error message and send it to ChatGPT.
) else (
  echo Finished. The 15 Ryan MP3 files are now inside assets\audio\hfw.
)
echo.
pause
