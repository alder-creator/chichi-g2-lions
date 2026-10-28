@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title G2 Lions Week 4 - Update Ryan Voice and Generate Audio
echo.
echo ====================================================
echo  G2 LIONS - WEEK 4 - RYAN VOICE GENERATOR (FIX)
echo ====================================================
echo.
if not exist "tools\generate_ryan_week4.py" (
  echo ERROR: Place this BAT in the main Chichi G2 Lions folder,
  echo alongside GENERATE_RYAN_WEEK4.bat, then run it again.
  pause
  exit /b 1
)
where py >nul 2>nul
if not errorlevel 1 (
  set "PYTHON=py -3"
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo ERROR: Python was not found. Please install Python first.
    pause
    exit /b 1
  )
  set "PYTHON=python"
)
echo Updating Edge TTS to version 7.3.1 (October 2026 connection fix)...
%PYTHON% -m pip install --upgrade "edge-tts==7.3.1"
if errorlevel 1 (
  echo ERROR: Package update failed. Check internet access and retry.
  pause
  exit /b 1
)
echo.
echo Confirming installed version...
%PYTHON% -m pip show edge-tts | findstr /C:"Version:"
echo.
echo Creating Ryan's 36 Week 4 voice recordings...
%PYTHON% tools\generate_ryan_week4.py
if errorlevel 1 (
  echo.
  echo ERROR: Ryan recording generation failed. Take a screenshot of the error.
  pause
  exit /b 1
)
echo.
echo SUCCESS! All 36 Ryan recordings were generated.
echo ZIP the complete app folder and upload it to ChatGPT for final validation and release.
pause
