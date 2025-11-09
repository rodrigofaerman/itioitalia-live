# ITIOITALIA - Jornada Completa

> Apresentação web interativa da jornada e planejamento do projeto ITIOITALIA

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

## 📋 Sobre o Projeto

Site de apresentação interativa documentando a jornada completa do projeto ITIOITALIA, incluindo:

- Timeline de 6 meses (Out/2024 - Abr/2025)
- Aprendizados e insights
- DNA da empresa e branding
- Atividades realizadas
- Planejamento futuro
- Próximos passos

## 🚀 Tecnologias

- HTML5
- CSS3 (Custom properties, Grid, Flexbox)
- JavaScript (Vanilla)
- [AOS](https://michalsnik.github.io/aos/) - Animações on scroll
- [Font Awesome](https://fontawesome.com/) - Ícones
- Google Fonts (Montserrat, Inter)

## 📁 Estrutura do Projeto

```
jornada-web/
├── index.html          # Página principal
├── styles.css          # Estilos customizados
├── script.js           # Lógica e interatividade
├── favicon.svg         # Ícone do site
├── .gitignore          # Arquivos ignorados pelo Git
└── README.md           # Este arquivo
```

## 🌐 Deploy

Este projeto está configurado para deploy automático na Vercel.

### Deploy Manual (primeira vez)

1. Fork este repositório
2. Acesse [Vercel](https://vercel.com)
3. Import repository
4. Deploy!

### Deploy Automático

Após configuração inicial, cada commit na branch `main` dispara deploy automático.

## 🛠️ Desenvolvimento Local

```bash
# Clonar repositório
git clone https://github.com/SEU-USUARIO/itioitalia-jornada.git

# Entrar na pasta
cd itioitalia-jornada

# Abrir com servidor local (escolha um)
python -m http.server 8000
# ou
npx serve
# ou
npx http-server
```

Acesse: `http://localhost:8000`

## 📝 Atualizações

Para atualizar o conteúdo:

1. Edite os arquivos necessários
2. Commit e push:
   ```bash
   git add .
   git commit -m "feat: descrição da mudança"
   git push origin main
   ```
3. Deploy automático acontece em ~30s

## 🎨 Customização

### Cores

Edite as variáveis CSS no `:root` em `styles.css`:

```css
:root {
    --primary-color: #009246;    /* Verde italiano */
    --secondary-color: #CE2B37;  /* Vermelho italiano */
    --accent-color: #FFC107;     /* Dourado */
    /* ... */
}
```

### Conteúdo

Todo o conteúdo está diretamente no `index.html`, organizado por seções.

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- CSS e JS minificados em produção
- Imagens otimizadas via CDN
- Lazy loading de imagens
- Fontes carregadas de forma otimizada
- AOS com throttle para performance

## 🔒 Segurança

- Meta tags de segurança configuradas
- HTTPS enforced (Vercel)
- Content Security Policy headers
- XSS protection

## 📄 Licença

Este projeto é proprietário da ALEPHANT/ITIOITALIA.

© 2025 ALEPHANT - Todos os direitos reservados.

## 👥 Equipe

- **Cliente**: ITIOITALIA (Anne Ceccolini & Alessandro Gargano)
- **Consultoria**: Rodrigo Faerman - ALEPHANT

## 📞 Contato

Para questões sobre este projeto:
- Email: rodrigo@alephant.ai

---

**Status**: 🟢 Ativo | **Versão**: 1.0 | **Última atualização**: Nov 2025
