#!/bin/bash

# Sadat Group Business Management System - Development Server
echo "🚀 Starting Sadat Group Business Management System..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if live-server is installed
if ! command -v live-server &> /dev/null; then
    echo "📦 Installing live-server..."
    npm install -g live-server
fi

# Start the development server
echo "🌐 Starting development server on port 3000..."
echo "📱 The application will open automatically in your browser"
echo "🔗 If it doesn't open automatically, visit: http://localhost:3000"
echo ""
echo "📋 Demo Credentials:"
echo "   Admin: admin / admin123"
echo "   Owner: sadat / sadat2024"
echo "   Manager: manager / manager123"
echo "   User: user / user123"
echo ""
echo "⏹️  Press Ctrl+C to stop the server"
echo ""

# Start live-server with auto-reload
live-server --port=3000 --open=/index.html --watch