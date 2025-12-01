@echo off
echo ========================================
echo   CONFIGURACAO INICIAL DO GIT
echo ========================================
echo.

echo Vamos configurar seu Git pela primeira vez.
echo.

set /p git_name="Digite seu nome (ex: Joao Silva): "
set /p git_email="Digite seu email (ex: joao@gmail.com): "

echo.
echo Configurando...
git config --global user.name "%git_name%"
git config --global user.email "%git_email%"

echo.
echo ========================================
echo   CONFIGURACAO CONCLUIDA!
echo ========================================
echo.
echo Nome: %git_name%
echo Email: %git_email%
echo.
echo Agora execute novamente:
echo   deploy.bat
echo.
pause
