import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl font-bold text-blue-600">404</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Pagina niet gevonden</h1>
          <p className="text-xl text-gray-600 max-w-lg mx-auto">
            Sorry, de pagina die je zoekt bestaat niet. Misschien is deze verplaatst of verwijderd.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>Terug naar home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white hover:bg-gray-100 text-gray-900 border border-gray-300 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Ga terug</span>
          </button>
        </div>

        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Populaire pagina&apos;s</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/pakketten/"
              className="text-blue-600 hover:text-blue-700 hover:underline"
            >
              Pakketten
            </Link>
            <Link href="/faq/" className="text-blue-600 hover:text-blue-700 hover:underline">
              FAQ
            </Link>
            <Link href="/contact/" className="text-blue-600 hover:text-blue-700 hover:underline">
              Contact
            </Link>
            <Link href="/over-mij/" className="text-blue-600 hover:text-blue-700 hover:underline">
              Over mij
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
