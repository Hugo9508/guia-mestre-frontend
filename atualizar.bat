@echo off
echo ========================================
echo   ATUALIZACAO AUTOMATICA GITHUB
echo ========================================
echo.

echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Criando commit automatico...
git commit -m "Atualizacao automatica"

if errorlevel 1 (
    echo.
    echo Nenhuma mudanca detectada para commit
    echo.
    timeout /t 3
    exit /b
)

echo.
echo [3/3] Enviando para GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo Erro ao fazer push!
    timeout /t 5
    exit /b
)

echo.
echo ========================================
echo   SUCESSO! CODIGO ATUALIZADO
echo ========================================
echo.
echo Codigo enviado para GitHub
echo Vercel esta fazendo rebuild agora...
echo.
echo Seu app: https://guia-mestre-frontend-h7r7.vercel.app/
echo.
echo Aguarde 30-60 segundos e recarregue o app (Ctrl+Shift+R)
echo.
timeout /t 5
