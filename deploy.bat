@echo off
echo ========================================
echo   DEPLOY AUTOMATICO - VERCEL
echo ========================================
echo.

echo [1/5] Verificando se Git esta inicializado...
if not exist ".git" (
    echo Inicializando Git...
    git init
    echo Git inicializado!
) else (
    echo Git ja inicializado
)

echo.
echo [2/5] Adicionando arquivos ao Git...
git add .

echo.
echo [3/5] Criando commit...
set /p commit_msg="Digite a mensagem do commit (ou Enter para 'Deploy automatico'): "
if "%commit_msg%"=="" set commit_msg=Deploy automatico
git commit -m "%commit_msg%"

echo.
echo [4/5] Verificando repositorio remoto...
git remote -v
if errorlevel 1 (
    echo.
    echo ATENCAO: Repositorio remoto nao configurado!
    echo.
    echo Siga estes passos:
    echo 1. Crie um repositorio no GitHub: https://github.com/new
    echo 2. Execute: git remote add origin https://github.com/SEU_USUARIO/guia-mestre-frontend.git
    echo 3. Execute este script novamente
    pause
    exit /b
)

echo.
echo [5/5] Fazendo push para GitHub...
git push origin main
if errorlevel 1 (
    echo Tentando criar branch main...
    git branch -M main
    git push -u origin main
)

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Agora va para: https://vercel.com
echo 1. Faca login com GitHub
echo 2. Clique em "New Project"
echo 3. Selecione seu repositorio
echo 4. Clique em "Deploy"
echo.
echo Seu app estara online em 30 segundos!
echo.
pause
