@echo off
echo ========================================
echo   ATUALIZACAO: Loading + Analytics
echo ========================================
echo.

echo [1/3] Adicionando arquivos...
git add .

echo.
echo [2/3] Criando commit...
git commit -m "feat: adicionar loading screen e guia analytics"

echo.
echo [3/3] Enviando para GitHub/Vercel...
git push origin main

echo.
echo ========================================
echo   SUCESSO!
echo ========================================
echo.
echo Aguarde 30 segundos para o Vercel fazer rebuild.
echo.
echo Depois:
echo 1. Acesse: https://guia-mestre-frontend-h7r7.vercel.app/
echo 2. Recarregue a pagina (F5)
echo 3. Veja o loading screen bonito!
echo.
echo Para ativar Analytics:
echo 1. Va para: https://vercel.com/dashboard
echo 2. Clique no projeto
echo 3. Menu Analytics ^> Enable Analytics
echo.
echo Ou leia: docs/ANALYTICS.md
echo.
pause
