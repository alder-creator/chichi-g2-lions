@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title Chichi G2 Lions - Ryan Vocabulary Week 1

echo.
echo ================================================
echo   CHICHI G2 LIONS - RYAN VOCABULARY
echo   Week 1 / 28 vocabulary words
echo ================================================
echo.

set "PYEXE="

where py >nul 2>nul
if not errorlevel 1 (
  py -3 -c "import sys; print(sys.executable)" >nul 2>nul
  if not errorlevel 1 set "PYEXE=py -3"
)

if not defined PYEXE (
  for /f "delims=" %%P in ('where python 2^>nul') do (
    "%%P" -c "import sys; print(sys.executable)" >nul 2>nul
    if not errorlevel 1 if not defined PYEXE set "PYEXE=%%P"
  )
)

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
  pause
  exit /b 1
)

echo Using Python: %PYEXE%
echo.
%PYEXE% tools\generate_ryan_vocab_week1.py
if errorlevel 1 (
  echo.
  echo Week 1 vocabulary generation failed. Leave this window open and send a screenshot.
  pause
  exit /b 1
)

echo.
echo ================================================
echo SUCCESS - Week 1 vocabulary now uses Ryan.
echo ================================================
echo.
pause
