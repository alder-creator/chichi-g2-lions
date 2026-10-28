@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title G2 Lions Week 4 - Ryan Voice Generator
echo.
echo G2 LIONS WEEK 4 - RYAN NARRATION / VOCABULARY
echo 23 vocabulary, 5 high-frequency words, 8 adventure pages
echo.
where py >nul 2>nul
if not errorlevel 1 (
  py -3 tools\generate_ryan_week4.py
) else (
  python tools\generate_ryan_week4.py
)
if errorlevel 1 (
  echo.
  echo Generation failed. Check that Python and internet access are available.
  pause
  exit /b 1
)
echo.
echo All 36 recordings are ready. Compress the contents of this folder for upload.
pause
