import { useState, useEffect } from 'react';
import {
  Zap,
  Code2,
  Palette,
  Terminal,
  Rocket,
  RefreshCw,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight,
  Sun,
  Moon,
  Command
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(false); // Defaults to Day Mode
  const [quote, setQuote] = useState({ text: "The only way to do great work is to love what you do.", author: "Steve Jobs" });
  const [loading, setLoading] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/quotes/random');
      const data = await response.json();
      setQuote({ text: data.quote, author: data.author });
    } catch {
      setQuote({ text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const stack = [
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "Vite 6+",
      desc: "Sub-millisecond HMR with instant cold start engine."
    },
    {
      icon: <Palette className="w-5 h-5 text-sky-500" />,
      title: "Tailwind CSS v4",
      desc: "Zero-configuration JIT styling pipeline and clean accents."
    },
    {
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
      title: "React 19",
      desc: "Optimized server/client component runtime with Actions."
    },
    {
      icon: <Terminal className="w-5 h-5 text-violet-500" />,
      title: "Developer Ready",
      desc: "Pre-configured cn() helper, Lucide icons, and linting."
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden font-sans ${isDark ? 'bg-neutral-950 text-neutral-100 selection:bg-cyan-500 selection:text-black' : 'bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white'
      }`}>

      {/* Background Gradients & Grid Pattern */}
      {isDark ? (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/5 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[450px] bg-gradient-to-b from-sky-200/50 via-indigo-100/30 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        </>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10 flex flex-col min-h-screen justify-between">

        {/* Navigation Bar */}
        <header className={`flex justify-between items-center py-4 border-b backdrop-blur-md transition-colors ${isDark ? 'border-neutral-800/60' : 'border-slate-200/80'
          }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border transition-colors ${isDark ? 'bg-neutral-900 border-neutral-800 text-cyan-400' : 'bg-white border-slate-200 text-sky-600 shadow-xs'
              }`}>
              <Command className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-semibold tracking-tight block">Starter CLI</span>
              <span className={`text-[11px] font-mono block -mt-0.5 ${isDark ? 'text-neutral-500' : 'text-slate-400'}`}>
                template: active
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Day / Night Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl border transition cursor-pointer ${isDark
                ? 'bg-neutral-900 hover:bg-neutral-800 border-neutral-800 text-amber-400'
                : 'bg-white hover:bg-slate-100 border-slate-200 text-slate-700 shadow-xs'
                }`}
              title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <div className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition ${isDark ? 'bg-neutral-900/80 border-neutral-800 text-neutral-400' : 'bg-white border-slate-200 text-slate-600 shadow-xs'
              }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>localhost:5173</span>
            </div>

            <span className={`px-2.5 py-1 rounded-lg border text-xs font-mono transition ${isDark ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-slate-200 text-slate-500 shadow-xs'
              }`}>
              v1.0.0
            </span>
          </div>
        </header>

        {/* Hero Section */}
        <main className="my-auto py-12 flex flex-col items-center text-center space-y-10">

          {/* Greeting Badge */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium transition shadow-sm ${isDark ? 'bg-neutral-900/90 border-neutral-800 text-neutral-300' : 'bg-white border-slate-200 text-slate-700'
            }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Environment Initialized & Ready</span>
          </div>

          {/* Title */}
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
              Welcome back,{' '}
              <span className={`whitespace-nowrap ${isDark ? 'text-white' : 'text-black'}`}>
                Mr. Naveen Kumar
              </span>
            </h1>
            <p className={`text-base sm:text-lg max-w-xl mx-auto leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-600'
              }`}>
              Your personalized workspace is bootstrapped with zero bloat. Start building immediately or verify your stack below.
            </p>
          </div>

          {/* Interactive Quote Box */}
          <div className={`max-w-2xl w-full p-6 sm:p-8 backdrop-blur-xl rounded-2xl border transition-all duration-300 relative group shadow-xl ${isDark
            ? 'bg-neutral-900/50 border-neutral-800/80 hover:border-neutral-700'
            : 'bg-white/80 border-slate-200/90 hover:border-slate-300 shadow-slate-200/50'
            }`}>
            <button
              onClick={fetchQuote}
              disabled={loading}
              title="Get another quote"
              className={`absolute top-4 right-4 p-2 rounded-lg border transition cursor-pointer ${isDark
                ? 'bg-neutral-800/50 hover:bg-neutral-800 text-neutral-400 hover:text-white border-neutral-700/40'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border-slate-200/60 shadow-xs'
                }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <div className={`space-y-3 transition-opacity duration-300 ${loading ? 'opacity-40' : 'opacity-100'}`}>
              <p className={`text-lg sm:text-xl font-normal italic leading-relaxed ${isDark ? 'text-neutral-200' : 'text-slate-700'
                }`}>
                "{quote.text}"
              </p>
              {quote.author && (
                <p className={`text-xs font-mono tracking-widest uppercase font-semibold ${isDark ? 'text-cyan-400' : 'text-sky-600'
                  }`}>
                  — {quote.author}
                </p>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://react.dev"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer active:scale-95 shadow-md ${isDark
                ? 'bg-white hover:bg-neutral-200 text-neutral-950 shadow-white/10'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10'
                }`}
            >
              <span>React Docs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer active:scale-95 shadow-md ${isDark
                ? 'bg-white hover:bg-neutral-200 text-neutral-950 shadow-white/10'
                : 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10'
                }`}
            >
              <span>Tailwind v4 Docs</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </main>

        {/* Stack Grid */}
        <section className="pt-6 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {stack.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all group flex flex-col justify-between shadow-xs hover:shadow-sm ${isDark
                  ? 'bg-neutral-900/30 border-neutral-800/70 hover:border-neutral-700 hover:bg-neutral-900/60'
                  : 'bg-white/70 border-slate-200/80 hover:border-slate-300 hover:bg-white'
                  }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl border group-hover:scale-105 transition-transform ${isDark ? 'bg-neutral-900 border-neutral-800/90' : 'bg-slate-50 border-slate-200'
                    }`}>
                    {item.icon}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-medium ${isDark ? 'text-neutral-500' : 'text-slate-400'
                    }`}>
                    Ready
                  </span>
                </div>
                <div>
                  <h3 className={`text-sm font-semibold mb-1 ${isDark ? 'text-neutral-200' : 'text-slate-800'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${isDark ? 'text-neutral-400' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono transition ${isDark ? 'border-neutral-800/60 text-neutral-500' : 'border-slate-200/80 text-slate-400'
          }`}>
          <p>Ready to deploy • Happy coding</p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>Git branch: main</span>
          </div>
        </footer>

      </div>
    </div>
  );
}