@echo off
REM Stelix MERN Website - Quick Start Script for Windows

echo ======================================
echo 🚀 Stelix MERN Website - Quick Start
echo ======================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    echo    Download from: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%
echo.

REM Check if .env exists
if not exist .env (
    echo ⚠️  .env file not found. Creating from .env.example...
    copy .env.example .env
    echo ✅ .env created. Please edit it with your MongoDB URI.
)

echo.
echo Installing backend dependencies...
call npm install

echo.
echo Installing frontend dependencies...
cd client
call npm install
cd ..

echo.
echo ======================================
echo ✅ Setup Complete!
echo ======================================
echo.
echo Next steps:
echo 1. Edit .env with your MongoDB URI
echo 2. Start MongoDB (mongod)
echo 3. Run: npm run dev (backend)
echo 4. In new terminal: npm run client (frontend)
echo 5. Open http://localhost:3000
echo.
echo 📖 For detailed setup: See SETUP-GUIDE.md
echo.
pause
