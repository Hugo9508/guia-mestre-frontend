@echo off
echo ========================================
echo   GUIA MESTRE FRONTEND - INICIALIZADOR
echo ========================================
echo.

:: Limpa cache do Vite (se existir)
if exist "node_modules\.vite" (
    echo [1/3] Limpando cache do Vite...
    rmdir /s /q "node_modules\.vite"
    echo Cache limpo!
) else (
    echo [1/3] Cache ja esta limpo
)

echo.
echo [2/3] Iniciando servidor...
echo.

:: Inicia o servidor e abre no navegador
npm run start

pause
