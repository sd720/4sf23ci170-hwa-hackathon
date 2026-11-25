"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Check,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
  Truck,
  Lock,
} from "lucide-react";

interface Customer {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Checkout() {
  const [customer, setCustomer] = useState<Customer>({
    name: "Srujan Dinesh",
    email: "srujan.dinesh818@gmail.com",
    address: "42 Canine Sanctuary Way",
    city: "Bengaluru",
    zip: "560001",
  });

  const [items, setItems] = useState<OrderItem[]>([
    {
      id: "starter-medium-titan",
      name: "ChronoCore Starter Kit (Medium • Titan Power Chewer)",
      price: 79.99,
      quantity: 1,
    },
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("checkout-items");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setItems(parsed);
          }
        } catch (e) {
          console.error("Failed to parse checkout items", e);
        }
      }
    }
  }, []);

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const total = items.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer, items }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        if (typeof window !== "undefined") {
          localStorage.setItem("last-order-id", data.orderId);
          window.location.href = `/order-tracking?orderId=${encodeURIComponent(data.orderId)}`;
        }
      } else {
        setErrorMsg(data.error || "Failed to place order. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error contacting order processing. Please retry.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to ChronoCore Customizer
      </Link>

      <div className="border-b border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-white">Express Checkout</h1>
        <p className="text-sm text-slate-400 mt-1">
          Complete your order for the ChronoCore™ Autonomous 6-Hour Foraging Capsule.
        </p>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-sm">
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Customer Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Truck size={18} className="text-amber-400" />
              1. Shipping & Delivery Address
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customer.name}
                  onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customer.email}
                  onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={customer.address}
                  onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                  placeholder="123 Canine Sanctuary Way"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={customer.city}
                  onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                  placeholder="Portland"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Postal / ZIP Code *
                </label>
                <input
                  type="text"
                  required
                  value={customer.zip}
                  onChange={(e) => setCustomer({ ...customer, zip: e.target.value })}
                  placeholder="97201"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-4 flex items-center gap-3">
            <Lock size={18} className="text-emerald-400 flex-shrink-0" />
            <p className="text-xs text-slate-400">
              End-to-end encrypted order dispatch. No sensitive credit card details stored directly on serverless lambdas.
            </p>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 shadow-xl">
            <h2 className="text-base font-bold text-white pb-3 border-b border-slate-700 mb-4">
              Order Summary
            </h2>

            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-start text-xs">
                  <div className="pr-2">
                    <p className="font-semibold text-white">{item.name}</p>
                    <p className="text-slate-400">Qty: {item.quantity || 1}</p>
                  </div>
                  <span className="font-mono font-bold text-amber-400 flex-shrink-0">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </span>
                </div>
              ))}

              <div className="pt-3 border-t border-slate-700 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Shipping:</span>
                  <span className="text-emerald-400 font-semibold">FREE (2-Day Priority)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Sales Tax:</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-slate-700 font-bold text-sm">
                  <span className="text-white text-base">Total Amount:</span>
                  <span className="font-mono text-amber-400 text-xl">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-slate-950 text-base bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              {submitting ? (
                <>
                  <RotateCcw size={18} className="animate-spin" />
                  Placing Order...
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  Place Order — ${total.toFixed(2)}
                </>
              )}
            </button>

            <div className="mt-4 pt-4 border-t border-slate-700/60 text-center">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                30-Day Money-Back Gnaw Guarantee
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
