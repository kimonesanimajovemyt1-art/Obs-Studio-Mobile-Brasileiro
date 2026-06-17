'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';

export default function Suporte() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Formulário enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const supportChannels = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Envie um email para nossa equipe de suporte',
      contact: 'support@obs-studio-mobile.com.br',
      link: 'mailto:support@obs-studio-mobile.com.br',
    },
    {
      icon: '💬',
      title: 'Discord',
      description: 'Junte-se à nossa comunidade no Discord',
      contact: 'Discord Server',
      link: 'https://discord.gg/obs-studio-mobile',
    },
    {
      icon: '🐛',
      title: 'GitHub Issues',
      description: 'Reporte bugs no nosso repositório GitHub',
      contact: 'GitHub',
      link: 'https://github.com/obs-studio-mobile/issues',
    },
    {
      icon: '📱',
      title: 'WhatsApp',
      description: 'Fale conosco via WhatsApp',
      contact: '+55 (11) 9XXXX-XXXX',
      link: 'https://wa.me/5511999999999',
    },
  ];

  const commonIssues = [
    {
      title: 'App não inicia',
      solution: 'Tente limpar o cache do app: Configurações > Apps > OBS Studio Mobile > Armazenamento > Limpar Cache',
    },
    {
      title: 'Sem permissões de câmera',
      solution: 'Vá em Configurações > Apps > OBS Studio Mobile > Permissões e ative Câmera e Microfone',
    },
    {
      title: 'Streaming está lento',
      solution: 'Reduza a qualidade em Configurações de Streaming ou use Wi-Fi em vez de dados móveis',
    },
    {
      title: 'Arquivo de gravação corrompido',
      solution: 'Tente usar um codec diferente (H.264 em vez de H.265) nas configurações',
    },
    {
      title: 'Detecção de voz não funciona',
      solution: 'Verifique se o microfone está funcionando e se o volume está adequado',
    },
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
              Suporte e Contato
            </h1>

            {/* Support Channels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {supportChannels.map((channel, index) => (
                <a
                  key={index}
                  href={channel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-primary"
                >
                  <p className="text-4xl mb-4">{channel.icon}</p>
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{channel.description}</p>
                  <p className="text-primary font-semibold">{channel.contact}</p>
                </a>
              ))}
            </div>

            {/* Contact Form */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Form */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Nome</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Assunto</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white focus:border-primary focus:outline-none transition"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="bug">Reportar Bug</option>
                      <option value="feature">Sugerir Recurso</option>
                      <option value="help">Pedir Ajuda</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Mensagem</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-500 focus:border-primary focus:outline-none transition resize-none"
                      placeholder="Descreva seu problema ou sugestão..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="gradient-button w-full px-6 py-3 rounded-lg text-white font-semibold"
                  >
                    {submitted ? 'Mensagem Enviada!' : 'Enviar Mensagem'}
                  </button>
                </form>
              </div>

              {/* Common Issues */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 gradient-text">Problemas Comuns</h2>
                <div className="space-y-4">
                  {commonIssues.map((issue, index) => (
                    <div key={index} className="border-b border-slate-700 pb-4 last:border-b-0">
                      <h3 className="font-semibold text-white mb-2">{issue.title}</h3>
                      <p className="text-slate-400 text-sm">{issue.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* System Info */}
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-slate-700 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Informações Úteis</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Versão do App</h3>
                  <p className="text-slate-300">v1.0.0</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Android Mínimo</h3>
                  <p className="text-slate-300">Android 7.0 (API 24)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tamanho do App</h3>
                  <p className="text-slate-300">~45 MB</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
