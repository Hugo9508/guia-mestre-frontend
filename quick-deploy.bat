@echo off
cls
echo ========================================
echo   DEPLOY RAPIDO - GITHUB + VERCEL
echo ========================================
echo.

echo Verificando mudancas no codigo...
echo.
git status --short
echo.

set /p commit_msg="Mensagem do commit (Enter = 'feat: atualizacao'): "
if "%commit_msg%"=="" set commit_msg=feat: atualizacao

echo.
echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Criando commit: %commit_msg%
git commit -m "%commit_msg%"

if errorlevel 1 (
    echo.
    echo Nenhuma mudanca detectada
    echo.
    choice /C SN /M "Deseja fazer push mesmo assim"
    if errorlevel 2 exit /b
)

echo.
echo [3/3] Enviando para GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo Erro ao fazer push! Tentando novamente...
    git branch -M main
    git push -u origin main
    
    if errorlevel 1 (
        echo.
        echo Falha ao fazer push. Verifique:
        echo - Conexao com internet
        echo - Credenciais do GitHub
        pause
        exit /b
    )
)

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Codigo enviado para GitHub
echo Vercel detecta push automaticamente
echo Rebuild leva aproximadamente 30-60 segundos
echo.
echo Seu app: https://guia-mestre-frontend-h7r7.vercel.app/
echo Status: https://vercel.com/hugo9508s-projects/guia-mestre-frontend
echo.
echo Proximos passos:
echo 1. Aguarde 30-60 segundos
echo 2. Abra o link do app
echo 3. Pressione Ctrl+Shift+R (hard refresh)
echo.
echo Se nao atualizar:
echo - Limpe cache do navegador
echo - Tente modo anonimo (Ctrl+Shift+N)
echo.
pause
