# 🔑 Criar Token GitHub - Guia Rápido

**Página aberta**: https://github.com/settings/tokens/new

---

## ⚡ Passo a Passo (2 minutos)

### 1. Preencher formulário:

```
Note: itioitalia-live-deploy
Expiration: 90 days (ou No expiration)

Select scopes:
✅ repo (marcar tudo dentro de repo)
   ✅ repo:status
   ✅ repo_deployment
   ✅ public_repo
   ✅ repo:invite
   ✅ security_events
```

### 2. Gerar token:

1. Rolar até o final da página
2. Clicar em **"Generate token"**
3. ⚠️ **COPIAR O TOKEN AGORA** (só aparece uma vez!)
4. Token começa com `ghp_...`

---

## 🚀 Usar o Token (após copiar)

No **seu terminal**, execute:

```bash
cd "/Users/rodrigofaerman/Library/CloudStorage/GoogleDrive-rodrigo@alephant.ai/My Drive/ALEPHANT/[PEOPLE + COMPANIES]/[CLIENTS]/[ACTIVE]/[ITIOITALIA]/DOCS/jornada-web"

git push -u origin main
```

Quando pedir:
- **Username**: `rodrigofaerman`
- **Password**: `COLE_O_TOKEN_AQUI` (não a senha do GitHub, mas o token!)

✅ **Pronto!** Código enviado para GitHub

---

## 💾 Salvar Token (Opcional mas Recomendado)

Para não precisar digitar sempre:

```bash
# Salvar credenciais (Mac)
git config --global credential.helper osxkeychain
```

Depois do primeiro push com token, ele ficará salvo automaticamente.

---

## 🆘 Problemas?

**Token não funciona?**
- Verificar se copiou corretamente (todo o token)
- Verificar se marcou `repo` scope

**Perdeu o token?**
- Criar novo token seguindo os mesmos passos
- Tokens antigos podem ser revogados em: https://github.com/settings/tokens

---

## ⏭️ Próximo Passo Depois do Push

1. ✅ Código no GitHub
2. Conectar Vercel: https://vercel.com/new
3. Importar `rodrigofaerman/itioitalia-live`
4. Deploy!

---

**Criado**: 2025-11-08
