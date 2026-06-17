'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold gradient-text mb-4">Erro</h1>
            <p className="text-2xl font-semibold mb-4">Algo deu errado</p>
            <p className="text-slate-400 mb-8">Desculpe, ocorreu um erro inesperado.</p>
            <button
              onClick={() => reset()}
              className="gradient-button px-6 py-3 rounded-lg text-white font-semibold"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
