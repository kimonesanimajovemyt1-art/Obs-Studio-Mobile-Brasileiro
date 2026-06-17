# 🚀 Guia de Deploy - OBS Studio Mobile Website

Este guia explica como fazer o deploy do site no Vercel com o domínio `obs-studio-mobile.com.br`.

## Opção 1: Deploy Automático (Recomendado)

### Pré-requisitos
- Conta no GitHub
- Conta no Vercel (gratuita)
- Domínio `obs-studio-mobile.com.br` (ou outro de sua escolha)

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Preencha os dados:
   - **Repository name**: `obs-studio-mobile-website`
   - **Description**: "Site oficial de download do OBS Studio Mobile"
   - **Public**: Deixe marcado
3. Clique em **"Create repository"**

### Passo 2: Fazer Push do Código

```bash
cd obs-studio-website

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/obs-studio-mobile-website.git

# Renomear branch para main
git branch -M main

# Fazer push
git push -u origin main
```

### Passo 3: Deploy no Vercel

1. Acesse https://vercel.com/signup
2. Clique em **"Continue with GitHub"**
3. Autorize o Vercel a acessar seus repositórios
4. Clique em **"New Project"**
5. Selecione **`obs-studio-mobile-website`**
6. Vercel detectará automaticamente Next.js
7. Clique em **"Deploy"**

✅ **Pronto!** Seu site estará disponível em `https://obs-studio-mobile-website.vercel.app`

### Passo 4: Configurar Domínio Customizado

1. No Vercel, vá para **Settings** → **Domains**
2. Clique em **"Add"**
3. Digite `obs-studio-mobile.com.br`
4. Siga as instruções para configurar o DNS:
   - Se seu domínio está em um registrador (GoDaddy, Namecheap, etc.):
     - Copie os nameservers do Vercel
     - Vá para seu registrador
     - Atualize os nameservers
   - Se seu domínio está no Vercel:
     - Clique em "Verify" e pronto!

## Opção 2: Deploy Manual em Servidor Próprio

### Pré-requisitos
- Servidor com Node.js 18+
- SSH acesso ao servidor
- Domínio apontado para seu servidor

### Passo 1: Fazer Build

```bash
npm run build
```

### Passo 2: Fazer Upload para Servidor

```bash
# Comprimir arquivos (excluindo node_modules)
zip -r obs-studio-website.zip . -x "node_modules/*" ".next/*"

# Fazer upload via SCP
scp obs-studio-website.zip usuario@seu-servidor:/home/usuario/
```

### Passo 3: Executar no Servidor

```bash
# SSH para o servidor
ssh usuario@seu-servidor

# Extrair arquivos
unzip obs-studio-website.zip

# Instalar dependências
npm install --production

# Iniciar aplicação
npm start

# Ou usar PM2 para manter rodando
npm install -g pm2
pm2 start npm --name "obs-website" -- start
pm2 startup
pm2 save
```

### Passo 4: Configurar Nginx (Reverse Proxy)

```nginx
server {
    listen 80;
    server_name obs-studio-mobile.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Passo 5: Configurar SSL (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d obs-studio-mobile.com.br
```

## Opção 3: Deploy no Netlify

### Passo 1: Conectar GitHub

1. Acesse https://netlify.com
2. Clique em **"New site from Git"**
3. Selecione **GitHub**
4. Autorize e selecione o repositório

### Passo 2: Configurar Build

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- Clique em **"Deploy site"**

### Passo 3: Configurar Domínio

1. Vá para **Site settings** → **Domain management**
2. Clique em **"Add domain"**
3. Digite seu domínio
4. Siga as instruções de DNS

## Monitoramento e Manutenção

### Vercel
- Logs: Dashboard → Deployments → Logs
- Analíticos: Dashboard → Analytics
- Performance: Dashboard → Speed Insights

### Servidor Próprio
```bash
# Ver logs
pm2 logs obs-website

# Ver status
pm2 status

# Reiniciar
pm2 restart obs-website

# Parar
pm2 stop obs-website
```

## Troubleshooting

### Site não carrega
- Verificar se o build foi bem-sucedido
- Verificar logs de erro
- Limpar cache do navegador

### Domínio não funciona
- Verificar se DNS foi propagado (pode levar até 48h)
- Verificar configuração de DNS no registrador
- Testar com `nslookup obs-studio-mobile.com.br`

### Performance lenta
- Verificar se o servidor tem recursos suficientes
- Ativar cache no Nginx/Vercel
- Otimizar imagens

## Atualizações Futuras

Para atualizar o site:

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das mudanças"
git push origin main

# Vercel fará deploy automático!
```

---

**Dúvidas?** Entre em contato através de support@obs-studio-mobile.com.br
