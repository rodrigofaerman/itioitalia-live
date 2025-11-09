# GUIA - GitHub + Vercel Deploy (Setup Profissional)

**Data**: 2025-11-08
**Versão**: v1.0
**Tempo estimado**: 10 minutos

---

## 🎯 Objetivo

Configurar deploy profissional do site Jornada ITIOITALIA usando GitHub + Vercel com deploy automático.

## ✨ Vantagens desta abordagem

- ✅ **Versionamento**: Histórico completo de todas as mudanças
- ✅ **Deploy automático**: Push = deploy instantâneo
- ✅ **Preview branches**: Testar mudanças antes de publicar
- ✅ **Rollback fácil**: Voltar para qualquer versão anterior
- ✅ **Colaboração**: Múltiplas pessoas podem contribuir
- ✅ **Profissional**: Mostra seriedade com o projeto
- ✅ **Zero custo**: 100% gratuito

---

## 📋 Pré-requisitos

- [x] Conta no GitHub (criar em: https://github.com/signup)
- [x] Conta no Vercel (criar em: https://vercel.com/signup)
- [x] Git instalado no computador
- [x] Arquivos do projeto prontos

### Verificar se Git está instalado:

```bash
git --version
```

Se não estiver instalado:
- Mac: `brew install git`
- Windows: Baixar de https://git-scm.com/

---

## 🚀 Parte 1: Setup do Repositório Git Local

### Passo 1: Navegar até a pasta do projeto

```bash
cd "/Users/rodrigofaerman/Library/CloudStorage/GoogleDrive-rodrigo@alephant.ai/My Drive/ALEPHANT/[PEOPLE + COMPANIES]/[CLIENTS]/[ACTIVE]/[ITIOITALIA]/DOCS/jornada-web"
```

### Passo 2: Inicializar Git

```bash
git init
```

✅ Output esperado: `Initialized empty Git repository`

### Passo 3: Configurar Git (se primeira vez)

```bash
git config user.name "Rodrigo Faerman"
git config user.email "rodrigo@alephant.ai"
```

### Passo 4: Adicionar todos os arquivos

```bash
git add .
```

### Passo 5: Primeiro commit

```bash
git commit -m "feat: initial commit - Jornada ITIOITALIA website"
```

✅ Output esperado: Lista de arquivos commitados

### Passo 6: Renomear branch para main

```bash
git branch -M main
```

---

## 🌐 Parte 2: Criar Repositório no GitHub

### Passo 1: Criar novo repositório

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `itioitalia-jornada`
   - **Description**: `Apresentação web interativa da Jornada ITIOITALIA`
   - **Visibility**:
     - ⭐ **Private** (recomendado para projeto cliente)
     - ou Public (se quiser mostrar portfolio)
   - **NÃO** marcar: "Add README", "Add .gitignore", "Choose license"
3. Clicar em **"Create repository"**

### Passo 2: Conectar repositório local ao GitHub

GitHub mostrará comandos. Use estes:

```bash
# Adicionar remote (substitua SEU-USUARIO pelo seu username)
git remote add origin https://github.com/SEU-USUARIO/itioitalia-jornada.git

# Verificar remote
git remote -v

# Push inicial
git push -u origin main
```

✅ Output esperado: Arquivos enviados para o GitHub

### Passo 3: Verificar no GitHub

Acesse: `https://github.com/SEU-USUARIO/itioitalia-jornada`

Você deve ver todos os arquivos listados.

---

## ⚡ Parte 3: Deploy no Vercel

### Passo 1: Login no Vercel

1. Acesse: https://vercel.com/login
2. Clique em **"Continue with GitHub"**
3. Autorize Vercel a acessar sua conta GitHub

### Passo 2: Import Project

1. No dashboard, clique em **"Add New..." → "Project"**
2. Selecione **"Import Git Repository"**
3. Encontre e selecione: `itioitalia-jornada`
4. Clique em **"Import"**

### Passo 3: Configurar Deploy

**Configure Project**:
- **Framework Preset**: None (ou Other)
- **Root Directory**: `./` (deixar padrão)
- **Build Command**: (deixar vazio)
- **Output Directory**: (deixar vazio)
- **Install Command**: (deixar vazio)

**Environment Variables**: (não precisa)

### Passo 4: Deploy!

1. Clique em **"Deploy"**
2. Aguarde ~30 segundos
3. ✅ **Site publicado!**

### Passo 5: Acessar URL

Vercel gera URL automática:
- `https://itioitalia-jornada.vercel.app`
- ou `https://itioitalia-jornada-SEU-USUARIO.vercel.app`

---

## 🎨 Parte 4: Customizar Domínio

### Opção A: Customizar subdomínio Vercel

1. No dashboard do projeto, ir em **"Settings"**
2. Ir em **"Domains"**
3. Em "Project Name", editar para nome desejado
4. Nova URL: `https://NOVO-NOME.vercel.app`

### Opção B: Usar domínio próprio

Se tiver domínio próprio (ex: `jornada.itioitalia.com`):

1. Settings → Domains
2. Add → Digite seu domínio
3. Configurar DNS conforme instruções
4. Aguardar propagação (~24h)

---

## 🔄 Workflow de Atualizações

### Fluxo diário:

```bash
# 1. Fazer mudanças nos arquivos
# (editar index.html, styles.css, etc.)

# 2. Ver o que mudou
git status

# 3. Adicionar mudanças
git add .

# 4. Commit com mensagem descritiva
git commit -m "feat: adiciona seção de depoimentos"

# 5. Push para GitHub
git push origin main

# ✅ Deploy automático acontece!
```

### Tipos de mensagens de commit:

```bash
git commit -m "feat: nova funcionalidade"
git commit -m "fix: correção de bug"
git commit -m "style: ajustes visuais"
git commit -m "docs: atualização de documentação"
git commit -m "refactor: refatoração de código"
```

---

## 🌿 Trabalhando com Branches (Avançado)

### Para testar mudanças antes de publicar:

```bash
# Criar branch de desenvolvimento
git checkout -b desenvolvimento

# Fazer mudanças e commitar
git add .
git commit -m "test: experimentando novo layout"

# Push da branch
git push origin desenvolvimento
```

✅ Vercel cria automaticamente uma **URL de preview** para esta branch!

### Quando aprovar as mudanças:

```bash
# Voltar para main
git checkout main

# Fazer merge
git merge desenvolvimento

# Push para produção
git push origin main
```

---

## 📊 Monitoramento e Analytics

### No Dashboard da Vercel:

1. **Deployments**: Histórico de todos os deploys
2. **Analytics**: Visitantes, pageviews, performance
3. **Logs**: Erros e warnings
4. **Speed Insights**: Performance do site

### Configurar Analytics (Grátis):

1. Projeto → Settings → Analytics
2. Enable Web Analytics
3. Seguir instruções para adicionar snippet

---

## 🔧 Configurações Avançadas (Opcional)

### Criar `vercel.json` para configurações:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Otimizar Performance:

```json
{
  "headers": [
    {
      "source": "/styles.css",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/script.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🐛 Troubleshooting

### Problema: "Permission denied" no git push

**Solução**: Configurar autenticação GitHub

```bash
# Opção 1: HTTPS com token
# Gerar token em: https://github.com/settings/tokens
git remote set-url origin https://USERNAME:TOKEN@github.com/USERNAME/itioitalia-jornada.git

# Opção 2: SSH (recomendado)
# Seguir guia: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
```

### Problema: Deploy falhou na Vercel

1. Verificar logs no dashboard
2. Verificar se todos os arquivos foram commitados
3. Verificar caminhos dos arquivos (case-sensitive)

### Problema: CSS/JS não carrega

1. Verificar caminhos relativos no HTML
2. Verificar se arquivos estão no repositório
3. Limpar cache do Vercel: Settings → Clear cache and redeploy

---

## 📱 Compartilhar com Cliente

### Preparar para apresentação:

1. **Testar em múltiplos dispositivos**:
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (iPhone, Android)
   - Tablet

2. **Verificar performance**:
   - https://pagespeed.web.dev/
   - Inserir URL do Vercel
   - Garantir score > 90

3. **Preparar mensagem**:

```
Olá Anne e Alessandro,

Preparei uma apresentação web interativa da nossa jornada:

🌐 https://itioitalia-jornada.vercel.app

O site documenta:
✅ Timeline completa dos 6 meses
✅ Aprendizados e insights
✅ DNA da empresa e branding
✅ Atividades realizadas
✅ Planejamento futuro

O site é responsivo e funciona perfeitamente em qualquer dispositivo.

Qualquer feedback é muito bem-vindo!

Abraços,
Rodrigo
```

---

## ✅ Checklist Final

Antes de compartilhar:

- [ ] Site acessível via URL pública
- [ ] Todos os estilos aplicados corretamente
- [ ] JavaScript funcionando (animações, navegação)
- [ ] Responsivo em mobile
- [ ] Performance > 90 no PageSpeed
- [ ] Meta tags corretas (Open Graph)
- [ ] Favicon aparecendo
- [ ] Sem erros no console do navegador
- [ ] Testado em Chrome, Safari, Firefox
- [ ] Testado em iPhone e Android

---

## 🎯 Próximos Passos

1. [ ] Setup inicial (Git + GitHub + Vercel)
2. [ ] Primeiro deploy
3. [ ] Testar URL
4. [ ] Compartilhar com cliente
5. [ ] Coletar feedback
6. [ ] Iterar e melhorar

---

## 📚 Recursos Úteis

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Guides](https://guides.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 💰 Custos

**GitHub**:
- Private repos: Grátis (ilimitados)
- Public repos: Grátis (ilimitados)

**Vercel**:
- Hobby (Free):
  - Deploy ilimitados
  - 100 GB bandwidth/mês
  - HTTPS automático
  - Preview deployments
  - Serverless functions: 100 GB-h

**Total**: R$ 0,00/mês 🎉

---

**Criado por**: Rodrigo Faerman
**Última atualização**: 2025-11-08
**Status**: Pronto para uso
