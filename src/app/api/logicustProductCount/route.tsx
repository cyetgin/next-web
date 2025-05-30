import { NextResponse } from "next/server";
export async function GET() {
  try {
    const res = await fetch(
      "https://logify.singlewindow.io/api/v1-0/commodities/count",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: { revalidate: 0 },
      }
    );
    if (!res.ok) {
      return NextResponse.json(
        { error: "External API error" },
        { status: res.status }
      );
    }
    const rawText = await res.text();
    return NextResponse.json({ value: rawText });
  } catch (error) {
    console.error("Hata:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}