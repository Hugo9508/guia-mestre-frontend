@echo off
cls
echo ========================================
echo   DEPLOY RAPIDO - GITHUB + VERCEL
echo ========================================
echo.

echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Criando commit automatico...
git commit -m "Deploy automatico"

if errorlevel 1 (
    echo.
    echo Nenhuma mudanca detectada
    timeout /t 3
    exit /b
)

echo.
echo [3/3] Enviando para GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo Tentando novamente...
    git branch -M main
    git push -u origin main
    
    if errorlevel 1 (
        echo.
        echo ERRO: Falha ao fazer push
        echo Verifique sua conexao com internet
        timeout /t 5
        exit /b
    )
)

echo.
echo ========================================
echo   SUCESSO! CODIGO ATUALIZADO
echo ========================================
echo.
echo Codigo enviado para GitHub
echo Vercel esta fazendo rebuild (30-60 segundos)
echo.
echo Seu app: https://guia-mestre-frontend-h7r7.vercel.app/
echo.
echo Aguarde e recarregue o app com Ctrl+Shift+R
echo.
timeout /t 5
