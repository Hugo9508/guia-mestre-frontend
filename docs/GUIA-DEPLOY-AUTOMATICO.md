# GUIA DE DEPLOY AUTOMATICO

## Scripts Disponiveis

### 1. atualizar.bat (SIMPLES)
Versao simples e rapida para deploy

```
Duplo clique em: atualizar.bat
```

**O que faz:**
1. Mostra mudancas
2. Pede mensagem de commit
3. Adiciona arquivos (git add .)
4. Cria commit
5. Faz push para GitHub
6. Vercel faz rebuild automaticamente

---

### 2. quick-deploy.bat (COMPLETO)
Versao com mais verificacoes

```
Duplo clique em: quick-deploy.bat
```

**Diferenca:**
- Verifica se ha mudancas antes
- Pergunta se quer continuar sem mudancas
- Tenta resolver erros automaticamente

---

## Como Usar

### Workflow Normal:

1. Faca mudancas no codigo
2. Salve todos arquivos (Ctrl+S)
3. Execute: `atualizar.bat` ou `quick-deploy.bat`
4. Digite mensagem do commit
5. Aguarde 30-60 segundos
6. Teste seu app online

### Exemplo:

```
Mensagem do commit: feat: V4.1 FASE 1 implementada

[1/3] Adicionando arquivos...
[2/3] Criando commit...
[3/3] Enviando para GitHub...

SUCESSO!

Seu app: https://guia-mestre-frontend-h7r7.vercel.app/
```

---

## Mensagens de Commit

Use mensagens descritivas:

```
feat: adicionar novos exercicios
fix: corrigir bug no editor
docs: atualizar documentacao
style: melhorar visual
```

Exemplos:
```
feat: V4.1 FASE 1 implementada - 7 novos exercicios
fix: corrigir preview do exercicio 6
docs: adicionar guia de badges
```

---

## Troubleshooting

### "Nenhuma mudanca para commit"
- Voce nao modificou nenhum arquivo
- Salve seus arquivos antes de executar

### "Erro ao fazer push"
- Verifique conexao com internet
- Verifique credenciais GitHub

### "App nao atualiza"
- Aguarde mais 1-2 minutos
- Force refresh: Ctrl+Shift+R
- Limpe cache do navegador
- Tente modo anonimo

---

## Links Uteis

**Seu app:**
https://guia-mestre-frontend-h7r7.vercel.app/

**Status do deploy:**
https://vercel.com/hugo9508s-projects/guia-mestre-frontend

**GitHub:**
https://github.com/Hugo9508/guia-mestre-frontend

---

## Fluxo Completo

```
1. Editar codigo
2. Executar atualizar.bat
3. Digite mensagem
4. GitHub recebe push
5. Vercel faz rebuild (~30-60s)
6. App atualizado!
```

---

## Checklist Antes de Deploy

- [ ] Testei localmente (npm run start)
- [ ] Salvei todos arquivos
- [ ] Sem erros no console (F12)
- [ ] Mensagem de commit descritiva

---

Tudo pronto! Execute atualizar.bat sempre que fizer mudancas.
