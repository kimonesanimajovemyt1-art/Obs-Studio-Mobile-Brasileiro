'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'O OBS Studio Mobile é gratuito?',
      answer: 'Sim! O OBS Studio Mobile é completamente gratuito e de código aberto. Não há anúncios, assinaturas ou taxas ocultas.',
    },
    {
      question: 'Qual é o requisito mínimo de Android?',
      answer: 'O app requer Android 7.0 (API 24) ou superior. Funciona em celulares antigos e modernos, incluindo TV Boxes como a MX9 5G.',
    },
    {
      question: 'Posso gravar chamadas do Discord e WhatsApp?',
      answer: 'Sim! O app suporta screen capture (gravação de tela) que permite gravar qualquer aplicativo, incluindo Discord e WhatsApp. Você também pode adicionar sua câmera frontal como fonte.',
    },
    {
      question: 'Qual é a qualidade máxima de gravação?',
      answer: 'A qualidade máxima é 1080p @ 60 FPS com bitrate de até 10 Mbps. A qualidade real depende do seu dispositivo e conexão.',
    },
    {
      question: 'Posso transmitir ao vivo para Discord?',
      answer: 'Sim! O app suporta streaming RTMP para Discord, YouTube, Twitch, Facebook e outras plataformas compatíveis.',
    },
    {
      question: 'Como funciona o PNGtuber?',
      answer: 'O PNGtuber permite usar uma imagem PNG como avatar que se anima com a detecção de voz. Você pode fazer upload de qualquer imagem PNG e ajustar sua posição e escala.',
    },
    {
      question: 'Preciso de Wi-Fi para usar o app?',
      answer: 'Wi-Fi não é obrigatório, mas é recomendado para melhor qualidade. Você pode usar 4G/5G, mas a qualidade pode ser reduzida.',
    },
    {
      question: 'Quanto espaço o app ocupa?',
      answer: 'O app ocupa aproximadamente 45 MB. Você também precisa de espaço livre para armazenar as gravações (depende da duração e qualidade).',
    },
    {
      question: 'Posso usar múltiplas câmeras?',
      answer: 'Sim! Você pode adicionar câmera frontal e traseira como fontes separadas e alternar entre elas durante a gravação.',
    },
    {
      question: 'O app funciona em TV Boxes?',
      answer: 'Sim! O app foi otimizado para funcionar em TV Boxes como a MX9 5G. Você pode usar um controle remoto para navegar.',
    },
    {
      question: 'Como reportar bugs ou sugerir recursos?',
      answer: 'Você pode reportar bugs e sugerir recursos através da página de Suporte ou enviando um email para support@obs-studio-mobile.com.br',
    },
    {
      question: 'Posso editar vídeos dentro do app?',
      answer: 'Não, o app é focado em gravação e streaming. Para edição, recomendamos usar apps como CapCut, Adobe Premiere ou DaVinci Resolve.',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
              Perguntas Frequentes
            </h1>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden hover:border-primary transition"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-700/30 transition"
                  >
                    <h3 className="text-lg font-semibold text-left">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-primary transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>

                  {openIndex === index && (
                    <div className="px-6 py-4 border-t border-slate-700 bg-slate-900/30">
                      <p className="text-slate-300">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Still have questions */}
            <div className="mt-12 bg-gradient-to-r from-primary/20 to-secondary/20 border border-slate-700 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Ainda tem dúvidas?</h2>
              <p className="text-slate-300 mb-6">
                Não encontrou a resposta que procurava? Entre em contato com nosso suporte.
              </p>
              <a
                href="/suporte"
                className="gradient-button px-6 py-3 rounded-lg text-white font-semibold inline-block"
              >
                Contatar Suporte
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
