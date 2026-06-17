'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">OBS Studio Mobile</h3>
            <p className="text-slate-400 text-sm">
              Aplicativo profissional de gravação e streaming para Android com suporte a PNGtuber/VTuber.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
              <li><Link href="/download" className="hover:text-primary transition">Download</Link></li>
              <li><Link href="/docs" className="hover:text-primary transition">Documentação</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/suporte" className="hover:text-primary transition">Suporte</Link></li>
              <li><Link href="/changelog" className="hover:text-primary transition">Changelog</Link></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">GitHub</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Discord</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="/privacidade" className="hover:text-primary transition">Privacidade</Link></li>
              <li><Link href="/termos" className="hover:text-primary transition">Termos de Uso</Link></li>
              <li><Link href="/licenca" className="hover:text-primary transition">Licença</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {currentYear} OBS Studio Mobile. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9.5 5M9 19c1 0 1-1 1-1" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/><path d="M16 11.37A4 4 0 1112.63 8A4 4 0 0116 11.37Z" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.175h-15.23c-2.432 0-4.385 1.953-4.385 4.385v9.88c0 2.432 1.953 4.385 4.385 4.385h15.23c2.432 0 4.385-1.953 4.385-4.385v-9.88c0-2.432-1.953-4.385-4.385-4.385zm-9.615 12.825v-7.5l5.385 3.75-5.385 3.75z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
