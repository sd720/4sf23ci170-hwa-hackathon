import { NextResponse } from "next/server";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Customer {
  name: string;
  email: string;
  address: string;
  city: string;
  zip: string;
}

interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered";
  createdAt: string;
}

const mockOrders: Record<string, Order> = {};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const trackingId = searchParams.get("orderId");

  if (trackingId && mockOrders[trackingId]) {
    return NextResponse.json(mockOrders[trackingId]);
  }

  return NextResponse.json(
    { error: "Order not found" },
    { status: 404 }
  );
}

export async function POST(request: Request) {
  const body = await request.json();
  const { customer, items } = body;

  if (!customer || !customer.name || !customer.email || !customer.address) {
    return NextResponse.json(
      { error: "Missing required customer fields" },
      { status: 400 }
    );
  }

  if (!items || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { error: "Order must contain at least one item" },
      { status: 400 }
    );
  }

  const total = items.reduce((sum: number, item) => sum + item.price * item.quantity, 0);
  const orderId = `HWA-ORD-${Math.floor(10000 + Math.random() * 89999)}`;

  const order: Order = {
    id: orderId,
    customer: {
      name: customer.name,
      email: customer.email,
      address: customer.address,
      city: customer.city || "",
      zip: customer.zip || "",
    },
    items,
    total,
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  mockOrders[orderId] = order;

  return NextResponse.json(
    { success: true, orderId, order },
    { status: 201 }
  );
}