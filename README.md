# OBS Studio Mobile - Site Oficial

Site profissional de download e documentação para o OBS Studio Mobile - aplicativo de gravação e streaming para Android.

## 🚀 Características

- **Landing Page** - Apresentação profissional com features e CTA
- **Página de Download** - Instruções de instalação, requisitos do sistema
- **Documentação Completa** - Guia de uso, PNGtuber, streaming, dicas
- **FAQ** - 12 perguntas frequentes respondidas
- **Suporte** - Formulário de contato e canais de suporte
- **Design Responsivo** - Otimizado para mobile, tablet e desktop
- **Tema Escuro** - Interface profissional com gradientes azul/roxo

## 📋 Requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## 🛠️ Instalação Local

1. **Clonar ou extrair o projeto**
   ```bash
   cd obs-studio-website
   ```

2. **Instalar dependências**
   ```bash
   npm install
   ```

3. **Executar em desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abrir no navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Build para Produção

```bash
npm run build
npm start
```

## 📦 Deploy

### Opção 1: Vercel (Recomendado para Next.js)

1. Fazer push do código para GitHub
2. Conectar repositório em https://vercel.com
3. Vercel detectará automaticamente que é um projeto Next.js
4. Deploy automático em cada push

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Opção 2: Netlify

1. Fazer push do código para GitHub
2. Conectar repositório em https://netlify.com
3. Configurar build command: `npm run build`
4. Configurar publish directory: `.next`

### Opção 3: Servidor Próprio

```bash
# Build
npm run build

# Fazer upload dos arquivos para seu servidor
# Instalar dependências no servidor
npm install --production

# Executar
npm start
```

## 📁 Estrutura do Projeto

```
obs-studio-website/
├── app/
│   ├── page.tsx              # Home
│   ├── layout.tsx            # Layout raiz
│   ├── globals.css           # Estilos globais
│   ├── download/
│   │   └── page.tsx          # Página de download
│   ├── docs/
│   │   └── page.tsx          # Documentação
│   ├── faq/
│   │   └── page.tsx          # FAQ
│   ├── suporte/
│   │   └── page.tsx          # Suporte
│   ├── not-found.tsx         # Página 404
│   └── global-error.tsx      # Página de erro
├── components/
│   ├── Header.tsx            # Navegação
│   └── Footer.tsx            # Rodapé
├── public/                   # Arquivos estáticos
├── tailwind.config.js        # Configuração Tailwind
├── postcss.config.js         # Configuração PostCSS
├── tsconfig.json             # Configuração TypeScript
├── next.config.js            # Configuração Next.js
└── package.json              # Dependências
```

## 🎨 Personalizações

### Cores
Edite `tailwind.config.js`:
```js
colors: {
  primary: '#0a7ea4',      // Azul
  secondary: '#8B5CF6',    // Roxo
}
```

### Links de Download
Edite `app/download/page.tsx`:
- Substitua `/obs-studio-mobile.apk` pelo link real do APK
- Atualize o link do Google Play Store

### Informações de Contato
Edite `components/Footer.tsx` e `app/suporte/page.tsx`:
- Email: `support@obs-studio-mobile.com.br`
- WhatsApp: `+55 (11) 9XXXX-XXXX`
- Discord: `https://discord.gg/obs-studio-mobile`
- GitHub: `https://github.com/obs-studio-mobile`

## 📝 Páginas

### Home (`/`)
- Hero section com apresentação
- 6 cards de features
- Plataformas de streaming suportadas
- CTA para download

### Download (`/download`)
- Botões de download (APK e Google Play)
- Requisitos do sistema
- Instruções de instalação passo a passo
- Troubleshooting

### Documentação (`/docs`)
- Guia de interface
- Configurações de gravação
- PNGtuber/VTuber
- Streaming ao vivo
- Dicas e truques

### FAQ (`/faq`)
- 12 perguntas frequentes
- Respostas detalhadas
- Accordion interativo

### Suporte (`/suporte`)
- Formulário de contato
- 4 canais de suporte (Email, Discord, GitHub, WhatsApp)
- Problemas comuns e soluções
- Informações do sistema

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Executar em desenvolvimento
npm run build    # Build para produção
npm start        # Executar produção
npm run lint     # Verificar código
```

## 📱 Responsividade

O site é totalmente responsivo:
- **Mobile** (320px+)
- **Tablet** (768px+)
- **Desktop** (1024px+)

## ♿ Acessibilidade

- Semântica HTML correta
- Contraste de cores adequado
- Navegação por teclado
- ARIA labels onde necessário

## 📄 Licença

MIT

## 🤝 Suporte

Para suporte, entre em contato através de:
- Email: support@obs-studio-mobile.com.br
- Discord: https://discord.gg/obs-studio-mobile
- GitHub Issues: https://github.com/obs-studio-mobile/issues

---

**Desenvolvido com ❤️ para a comunidade brasileira**
