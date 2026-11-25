"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  CheckCircle2,
  Clock,
  Package,
  Truck,
  Home as HomeIcon,
  RotateCcw,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    zip: string;
  };
  items: OrderItem[];
  total: number;
  status: "order-placed" | "pods-sealed" | "dispatched" | "delivered";
  createdAt: string;
}

const STEPS = [
  {
    key: "order-placed",
    title: "Order Placed",
    desc: "Order confirmed & payload received",
    icon: CheckCircle2,
  },
  {
    key: "pods-sealed",
    title: "Pods Calibrated",
    desc: "Pendulum clockwork inspected & sealed",
    icon: Package,
  },
  {
    key: "dispatched",
    title: "In Transit",
    desc: "Carrier priority tracking active",
    icon: Truck,
  },
  {
    key: "delivered",
    title: "Delivered",
    desc: "Arrived at canine sanctuary",
    icon: HomeIcon,
  },
];

export default function OrderTracking() {
  const [searchId, setSearchId] = useState("");
  const [tracking, setTracking] = useState<Order | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const fetchOrderById = async (id: string) => {
    if (!id || !id.trim()) return;
    setIsSearching(true);
    setSearchError(null);

    try {
      const response = await fetch(`/api/order?orderId=${encodeURIComponent(id.trim())}`);
      if (!response.ok) {
        throw new Error("Order not found");
      }
      const order: Order = await response.json();
      setTracking(order);
      setSearchId(order.id);
      if (typeof window !== "undefined") {
        localStorage.setItem("last-order-id", order.id);
      }
    } catch (error) {
      setSearchError("Order ID not found. Please verify the ID format (e.g. HWA-ORD-12345).");
      setTracking(null);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlId = params.get("orderId");
      if (urlId) {
        setSearchId(urlId);
        fetchOrderById(urlId);
      } else {
        const storedId = localStorage.getItem("last-order-id");
        if (storedId) {
          setSearchId(storedId);
          fetchOrderById(storedId);
        }
      }
    }
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchId.trim()) {
      fetchOrderById(searchId.trim());
    }
  };

  // Helper to determine step completion index
  const getStepIndex = (status?: string) => {
    switch (status) {
      case "order-placed":
        return 0;
      case "pods-sealed":
        return 1;
      case "dispatched":
        return 2;
      case "delivered":
        return 3;
      default:
        return 2; // Default to In Transit for mock display
    }
  };

  const currentStepIdx = getStepIndex(tracking?.status);

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to ChronoCore Store
      </Link>

      <div className="border-b border-slate-800 pb-6 mb-8">
        <h1 className="text-3xl font-extrabold text-white">ChronoCore™ Order Tracking</h1>
        <p className="text-sm text-slate-400 mt-1">
          Monitor your autonomous dog foraging capsule assembly, sealing, and delivery status.
        </p>
      </div>

      {/* Search Bar Form */}
      <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 mb-8">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              placeholder="Enter Order ID (e.g. HWA-ORD-46347)"
              className="w-full rounded-xl border border-slate-700 bg-slate-900/70 pl-11 pr-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm font-mono"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching || !searchId.trim()}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-sm shadow-md shadow-amber-500/20 disabled:opacity-50 transition-all cursor-pointer"
          >
            {isSearching ? (
              <>
                <RotateCcw size={16} className="animate-spin" />
                Searching...
              </>
            ) : (
              "Track Order"
            )}
          </button>
        </form>

        {searchError && (
          <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/40 text-red-300 text-xs">
            {searchError}
          </div>
        )}
      </div>

      {/* Order Status & Progress Display */}
      {tracking && (
        <div className="space-y-8 animate-in fade-in duration-300">
          {/* 4-Step Stepper */}
          <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-700/80 mb-6 gap-2">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Tracking Details</span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Order <span className="font-mono text-amber-300">{tracking.id}</span>
                </h2>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Clock size={14} />
                Live Status: <span className="capitalize">{tracking.status.replace("-", " ")}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
              {STEPS.map((step, idx) => {
                const IconComponent = step.icon;
                const isCompleted = idx <= currentStepIdx;
                const isCurrent = idx === currentStepIdx;

                return (
                  <div
                    key={step.key}
                    className={`p-4 rounded-xl border transition-all ${
                      isCurrent
                        ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10"
                        : isCompleted
                        ? "bg-slate-900/60 border-emerald-500/50 text-emerald-300"
                        : "bg-slate-900/30 border-slate-800 text-slate-500"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                          isCompleted
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-slate-800 text-slate-500"
                        }`}
                      >
                        <IconComponent size={14} />
                      </div>
                      <span className="text-xs font-mono font-bold">Step {idx + 1}</span>
                    </div>
                    <p className="text-sm font-bold text-white">{step.title}</p>
                    <p className="text-[11px] text-slate-400 mt-1">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Customer & Item Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-700">
                Delivery Destination
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  <span className="text-slate-400">Recipient:</span>{" "}
                  <strong className="text-white">{tracking.customer.name}</strong>
                </p>
                <p>
                  <span className="text-slate-400">Email:</span> {tracking.customer.email}
                </p>
                <p>
                  <span className="text-slate-400">Address:</span> {tracking.customer.address}
                </p>
                <p>
                  <span className="text-slate-400">Location:</span>{" "}
                  {tracking.customer.city}, {tracking.customer.zip}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-700">
                Package Contents
              </h3>
              <div className="space-y-3 mb-4">
                {tracking.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs">
                    <span className="text-slate-200">
                      {item.name} × {item.quantity || 1}
                    </span>
                    <span className="font-mono font-bold text-amber-400">
                      ${(item.price * (item.quantity || 1)).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-3 border-t border-slate-700 flex justify-between items-center text-sm font-bold">
                <span className="text-white">Total Billed:</span>
                <span className="font-mono text-amber-400 text-lg">
                  ${tracking.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {!tracking && !isSearching && !searchError && (
        <div className="text-center py-12 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
          <Clock size={36} className="text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white mb-1">No Order Selected</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Enter an order ID in the search box above to inspect real-time progress and dispatch verification.
          </p>
        </div>
      )}
    </div>
  );
}
