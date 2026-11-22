"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  items: OrderItem[];
  total: number;
  status: "order-placed" | "pods-sealed" | "dispatched" | "out-for-delivery";
  createdAt: string;
}

export default function OrderTracking() {
  const [searchId, setSearchId] = useState("");
  const [tracking, setTracking] = useState<Order | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const fetchOrderById = async (id: string) => {
    setIsSearching(true);
    setSearchError(null);
    try {
      const response = await fetch(`/api/order?orderId=${id}`);
      if (!response.ok) {
        throw new Error("Order not found");
      }
      const order: Order = await response.json();
      setTracking(order);
      setSearchError(null);
    } catch (error) {
      setSearchError("Order not found. Please check the order ID.");
      setTracking(null);
    } finally {
      setIsSearching(false);
    }
  };

  useEffect(() => {
    const storedId = localStorage.getItem("last-order-id");
    if (storedId) {
      fetchOrderById(storedId);
    }
  }, []);

  useEffect(() => {
    if (tracking?.id) {
      localStorage.setItem("last-order-id", tracking.id);
    }
  }, [tracking]);

  const handleSearch = () => {
    if (searchId.trim()) {
      setSearchId(searchId.trim());
      fetchOrderById(searchId.trim());
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="border-b border-slate-800 bg-slate-900/50 pb-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Track Your Order</h2>
          <p className="text-slate-400">Enter your order ID to track delivery status.</p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-6 mb-8">
          <div className="space-y-4">
            <div>
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="HWA-ORD-12345"
                className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white focus:outline-none focus:border-amber-500"
                disabled={isSearching}
                aria-label="Order ID"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || !searchId.trim()}
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-900 hover:bg-amber-400 transition-all text-sm font-medium"
              >
                <ArrowRight size={16} strokeWidth={2} className="ml-2" />
                {isSearching ? (
                  <span>Searching...</span>
                ) : "Track"}
              </button>
            </div>

            {searchError && (
              <p className="mt-2 text-sm text-red-400">{searchError}</p>
            )}

            {tracking ? (
              <div className="mt-6 p-4 rounded-xl border border-slate-700 bg-slate-800/40">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-bold text-white">Order {tracking.id}</p>
                    <p className="text-slate-400 text-sm">({tracking.items.map((i) => i.name).join(", ")})</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-amber-400">${tracking.total.toFixed(2)}</p>
                    <p className="text-xs text-slate-400">Total</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm">
                  Customer: {tracking.customer.name}
                </p>
              </div>
            ) : isSearching ? (
              <p className="mt-6 text-slate-400">Searching for order...</p>
            ) : searchError ? (
              <p className="mt-6 text-sm text-red-400">{searchError}</p>
            ) : (
              <p className="mt-6 text-slate-400">Enter order ID above to begin tracking</p>
            )}

            <div className="mt-8">
              <p className="text-sm text-slate-500">
                Status:{" "}
                {tracking?.status === "order-placed"
                  ? "Order Placed"
                  : tracking?.status === "pods-sealed"
                  ? "Pods Sealed"
                  : tracking?.status === "dispatched"
                  ? "Dispatched"
                  : "Out for Delivery"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}