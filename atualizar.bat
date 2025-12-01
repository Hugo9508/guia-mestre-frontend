@echo off
echo ========================================
echo   ATUALIZACAO AUTOMATICA GITHUB
echo ========================================
echo.

echo Verificando mudancas...
git status --short
echo.

set /p commit_msg="Mensagem do commit (Enter = 'Atualizacao automatica'): "
if "%commit_msg%"=="" set commit_msg=Atualizacao automatica

echo.
echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Criando commit...
git commit -m "%commit_msg%"

if errorlevel 1 (
    echo.
    echo Nenhuma mudanca para commit
    pause
    exit /b
)

echo.
echo [3/3] Enviando para GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo Erro ao fazer push!
    pause
    exit /b
)

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Codigo enviado para GitHub
echo Vercel vai fazer rebuild em ~30-60 segundos
echo.
echo Seu app: https://guia-mestre-frontend-h7r7.vercel.app/
echo.
echo Proximos passos:
echo 1. Aguarde 30-60 segundos
echo 2. Abra o link acima
echo 3. Pressione Ctrl+Shift+R para recarregar
echo.
pause
