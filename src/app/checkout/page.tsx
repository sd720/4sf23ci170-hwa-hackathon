"use client";

import { useState } from "react";
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
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [items, setItems] = useState<OrderItem[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ customer, items }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess(true);
        setOrderId(data.orderId);
        setItems([]);
        setCustomer({
          name: "",
          email: "",
          address: "",
          city: "",
          zip: "",
        });
      } else {
        alert(data.error || "Failed to place order");
      }
    } catch (err) {
      alert("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="customizer" className="py-24 px-6">
      <div className="mx-auto max-w-xl">
        <div className="border-b border-slate-800 bg-slate-900/50 pb-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Checkout</h2>
          <p className="text-slate-400">
            Complete your order for the ChronoCore Foraging Capsule
          </p>
        </div>

        {success && (
          <div className="bg-slate-800/50 rounded-2xl p-6 mb-8 animate-in fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center">
                <Check size={20} strokeWidth={2} className="text-amber-400" />
              </div>
              <div>
                <p className="font-bold text-white">Order Placed Successfully!</p>
                <p className="text-slate-400">Your order has been received.</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              Order ID: <span className="font-mono font-bold text-amber-400">{orderId}</span>
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all text-sm font-medium"
            >
              <ArrowRight size={16} strokeWidth={2} />
              Continue Shopping
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-2">Customer Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={customer.name}
                  onChange={(e) =>
                    setCustomer((c) => ({ ...c, name: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  required
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={customer.email}
                  onChange={(e) =>
                    setCustomer((c) => ({ ...c, email: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  required
                  placeholder="jane@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={customer.address}
                  onChange={(e) =>
                    setCustomer((c) => ({ ...c, address: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  required
                  placeholder="123 Forest Path"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  City
                </label>
                <input
                  type="text"
                  value={customer.city}
                  onChange={(e) =>
                    setCustomer((c) => ({ ...c, city: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  required
                  placeholder="Portland"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1">
                  ZIP
                </label>
                <input
                  type="text"
                  value={customer.zip}
                  onChange={(e) =>
                    setCustomer((c) => ({ ...c, zip: e.target.value }))
                  }
                  className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  required
                  placeholder="97201"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-2">Order Summary</h3>
            {items.length > 0 ? (
              <div className="space-y-3">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm">
                    <span className="text-slate-300">{item.name}</span>
                    <span className="font-mono font-bold text-amber-400">${item.price.toFixed(
                      2
                    )} × {item.quantity}</span>
                  </div>
                ))}
                <div className="flex justify-between font-bold text-white">
                  <span>Total</span>
                  <span>${items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                  ).toFixed(2)}</span>
                </div>
              </div>
            ) : (
              <p className="text-slate-500 text-sm">
                No items in cart. <a href="/" className="text-amber-400 hover:text-white transition-colors">Customize your capsule first</a>
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl font-bold text-lg bg-gradient-to-br from-amber-500 to-orange-600 text-slate-900 shadow-lg shadow-amber-500/40 hover:from-amber-400 hover:to-orange-500 transition-all hover:scale-[1.02] active:scale-95"
          >
            {submitting ? (
              <>
                <RotateCcw size={20} strokeWidth={2} className="animate-spin" />
                Processing
              </>
            ) : (
              <>
                <ShoppingCart size={20} strokeWidth={2} />
                Place Order — $49.00
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}