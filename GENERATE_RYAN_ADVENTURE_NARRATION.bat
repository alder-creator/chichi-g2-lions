@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title Chichi G2 Lions - Ryan Adventure Narration

echo.
echo ================================================
echo   CHICHI G2 LIONS - RYAN ADVENTURE NARRATION
echo   Weeks 1-3 / 20 story pages
echo   Python 3.13 safe - no pydub/audioop
echo ================================================
echo.

set "PYEXE="

rem 1) Prefer the Windows Python launcher. This is the most reliable on your PC.
where py >nul 2>nul
if not errorlevel 1 (
  py -3 -c "import sys; print(sys.executable)" >nul 2>nul
  if not errorlevel 1 set "PYEXE=py -3"
)

rem 2) Try a real python.exe on PATH, but reject the Microsoft Store alias.
if not defined PYEXE (
  for /f "delims=" %%P in ('where python 2^>nul') do (
    "%%P" -c "import sys; print(sys.executable)" >nul 2>nul
    if not errorlevel 1 if not defined PYEXE set "PYEXE=%%P"
  )
)

rem 3) Search common per-user Python install locations.
if not defined PYEXE (
  for %%V in (313 312 311 310) do (
    if exist "%LOCALAPPDATA%\Programs\Python\Python%%V\python.exe" (
      set "PYEXE=%LOCALAPPDATA%\Programs\Python\Python%%V\python.exe"
      goto :foundpython
    )
  )
)

:foundpython
if not defined PYEXE (
  echo Python could not be found.
  echo.
  echo Try this first:
  echo   1. Close this window.
  echo   2. Open Command Prompt.
  echo   3. Type: py -3 --version
  echo.
  echo If that prints a Python version, send Alun a screenshot and use the fixed BAT again.
  echo If it says 'py is not recognized', Python really is not installed on this PC.
  echo.
  pause
  exit /b 1
)

echo Using Python: %PYEXE%
echo.

%PYEXE% tools\generate_ryan_adventure_narration.py
if errorlevel 1 (
  echo.
  echo Narration generation failed. Leave this window open and send Alun a screenshot.
  pause
  exit /b 1
)

echo.
echo ================================================
echo SUCCESS - all 20 Ryan Adventure narration files
 echo are ready inside assets\audio\adventure\week1-3
 echo ================================================
echo.
pause
