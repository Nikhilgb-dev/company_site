#!/bin/bash

# Stelix MERN Website - Quick Start Script
# This script sets up and runs the entire application

echo "======================================"
echo "🚀 Stelix MERN Website - Quick Start"
echo "======================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Download from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.example..."
    cp .env.example .env
    echo "✅ .env created. Please edit it with your MongoDB URI."
fi

echo ""
echo "Installing backend dependencies..."
npm install

echo ""
echo "Installing frontend dependencies..."
cd client
npm install
cd ..

echo ""
echo "======================================"
echo "✅ Setup Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo "1. Edit .env with your MongoDB URI"
echo "2. Start MongoDB (mongod)"
echo "3. Run: npm run dev (backend)"
echo "4. In new terminal: npm run client (frontend)"
echo "5. Open http://localhost:3000"
echo ""
echo "📖 For detailed setup: See SETUP-GUIDE.md"
