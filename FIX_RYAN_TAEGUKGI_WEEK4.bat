@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title G2 Lions - Correct Taegukgi Pronunciation in Ryan Audio

echo ========================================================
echo  G2 LIONS - TAEGUKGI PRONUNCIATION CORRECTION

echo  Re-recording ONLY adventure pages 02, 05, 06, 07

echo  Spoken as Taygook-ee with British Ryan at -10%% speed

echo ========================================================
echo.
if not exist "tools\fix_week4_taegukgi_ryan.py" (
  echo ERROR: Extract the patch ZIP into the G2 Lions app folder.
  echo This BAT should be next to index.html with the tools folder beside it.
  pause
  exit /b 1
)
where py >nul 2>nul
if not errorlevel 1 (
  py -3 tools\fix_week4_taegukgi_ryan.py
) else (
  python tools\fix_week4_taegukgi_ryan.py
)
if errorlevel 1 (
  echo.
  echo The fix failed. Copy the error here and keep the original app folder.
  pause
  exit /b 1
)
echo.
echo SUCCESS. Please upload the FOUR new MP3 files:
echo   assets\audio\adventure\week4\page_02.mp3
 echo   assets\audio\adventure\week4\page_05.mp3
 echo   assets\audio\adventure\week4\page_06.mp3
 echo   assets\audio\adventure\week4\page_07.mp3
pause
