# GUIA - Deploy no Netlify (Hospedagem Gratuita)

**Data**: 2025-11-08
**Versão**: v1.0
**Tempo estimado**: 5 minutos

---

## 🎯 Objetivo

Publicar o site da Jornada ITIOITALIA em uma URL pública gratuita usando Netlify.

---

## 📋 Pré-requisitos

- Conta no Netlify (criar gratuitamente)
- Arquivos do site na pasta `jornada-web`

---

## 🚀 Passo a Passo

### 1. Criar conta no Netlify

1. Acesse: https://www.netlify.com/
2. Clique em **"Sign up"**
3. Escolha uma opção:
   - GitHub (recomendado)
   - GitLab
   - Email

### 2. Preparar arquivos para deploy

**Opção A: Via Interface Web (Drag & Drop)**

1. Acesse: https://app.netlify.com/drop
2. Arraste a pasta `jornada-web` inteira
3. Aguarde o upload completar
4. ✅ Pronto! Site publicado

**Opção B: Via GitHub (Recomendado para atualizações)**

1. Criar repositório no GitHub:
   ```bash
   cd "/Users/rodrigofaerman/Library/CloudStorage/GoogleDrive-rodrigo@alephant.ai/My Drive/ALEPHANT/[PEOPLE + COMPANIES]/[CLIENTS]/[ACTIVE]/[ITIOITALIA]/DOCS/jornada-web"

   git init
   git add .
   git commit -m "Initial commit - Jornada ITIOITALIA"
   ```

2. Criar repositório no GitHub:
   - Ir para https://github.com/new
   - Nome: `itioitalia-jornada`
   - Visibilidade: Private (recomendado)
   - Criar repositório

3. Enviar código:
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/itioitalia-jornada.git
   git branch -M main
   git push -u origin main
   ```

4. No Netlify:
   - Clicar em **"New site from Git"**
   - Conectar GitHub
   - Selecionar repositório `itioitalia-jornada`
   - Deploy settings:
     - Build command: (deixar vazio)
     - Publish directory: `/`
   - Clicar em **"Deploy site"**

### 3. Customizar URL

Por padrão, Netlify gera URL tipo: `random-name-123456.netlify.app`

Para customizar:

1. No dashboard do site, ir em **"Site settings"**
2. Clicar em **"Change site name"**
3. Escolher um nome disponível, exemplo:
   - `itioitalia-jornada`
   - `jornada-itioitalia`
   - `itioitalia-timeline`
4. Sua URL final será: `https://NOME-ESCOLHIDO.netlify.app`

### 4. (Opcional) Usar domínio próprio

Se você tem um domínio (ex: `jornada.itioitalia.com`):

1. No Netlify, ir em **"Domain settings"**
2. Clicar em **"Add custom domain"**
3. Digitar seu domínio
4. Seguir instruções para configurar DNS

---

## 📊 Resultado Esperado

- ✅ Site acessível em: `https://SEU-NOME.netlify.app`
- ✅ HTTPS automático (seguro)
- ✅ Todos os estilos e scripts funcionando
- ✅ Performance otimizada
- ✅ Deploy contínuo (se usar GitHub)

---

## 🔄 Como Atualizar o Site

**Se usou Drag & Drop:**
1. Acesse o dashboard do site
2. Arraste novos arquivos sobre a área de drop
3. Deploy automático

**Se usou GitHub:**
1. Fazer alterações nos arquivos locais
2. Commit e push:
   ```bash
   git add .
   git commit -m "Atualização [descrição]"
   git push
   ```
3. Deploy automático em ~30 segundos

---

## 🎨 Configurações Avançadas

### Melhorar Performance

No arquivo `netlify.toml` (criar na raiz):

```toml
[[headers]]
  for = "/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer-when-downgrade"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"

[[headers]]
  for = "/styles.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/script.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Redirecionar para HTTPS

```toml
[[redirects]]
  from = "http://seu-site.netlify.app/*"
  to = "https://seu-site.netlify.app/:splat"
  status = 301
  force = true
```

---

## 🐛 Solução de Problemas

### Site não carrega CSS/JS

**Problema**: Caminhos relativos errados

**Solução**: Verificar no `index.html`:
```html
<!-- Correto -->
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>

<!-- Errado (não usar) -->
<link rel="stylesheet" href="/styles.css">
<script src="/script.js"></script>
```

### Imagens não aparecem

**Problema**: Paths quebrados

**Solução**: Usar caminhos relativos ou URLs absolutas

---

## 📈 Monitoramento

### Analytics (Gratuito no Netlify)

1. Ir em **"Site settings"** → **"Analytics"**
2. Ativar Netlify Analytics (gratuito)
3. Ver:
   - Visitantes únicos
   - Pageviews
   - Top pages
   - Fontes de tráfego

---

## 🔒 Segurança e Privacidade

### Proteger com senha (Netlify Pro)

Se precisar restringir acesso:
1. Upgrade para Netlify Pro
2. Site settings → Access control
3. Ativar senha

### Alternativa gratuita:

Usar branch específica para versão privada e outra para pública.

---

## ✅ Checklist Final

Antes de compartilhar a URL:

- [ ] Site carrega corretamente
- [ ] Todos os estilos aplicados
- [ ] JavaScript funcionando
- [ ] Navegação mobile funcional
- [ ] Links internos funcionando
- [ ] Meta tags atualizadas (OG image, description)
- [ ] Favicon aparecendo
- [ ] Performance aceitável (teste: https://pagespeed.web.dev/)

---

## 🎯 URLs Úteis

- Dashboard Netlify: https://app.netlify.com/
- Documentação: https://docs.netlify.com/
- Status: https://www.netlifystatus.com/
- Community: https://answers.netlify.com/

---

## 💰 Limites do Plano Gratuito

- ✅ 100 GB de bandwidth/mês
- ✅ 300 build minutes/mês
- ✅ Sites ilimitados
- ✅ Deploy contínuo
- ✅ HTTPS gratuito
- ✅ Formulários: 100 submissions/mês

**Conclusão**: Mais que suficiente para um site de apresentação!

---

## Alternativas

Se precisar de algo diferente:

1. **Vercel**: Similar ao Netlify
2. **GitHub Pages**: Gratuito, vinculado ao GitHub
3. **Cloudflare Pages**: Rápido, global CDN
4. **Surge.sh**: Super simples, CLI-based

---

**Criado por**: Rodrigo Faerman
**Última atualização**: 2025-11-08
**Status**: Ativo
