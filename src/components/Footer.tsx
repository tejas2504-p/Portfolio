export default function Footer() {
  return (
    <footer className="py-8 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm font-light">
          © 2026 Tejas Prajapati
        </div>
        
        <div className="flex gap-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
          >
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
          >
            LinkedIn
          </a>
        </div>
        
        <div className="text-gray-500 text-sm font-light">
          Built with Next.js
        </div>
      </div>
    </footer>
  );
}
