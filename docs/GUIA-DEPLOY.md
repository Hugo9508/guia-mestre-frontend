# 🌐 Guia de Deploy - Colocando seu App Online

## 🚀 Método 1: VERCEL (Recomendado)

### Vantagens
- ✅ Deploy em 30 segundos
- ✅ 100% Gratuito
- ✅ HTTPS automático
- ✅ Domínio grátis (seuapp.vercel.app)
- ✅ Deploy automático a cada push

### Passo a Passo

#### 1. Preparar o GitHub

**Se você JÁ tem o projeto no GitHub:**
- Pule para o passo 2

**Se você NÃO tem o projeto no GitHub:**

1. Crie uma conta no GitHub: https://github.com
2. Crie um novo repositório: https://github.com/new
   - Nome: `guia-mestre-frontend`
   - Deixe público
   - NÃO adicione README, .gitignore ou licença
   - Clique em "Create repository"

3. No terminal do seu projeto, execute:

```bash
git init
git add .
git commit -m "Primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/guia-mestre-frontend.git
git push -u origin main
```

**OU use o script automático:**
```bash
# Duplo clique em:
deploy.bat
```

#### 2. Deploy na Vercel

1. Acesse: https://vercel.com
2. Clique em **"Sign Up"**
3. Escolha **"Continue with GitHub"**
4. Autorize o Vercel a acessar seus repositórios
5. Clique em **"New Project"**
6. Selecione o repositório `guia-mestre-frontend`
7. Clique em **"Deploy"**
8. Aguarde 30 segundos

**PRONTO!** Seu app estará online em:
```
https://guia-mestre-frontend.vercel.app
```

---

## 🔵 Método 2: NETLIFY (Alternativa)

### Vantagens
- ✅ Arrastar e soltar (sem Git necessário)
- ✅ Gratuito
- ✅ Formulários inclusos

### Passo a Passo

#### 1. Build do Projeto

No terminal:
```bash
npm run build
```

Isso cria a pasta `dist/` com os arquivos prontos.

#### 2. Deploy

1. Acesse: https://netlify.com
2. Faça login (pode usar GitHub, Google ou email)
3. Arraste a pasta `dist/` para a área de deploy
4. Aguarde o upload

**PRONTO!** Seu app estará em:
```
https://seu-nome-aleatorio.netlify.app
```

---

## 📦 Método 3: GITHUB PAGES

### Vantagens
- ✅ 100% Gratuito
- ✅ Integrado com GitHub

### Desvantagens
- ⚠️ Mais complexo para SPAs (apps React)
- ⚠️ Requer configuração extra

### Passo a Passo

#### 1. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

#### 2. Configurar vite.config.js

Adicione a propriedade `base`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/guia-mestre-frontend/', // Nome do seu repositório
})
```

#### 3. Adicionar scripts no package.json

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

#### 4. Deploy

```bash
npm run deploy
```

#### 5. Ativar GitHub Pages

1. Vá em: https://github.com/SEU_USUARIO/guia-mestre-frontend/settings/pages
2. Em "Source", selecione: `gh-pages` branch
3. Clique em "Save"

**PRONTO!** Seu app estará em:
```
https://SEU_USUARIO.github.io/guia-mestre-frontend/
```

---

## 🎯 Qual escolher?

| Método | Facilidade | Velocidade | Domínio Customizado | Recomendado |
|--------|-----------|------------|---------------------|-------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | ⚡ 30s | ✅ Grátis | ✅ SIM |
| **Netlify** | ⭐⭐⭐⭐ | ⚡ 1min | ✅ Grátis | ✅ Alternativa |
| **GitHub Pages** | ⭐⭐⭐ | ⚡ 2min | ✅ Pago | ⚠️ Complexo |

---

## 🔧 Solução de Problemas

### Erro: "Failed to compile"
```bash
# Teste local primeiro
npm run build
npm run preview
```

### Erro: "Git not found"
- Instale Git: https://git-scm.com/downloads

### Erro: "Permission denied (publickey)"
```bash
# Use HTTPS ao invés de SSH
git remote set-url origin https://github.com/SEU_USUARIO/guia-mestre-frontend.git
```

---

## 📱 Domínio Customizado (Opcional)

### Vercel
1. Compre um domínio (ex: Namecheap, GoDaddy)
2. Em Vercel → Settings → Domains
3. Adicione seu domínio
4. Configure DNS conforme instruções

### Custo
- Domínio .com: ~$10-15/ano
- Hospedagem: **GRÁTIS**

---

## 🎉 Próximos Passos

Após o deploy:

1. ✅ Compartilhe o link com amigos
2. ✅ Adicione no LinkedIn/Currículo
3. ✅ Conecte Google Analytics (opcional)
4. ✅ Configure domínio customizado (opcional)

---

## 📞 Precisa de Ajuda?

- 📖 Docs Vercel: https://vercel.com/docs
- 📖 Docs Netlify: https://docs.netlify.com
- 🎥 Tutorial Deploy: https://www.youtube.com/watch?v=erRGszREfA8
