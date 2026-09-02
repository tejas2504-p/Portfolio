export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8">
          LET&apos;S BUILD <br className="hidden sm:block" />
          SOMETHING TOGETHER.
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
          Have an idea, opportunity or project? <br />
          Let&apos;s connect.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a
            href="mailto:#"
            className="px-8 py-4 bg-white text-black font-semibold tracking-widest text-sm uppercase rounded hover:bg-gray-200 transition-colors"
          >
            GET IN TOUCH
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-widest text-sm uppercase rounded hover:bg-white/5 transition-colors"
          >
            GITHUB
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-widest text-sm uppercase rounded hover:bg-white/5 transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="mailto:#"
            className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold tracking-widest text-sm uppercase rounded hover:bg-white/5 transition-colors"
          >
            EMAIL
          </a>
        </div>
      </div>
    </section>
  );
}
