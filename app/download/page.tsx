import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Download() {
  const instructions = [
    {
      step: '1',
      title: 'Baixar o APK',
      description: 'Clique no botão de download abaixo para baixar o arquivo APK.',
    },
    {
      step: '2',
      title: 'Ativar Fontes Desconhecidas',
      description: 'Vá em Configurações > Segurança > Ativar "Fontes Desconhecidas"',
    },
    {
      step: '3',
      title: 'Instalar o Arquivo',
      description: 'Abra o arquivo APK baixado e clique em "Instalar"',
    },
    {
      step: '4',
      title: 'Conceder Permissões',
      description: 'Permita acesso à câmera, microfone e armazenamento',
    },
    {
      step: '5',
      title: 'Começar a Gravar',
      description: 'Abra o app e comece a gravar ou fazer streaming',
    },
  ];

  const requirements = [
    { label: 'Sistema Operacional', value: 'Android 7.0 ou superior' },
    { label: 'Processador', value: 'Qualcomm Snapdragon 400 ou superior' },
    { label: 'RAM', value: 'Mínimo 2GB (recomendado 4GB)' },
    { label: 'Armazenamento', value: 'Mínimo 200MB de espaço livre' },
    { label: 'Câmera', value: 'Câmera frontal e traseira (opcional)' },
    { label: 'Conexão', value: 'Wi-Fi ou 4G/5G para streaming' },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Download Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto w-full">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
              Baixar OBS Studio Mobile
            </h1>

            {/* Download Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* APK Download */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-primary transition">
                <p className="text-5xl mb-4">📱</p>
                <h3 className="text-2xl font-bold mb-4">APK Direto</h3>
                <p className="text-slate-400 mb-6">
                  Baixe o arquivo APK e instale diretamente no seu celular
                </p>
                <a
                  href="https://github.com/kimonesanimajovemyt1-art/Obs-Studio-Mobile-Brasileiro/releases/tag/untagged-a5f6b188dd6f36c6d2df"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button px-6 py-3 rounded-lg text-white font-semibold inline-block"
                >
                  Baixar APK (v1.0.0)
                </a>
                <p className="text-sm text-slate-400 mt-4">
                  Tamanho: ~45-60 MB | Versão: 1.0.0 | GitHub Release
                </p>
              </div>

              {/* Google Play */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:border-primary transition">
                <p className="text-5xl mb-4">🎮</p>
                <h3 className="text-2xl font-bold mb-4">Google Play</h3>
                <p className="text-slate-400 mb-6">
                  Instale via Google Play Store com atualizações automáticas
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.obs.studio.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-button px-6 py-3 rounded-lg text-white font-semibold inline-block"
                >
                  Abrir no Play Store
                </a>
                <p className="text-sm text-slate-400 mt-4">
                  Compatível com Android 7.0+
                </p>
              </div>
            </div>

            {/* System Requirements */}
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Requisitos do Sistema</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {requirements.map((req, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-b-0">
                    <span className="font-semibold text-slate-300">{req.label}</span>
                    <span className="text-primary">{req.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Steps */}
            <div>
              <h2 className="text-2xl font-bold mb-8 gradient-text">Como Instalar</h2>
              <div className="space-y-4">
                {instructions.map((instruction, index) => (
                  <div key={index} className="flex gap-6 bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-primary transition">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary">
                        <span className="text-white font-bold">{instruction.step}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{instruction.title}</h3>
                      <p className="text-slate-400">{instruction.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* GitHub Link */}
            <div className="mt-12 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <p className="text-3xl">🐙</p>
                <h2 className="text-2xl font-bold gradient-text">Código Aberto no GitHub</h2>
              </div>
              <p className="text-slate-300 mb-4">
                O código-fonte do OBS Studio Mobile está disponível no GitHub. Você pode contribuir, reportar bugs ou fazer fork do projeto!
              </p>
              <a
                href="https://github.com/kimonesanimajovemyt1-art/Obs-Studio-Mobile-Brasileiro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition"
              >
                Ver no GitHub →
              </a>
            </div>

            {/* Troubleshooting */}
            <div className="mt-12 bg-slate-900/50 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 gradient-text">Problemas na Instalação?</h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Erro de arquivo:</strong> Verifique se Fontes Desconhecidas está ativado</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>App não funciona:</strong> Reinicie o celular e tente novamente</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Sem permissões:</strong> Vá em Configurações, Apps, OBS Studio Mobile, Permissões</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Ainda com problemas?</strong> <Link href="/suporte" className="text-primary hover:underline">Contate o suporte</Link></span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
