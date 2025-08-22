// Hero.tsx
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-navy/5 via-transparent to-peach/5" />

      <div className="container px-6 py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left: copy */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-navy via-peach to-mocha bg-clip-text text-transparent">
            Marvin Violantes
          </h1>

          <p className="text-xl text-slate/80 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Hello, welcome to my website. I&#39;m Marvin, also known as Mambo.
            Please wander around to learn more about me.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a href="/resume.pdf" download="resume.pdf">
              <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-200 text-slate font-medium transition-all duration-300 hover:bg-mist/40">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right: image */}
        <div className="flex-1 relative">
            <div className="relative">
            <img
              src="/Headshot.jpg"
              alt="Marvin Violantes"
              className="rounded-2xl shadow-xl max-w-100 max-h-100 object-cover mx-auto"
            />
            <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-gradient-to-r from-peach via-mist to-navy blur-2xl opacity-20" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
