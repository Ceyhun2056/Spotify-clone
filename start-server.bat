@echo off
title Music App Development Server

echo.
echo ===============================================
echo   Music App - Development Server
echo ===============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js is not installed or not in PATH.
    echo Trying Python server instead...
    echo.
    
    REM Try Python 3 first
    where python >nul 2>nul
    if %ERRORLEVEL% equ 0 (
        echo Starting Python development server...
        echo Open http://localhost:8000 in your browser
        echo Press Ctrl+C to stop the server
        echo.
        python -m http.server 8000
    ) else (
        echo Python is not installed either.
        echo Please install Node.js or Python to run the development server.
        echo.
        echo Alternatively, you can:
        echo - Use VS Code Live Server extension
        echo - Use any other local web server
        echo - Open index.html directly in browser (limited functionality)
        pause
        exit /b 1
    )
) else (
    echo Starting Node.js development server...
    echo Open http://localhost:8000 in your browser
    echo Press Ctrl+C to stop the server
    echo.
    node server.js
)

pause
