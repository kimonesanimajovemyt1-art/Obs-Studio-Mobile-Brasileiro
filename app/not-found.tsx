import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-2xl font-semibold mb-4">Página não encontrada</p>
        <p className="text-slate-400 mb-8">Desculpe, a página que você está procurando não existe.</p>
        <Link href="/" className="gradient-button px-6 py-3 rounded-lg text-white font-semibold inline-block">
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}
