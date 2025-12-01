@echo off
echo ========================================
echo   DEPLOY GITHUB PAGES
echo ========================================
echo.

echo [1/6] Verificando Git...
if not exist ".git" (
    echo Inicializando Git...
    git init
    git branch -M main
)

echo.
echo [2/6] Adicionando arquivos...
git add .

echo.
echo [3/6] Criando commit...
set /p commit_msg="Mensagem do commit (Enter = 'Deploy'): "
if "%commit_msg%"=="" set commit_msg=Deploy
git commit -m "%commit_msg%"

echo.
echo [4/6] Verificando repositorio remoto...
git remote -v | find "origin" >nul
if errorlevel 1 (
    echo.
    echo ===============================================
    echo   CONFIGURACAO NECESSARIA
    echo ===============================================
    echo.
    echo 1. Crie repositorio no GitHub:
    echo    https://github.com/new
    echo    Nome: guia-mestre-frontend
    echo.
    echo 2. Execute este comando:
    echo    git remote add origin https://github.com/SEU_USUARIO/guia-mestre-frontend.git
    echo.
    echo 3. Execute este script novamente
    echo.
    pause
    exit /b
)

echo.
echo [5/6] Fazendo push para GitHub...
git push origin main
if errorlevel 1 (
    git push -u origin main
)

echo.
echo [6/6] Fazendo deploy para GitHub Pages...
npm run deploy

echo.
echo ========================================
echo   DEPLOY CONCLUIDO!
echo ========================================
echo.
echo Aguarde 1-2 minutos para processar.
echo.
echo Seu app estara em:
echo https://SEU_USUARIO.github.io/guia-mestre-frontend/
echo.
echo Para ativar GitHub Pages (se primeira vez):
echo 1. Va para: https://github.com/SEU_USUARIO/guia-mestre-frontend/settings/pages
echo 2. Em "Source", selecione: gh-pages branch
echo 3. Clique em "Save"
echo.
pause
