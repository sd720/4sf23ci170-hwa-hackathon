/* eslint-disable */
import {
  ShoppingCart,
  X,
  Check,
  ChevronRight,
  Clock,
  PawPrint,
  Star,
  ShieldCheck,
  Zap,
  Bone,
  Target,
  Aperture,
  ArrowRight,
  Menu,
  RotateCcw,
} from "lucide-react";
/* eslint-enable */

import { product } from "../data/product";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-amber-500/30 selection:text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/30">
                <span className="text-white font-black text-sm tracking-tighter">CC</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">ChronoCore</span>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
              <a href="#mechanism" className="transition-colors hover:text-white">
                How It Works
              </a>
              <a href="#customizer" className="transition-colors hover:text-white">
                Customize
              </a>
              <a href="#reviews" className="transition-colors hover:text-white">
                Reviews
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <section className="relative py-20 lg:py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-white text-center mb-4">How the Cycle Works</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A weighted mechanical pendulum advances through four stages, unlocking each chamber on schedule — no electronics required.
            </p>
          </div>
        </section>

        <section id="mechanism" className="py-24 border-y border-slate-800 bg-slate-900/50 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h3 className="text-2xl font-bold text-white mb-2">Hour 1 — Lick Ring</h3>
              <p className="text-slate-400 max-w-xl mx-auto">
                The pendulum releases the soft lick ring to start the cycle calm and focused.
              </p>
            </div>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Aperture size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">Hour 2 — Foraging Maze</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Kibble drops into a rotating maze that rewards nose-work and patience.
            </p>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">Hour 3 — Deep Gnaw</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              A durable chew target locks in place for sustained gnawing satisfaction.
            </p>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Bone size={24} strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">Hour 5 — Jackpot Chamber</h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              The final compartment pops open with a high-value treat jackpot.
            </p>
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Star size={24} strokeWidth={2} />
            </div>
          </div>
        </section>

        <section id="customizer" className="py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Build Your Capsule</h2>
                <p className="text-slate-400">Choose size, chew grade, and bundle.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="space-y-6">
                <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Size</p>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-amber-500/20 border border-amber-500/40 text-amber-100">
                    Small
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-slate-900/40 border-transparent text-slate-300 hover:bg-slate-800/80 hover:border-slate-600">
                    Medium
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-slate-900/40 border-transparent text-slate-300 hover:border-slate-600">
                    Large
                  </button>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Chew Grade</p>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-amber-500/20 border border-amber-500/40 text-amber-100">
                    Standard
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-slate-900/40 border-transparent text-slate-300 hover:bg-slate-800/80 hover:border-slate-600">
                    Aggressive
                  </button>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Bundle</p>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-amber-500/20 border border-amber-500/40 text-amber-100">
                    Solo
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-slate-900/40 border-transparent text-slate-300 hover:bg-slate-800/80 hover:border-slate-600">
                    Duo
                  </button>
                  <button className="w-full px-4 py-3 rounded-xl transition-all text-left bg-slate-900/40 border-transparent text-slate-300 hover:border-slate-600">
                    Family
                  </button>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-2xl border border-slate-700 bg-slate-800/60 p-8 shadow-2xl shadow-black/40">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  <div className="w-full lg:w-64 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-2xl border-2 border-dashed border-slate-600 bg-slate-900/40 flex items-center justify-center relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
                      <PawPrint size={48} strokeWidth={2} className="text-slate-600 group-hover:text-amber-500 transition-colors" />
                    </div>
                    <p className="mt-4 text-xs text-slate-500 text-center">ChronoCore Capsule</p>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="flex justify-between items-end pb-4 border-b border-slate-700">
                      <div>
                        <p className="text-sm text-slate-400">Configuration</p>
                        <p className="text-white font-medium capitalize">Small • Standard • Solo</p>
                      </div>
                      <span className="text-2xl font-bold text-white">$49.00</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Bundle (base)</span>
                        <span className="font-mono font-bold text-amber-400">$49.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Size — Small</span>
                        <span className="font-mono font-bold text-amber-400">+$0.00</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-400">Chew — Standard</span>
                        <span className="font-mono font-bold text-amber-400">+$0.00</span>
                      </div>
                    </div>

                    <div className="bg-slate-900/40 rounded-xl border border-slate-700 p-4">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Includes</p>
                      <ul className="space-y-2 text-sm text-slate-300">
                        <li className="flex items-center gap-2">
                          <Check size={14} strokeWidth={2} className="text-emerald-400" />
                          1x ChronoCore Capsule
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} strokeWidth={2} className="text-emerald-400" />
                          1x Treat Sample
                        </li>
                      </ul>
                    </div>

                    <button className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg bg-gradient-to-br from-amber-500 to-orange-600 text-slate-900 shadow-xl shadow-amber-500/40 hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none">
                      <ShoppingCart size={20} strokeWidth={2} />
                      Add to Cart — $49.00
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="py-24 border-y border-slate-800 bg-slate-900/30 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">What Owners Say</h2>
              <p className="text-slate-400 max-w-xl mx-auto">Real reviews from real dogs (and their humans).</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} strokeWidth={2} className="text-slate-600" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-4 italic">"My dog loves it!"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">J</div>
                  <div>
                    <p className="text-xs font-bold text-white">Jane D.</p>
                    <p className="text-xs text-slate-500">Medium dog • Today</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} strokeWidth={2} className="text-slate-600" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-4 italic">"Game changer!"</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">M</div>
                  <div>
                    <p className="text-xs font-bold text-white">Mike R.</p>
                    <p className="text-xs text-slate-500">Large dog • Yesterday</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
                <div className="flex items-center gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} strokeWidth={2} className="text-slate-600" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 mb-4 italic">"Worth every penny."</p>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300">S</div>
                  <div>
                    <p className="text-xs font-bold text-white">Sarah K.</p>
                    <p className="text-xs text-slate-500">Small dog • 2 days ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
              <div className="rounded-xl border border-slate-700 bg-slate-800/40 overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-800/60 group">
                  <span className="text-white font-medium">How long does shipping take?</span>
                  <ChevronRight size={18} strokeWidth={2} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                </button>
                <div className="px-6 pb-4 text-sm text-slate-300">
                  Shipping typically takes 3-5 business days within the US.
                </div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800/40 overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-800/60 group">
                  <span className="text-white font-medium">Is it safe for puppies?</span>
                  <ChevronRight size={18} strokeWidth={2} className="text-slate-500 group-hover:text-amber-400 transition-colors" />
                </button>
                <div className="px-6 pb-4 text-sm text-slate-300">
                  Yes, ChronoCore is safe for puppies 8+ weeks under supervision.
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-slate-800 bg-black py-12 px-6">
          <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                <span className="text-[10px] font-black text-white">CC</span>
              </div>
              <span className="font-bold text-white">ChronoCore</span>
            </div>
            <p className="text-xs text-slate-500">
              ChronoCore: The 6-Hour Autonomous Foraging & Gnaw Capsule.
            </p>
            <div className="flex gap-4 text-slate-500 text-xs">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}