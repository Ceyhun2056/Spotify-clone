#!/bin/bash

# Music App Development Server Launcher
# This script starts a local development server for the Music App application

echo ""
echo "==============================================="
echo "   Music App - Development Server"
echo "==============================================="
echo ""

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check for Node.js first
if command_exists node; then
    echo "Starting Node.js development server..."
    echo "Open http://localhost:8000 in your browser"
    echo "Press Ctrl+C to stop the server"
    echo ""
    node server.js
elif command_exists python3; then
    echo "Node.js not found. Starting Python 3 development server..."
    echo "Open http://localhost:8000 in your browser"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
elif command_exists python; then
    echo "Node.js not found. Starting Python development server..."
    echo "Open http://localhost:8000 in your browser"
    echo "Press Ctrl+C to stop the server"
    echo ""
    python -m http.server 8000
elif command_exists php; then
    echo "Node.js and Python not found. Starting PHP development server..."
    echo "Open http://localhost:8000 in your browser"
    echo "Press Ctrl+C to stop the server"
    echo ""
    php -S localhost:8000
else
    echo "❌ Error: No suitable web server found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - Node.js (recommended)"
    echo "  - Python 3"
    echo "  - PHP"
    echo ""
    echo "Alternatively, you can:"
    echo "  - Use VS Code Live Server extension"
    echo "  - Use any other local web server"
    echo "  - Open index.html directly in browser (limited functionality)"
    echo ""
    exit 1
fi
