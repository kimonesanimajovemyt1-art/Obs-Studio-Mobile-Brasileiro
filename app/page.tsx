import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: '📹',
      title: 'Gravação de Tela',
      description: 'Capture sua tela inteira com qualidade 1080p @ 60fps',
    },
    {
      icon: '🎥',
      title: 'Câmera Frontal',
      description: 'Adicione sua câmera frontal como fonte de vídeo',
    },
    {
      icon: '🎤',
      title: 'Áudio do Sistema',
      description: 'Grave áudio do sistema e do microfone simultaneamente',
    },
    {
      icon: '🎨',
      title: 'PNGtuber/VTuber',
      description: 'Use avatares PNG com detecção de voz automática',
    },
    {
      icon: '📡',
      title: 'Streaming ao Vivo',
      description: 'Transmita ao vivo para Discord, YouTube, Twitch e mais',
    },
    {
      icon: '⚡',
      title: 'Otimizado',
      description: 'Funciona em celulares antigos e modernos, TV Boxes',
    },
  ];

  const platforms = [
    { name: 'Discord', icon: '💬' },
    { name: 'WhatsApp', icon: '💬' },
    { name: 'YouTube', icon: '📺' },
    { name: 'Twitch', icon: '🎮' },
    { name: 'Facebook', icon: '👥' },
    { name: 'Instagram', icon: '📸' },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 gradient-text">
              Gravação e Streaming Profissional
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              OBS Studio Mobile é o aplicativo oficial para gravar e fazer streaming profissional no seu celular Android. Com suporte a PNGtuber, VTuber, screen capture e transmissão ao vivo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/download" className="gradient-button px-8 py-4 rounded-lg text-white font-semibold text-lg">
                Baixar Agora
              </Link>
              <Link href="/docs" className="px-8 py-4 rounded-lg border border-slate-600 text-white font-semibold text-lg hover:border-primary transition">
                Saiba Mais
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">1080p</p>
                <p className="text-slate-400 text-sm sm:text-base">Qualidade Máxima</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">60 FPS</p>
                <p className="text-slate-400 text-sm sm:text-base">Taxa de Quadros</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-bold gradient-text">Android 7+</p>
                <p className="text-slate-400 text-sm sm:text-base">Compatibilidade</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
              Recursos Poderosos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="card-hover bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-primary">
                  <p className="text-4xl mb-4">{feature.icon}</p>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 gradient-text">
              Transmita para Qualquer Plataforma
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {platforms.map((platform, index) => (
                <div key={index} className="card-hover bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center hover:border-primary">
                  <p className="text-4xl mb-2">{platform.icon}</p>
                  <p className="font-semibold">{platform.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-secondary/20 border-y border-slate-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">
              Comece a Gravar Agora
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Baixe o OBS Studio Mobile gratuitamente e comece a criar conteúdo profissional em minutos.
            </p>
            <Link href="/download" className="gradient-button px-8 py-4 rounded-lg text-white font-semibold text-lg inline-block">
              Download Gratuito
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
