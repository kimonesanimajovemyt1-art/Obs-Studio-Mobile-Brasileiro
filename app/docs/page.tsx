import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Docs() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text">
              Documentação
            </h1>

            {/* Getting Started */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Começando</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  O OBS Studio Mobile é um aplicativo profissional de gravação e streaming para Android. 
                  Ele oferece recursos avançados como screen capture, PNGtuber/VTuber, e transmissão ao vivo 
                  para múltiplas plataformas.
                </p>
                <p>
                  Para começar, <a href="/download" className="text-primary hover:underline">baixe o aplicativo</a> e 
                  siga as instruções de instalação. O app requer Android 7.0 ou superior.
                </p>
              </div>
            </div>

            {/* Interface */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Interface Principal</h2>
              <div className="space-y-4 text-slate-300">
                <h3 className="font-semibold text-white">Home Screen</h3>
                <p>
                  A tela inicial apresenta dois botões principais: "Gravar" e "Iniciar Live". 
                  Também há um grid de acesso rápido para acessar Cenas, Fontes, Configurações de Gravação e Streaming.
                </p>

                <h3 className="font-semibold text-white mt-4">Gerenciador de Cenas</h3>
                <p>
                  Cenas são configurações salvas de fontes e layouts. Você pode criar múltiplas cenas 
                  para diferentes tipos de conteúdo e alternar entre elas durante a gravação.
                </p>

                <h3 className="font-semibold text-white mt-4">Gerenciador de Fontes</h3>
                <p>
                  Fontes são elementos que você adiciona às suas cenas: câmera, tela, imagens, áudio, PNGtuber, etc.
                  Cada fonte pode ser redimensionada, reposicionada e configurada individualmente.
                </p>
              </div>
            </div>

            {/* Recording */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Gravação de Vídeo</h2>
              <div className="space-y-4 text-slate-300">
                <h3 className="font-semibold text-white">Configurações de Gravação</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Resolução:</strong> Escolha entre 480p, 720p ou 1080p</li>
                  <li><strong>Taxa de Quadros:</strong> 24, 30 ou 60 FPS</li>
                  <li><strong>Taxa de Bits:</strong> Baixa (2.5 Mbps), Média (5 Mbps) ou Alta (10 Mbps)</li>
                  <li><strong>Codec:</strong> H.264 (compatível) ou H.265 (melhor compressão)</li>
                  <li><strong>Formato:</strong> MP4 ou MOV</li>
                </ul>

                <h3 className="font-semibold text-white mt-4">Screen Capture</h3>
                <p>
                  O app pode capturar sua tela inteira, permitindo gravar aplicativos como Discord, 
                  WhatsApp, YouTube, etc. A captura de tela funciona em Android 5.0+.
                </p>

                <h3 className="font-semibold text-white mt-4">Áudio</h3>
                <p>
                  Você pode gravar áudio do microfone, do sistema ou de ambos simultaneamente. 
                  O app suporta múltiplas fontes de áudio.
                </p>
              </div>
            </div>

            {/* PNGtuber */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">PNGtuber/VTuber</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  O OBS Studio Mobile oferece suporte completo para PNGtuber e VTuber com detecção de voz automática.
                </p>

                <h3 className="font-semibold text-white">Como Usar</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Vá para a aba "PNGtuber"</li>
                  <li>Clique em "Upload de Avatar" e selecione sua imagem PNG</li>
                  <li>Ajuste a escala e posição do avatar</li>
                  <li>Ative "Detecção de Voz" para animação automática</li>
                  <li>Configure o número de frames se usar sprite sheets</li>
                </ol>

                <h3 className="font-semibold text-white mt-4">Dicas</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use imagens PNG com fundo transparente</li>
                  <li>Tamanho recomendado: 512x512 pixels ou maior</li>
                  <li>Para sprite sheets, use frames em sequência horizontal</li>
                  <li>A detecção de voz funciona melhor com áudio claro</li>
                </ul>
              </div>
            </div>

            {/* Streaming */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Streaming ao Vivo</h2>
              <div className="space-y-4 text-slate-300">
                <p>
                  O app suporta streaming RTMP para múltiplas plataformas. Você pode transmitir para 
                  Discord, YouTube, Twitch, Facebook, Instagram e outras plataformas compatíveis com RTMP.
                </p>

                <h3 className="font-semibold text-white">Configurar Streaming</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Vá para "Configurações de Streaming"</li>
                  <li>Selecione a plataforma (YouTube, Twitch, Facebook, etc.)</li>
                  <li>Insira sua chave de stream</li>
                  <li>Clique em "Testar Conexão"</li>
                  <li>Clique em "Iniciar Live" para começar</li>
                </ol>

                <h3 className="font-semibold text-white mt-4">Obter Chave de Stream</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>YouTube:</strong> Estúdio YouTube → Transmissão ao vivo → Configurar</li>
                  <li><strong>Twitch:</strong> Criador → Transmissão ao vivo → Chave de stream</li>
                  <li><strong>Facebook:</strong> Criar → Transmissão ao vivo</li>
                  <li><strong>Discord:</strong> Configurações do servidor → Transmissão ao vivo</li>
                </ul>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Dicas e Truques</h2>
              <div className="space-y-4 text-slate-300">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Use Wi-Fi para melhor qualidade de streaming</li>
                  <li>Feche outros apps para melhor performance</li>
                  <li>Reduza a qualidade em dispositivos antigos</li>
                  <li>Teste a conexão antes de transmitir ao vivo</li>
                  <li>Mantenha a bateria carregada durante gravações longas</li>
                  <li>Use headphones para monitorar o áudio</li>
                  <li>Salve suas configurações em múltiplas cenas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
