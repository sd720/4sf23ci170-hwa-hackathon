"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Check,
  ChevronDown,
  Clock,
  PawPrint,
  Star,
  ShieldCheck,
  Zap,
  Bone,
  Target,
  Aperture,
  ArrowRight,
  RotateCcw,
} from "lucide-react";
import { product, SizeId, ChewGradeId, BundleId } from "../data/product";

export default function Home() {
  const [selectedSize, setSelectedSize] = useState<SizeId>("medium");
  const [selectedChew, setSelectedChew] = useState<ChewGradeId>("titan");
  const [selectedBundle, setSelectedBundle] = useState<BundleId>("starter");
  const [openFaq, setOpenFaq] = useState<string | null>("f1");

  const sizeObj = product.sizes.find((s) => s.id === selectedSize) || product.sizes[0];
  const chewObj = product.chewGrades.find((c) => c.id === selectedChew) || product.chewGrades[0];
  const bundleObj = product.bundles.find((b) => b.id === selectedBundle) || product.bundles[0];

  // Base bundle price + size surcharge
  const totalPrice = Math.round((bundleObj.price + sizeObj.surcharge) * 100) / 100;

  const handleConfigureAndBuy = () => {
    const configuredItem = {
      id: `${selectedBundle}-${selectedSize}-${selectedChew}`,
      name: `ChronoCore ${bundleObj.label} (${sizeObj.label} • ${chewObj.label})`,
      price: totalPrice,
      quantity: 1,
    };
    if (typeof window !== "undefined") {
      localStorage.setItem("checkout-items", JSON.stringify([configuredItem]));
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Clock size={14} className="text-amber-400" />
            100% Autonomous 6-Hour Dog Enrichment
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Keep Your Dog Happy, Calm & Engaged{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              While You Are Away
            </span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            ChronoCore™ is a patented, battery-free gyroscopic foraging capsule that releases 4 staggered enrichment chambers over 6 continuous hours — eliminating canine separation anxiety naturally.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#customizer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30 hover:scale-105"
            >
              <ShoppingCart size={18} />
              Build Your Capsule — ${totalPrice.toFixed(2)}
            </a>
            <a
              href="#mechanism"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-slate-200 border border-slate-700 bg-slate-800/60 hover:bg-slate-700 transition-all"
            >
              See How It Works
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-left">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <Zap className="text-amber-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white text-xs">Zero Batteries</p>
                <p className="text-[11px] text-slate-400">Pure mechanical gravity clockwork</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <ShieldCheck className="text-emerald-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white text-xs">Gnaw-Proof Titan Polymer</p>
                <p className="text-[11px] text-slate-400">FDA-compliant chew resistance</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <PawPrint className="text-amber-400 flex-shrink-0" size={20} />
              <div>
                <p className="font-bold text-white text-xs">Vet & Behaviorist Backed</p>
                <p className="text-[11px] text-slate-400">Clinically tested anti-anxiety</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Mechanism Visualizer */}
      <section id="mechanism" className="py-20 border-y border-slate-800/80 bg-slate-900/60 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">The Innovation</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-4">
              4 Physical Staged Chambers Across 6 Hours
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm">
              Standard dog toys are solved in 12 minutes. ChronoCore's weighted pendulum unlocks consecutive physical chambers only after exact intervals of canine engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Aperture size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Hour 0 – 1</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Stage 1: Lick Calming Ring</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Releases peanut butter/paste textured lick grooves right as the owner departs, inducing natural endorphin release and immediate focus.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Target size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Hour 1 – 3</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Stage 2: Foraging Maze</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ratchet shifts to drop slow-dispense kibble into an internal spiral labyrinth rewarding nudges, paws, and nose-work.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Bone size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Hour 3 – 5</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Stage 3: Deep Gnaw Core</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Exposes the heavy-duty vulcanized natural rubber core for intense chewing during peak afternoon restlessness.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6 relative">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Star size={24} />
              </div>
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">Hour 5 – 6</span>
              <h3 className="text-xl font-bold text-white mt-1 mb-2">Stage 4: Jackpot Reward</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Final chamber triggers, releasing high-value freeze-dried liver treat jackpot before settling your pup into a peaceful nap.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Customizer Section */}
      <section id="customizer" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Configure Your Setup</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-2 mb-2">
            Build Your ChronoCore™ Capsule
          </h2>
          <p className="text-slate-300 text-sm">Select your dog's size, bite intensity, and supply bundle.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-6">
            {/* Step 1: Dog Size */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                1. Select Dog Size
              </label>
              <div className="space-y-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                      selectedSize === size.id
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-md shadow-amber-500/10"
                        : "bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold">{size.label}</p>
                      <p className="text-xs text-slate-400">{size.weightRange}</p>
                    </div>
                    <span className="text-xs font-mono font-bold">
                      {size.surcharge > 0 ? `+$${size.surcharge}.00` : "Included"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Chew Grade */}
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                2. Chew Durability Grade
              </label>
              <div className="space-y-2">
                {product.chewGrades.map((chew) => (
                  <button
                    key={chew.id}
                    onClick={() => setSelectedChew(chew.id)}
                    className={`w-full px-4 py-3 rounded-xl text-left transition-all flex items-center justify-between border ${
                      selectedChew === chew.id
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-md shadow-amber-500/10"
                        : "bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div>
                      <p className="text-sm font-bold">{chew.label}</p>
                      <p className="text-xs text-slate-400">{chew.description}</p>
                    </div>
                    {selectedChew === chew.id && <Check size={16} className="text-amber-400" />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Step 3: Bundle Selector */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-5">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                3. Choose Supply Bundle
              </label>
              <div className="space-y-3">
                {product.bundles.map((bundle) => (
                  <button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    className={`w-full p-4 rounded-xl text-left transition-all border ${
                      selectedBundle === bundle.id
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 font-semibold shadow-md shadow-amber-500/10"
                        : "bg-slate-900/40 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-sm font-bold text-white">{bundle.label}</p>
                      <p className="font-mono font-bold text-amber-400">${bundle.price.toFixed(2)}</p>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{bundle.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {bundle.includes.map((inc, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                          {inc}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Order Summary Card */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 shadow-2xl shadow-black/50 lg:sticky lg:top-24">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-700 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                <PawPrint size={24} />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">Your Custom Capsule</h4>
                <p className="text-xs text-slate-400">Ready for instant dispatch</p>
              </div>
            </div>

            <div className="space-y-3 text-sm mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Bundle:</span>
                <span className="text-white font-medium">{bundleObj.label}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Dog Size:</span>
                <span className="text-white font-medium">
                  {sizeObj.label} ({sizeObj.weightRange})
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Chew Grade:</span>
                <span className="text-white font-medium">{chewObj.label}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-slate-700/60">
                <span className="text-slate-400">Base Bundle Price:</span>
                <span className="font-mono text-slate-200">${bundleObj.price.toFixed(2)}</span>
              </div>
              {sizeObj.surcharge > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Size Surcharge:</span>
                  <span className="font-mono text-amber-400">+${sizeObj.surcharge.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-3 border-t border-slate-700 font-bold text-lg">
                <span className="text-white">Total:</span>
                <span className="font-mono text-amber-400 text-2xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              onClick={handleConfigureAndBuy}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-slate-950 text-base bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-95"
            >
              <ShoppingCart size={18} />
              Proceed to Checkout — ${totalPrice.toFixed(2)}
            </Link>

            <p className="mt-3 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1">
              <ShieldCheck size={14} className="text-emerald-400" />
              Free 2-Day Shipping • 30-Day Gnaw Guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section id="reviews" className="py-20 border-y border-slate-800/80 bg-slate-900/40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Social Proof</span>
            <h2 className="text-3xl font-extrabold text-white mt-1 mb-2">Loved By Over 2,400+ Dogs</h2>
            <p className="text-slate-400 text-sm">Real feedback from verified pet parents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.reviews.map((rev) => (
              <div key={rev.id} className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <h4 className="font-bold text-white text-base mb-2">"{rev.title}"</h4>
                  <p className="text-xs text-slate-300 leading-relaxed italic mb-4">"{rev.comment}"</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/60 text-xs text-slate-400">
                  <span className="font-bold text-white">{rev.name}</span>
                  <span className="capitalize">{rev.dogSize} dog • Verified Buyer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Got Questions?</span>
          <h2 className="text-3xl font-extrabold text-white mt-1 mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm">Everything you need to know about ChronoCore™ technology.</p>
        </div>

        <div className="space-y-3">
          {product.faq.map((item) => (
            <div key={item.id} className="rounded-xl border border-slate-700 bg-slate-800/50 overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-white hover:text-amber-300 transition-colors"
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform ${openFaq === item.id ? "rotate-180 text-amber-400" : ""}`}
                />
              </button>
              {openFaq === item.id && (
                <div className="px-5 pb-5 text-sm text-slate-300 border-t border-slate-700/40 pt-3 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
