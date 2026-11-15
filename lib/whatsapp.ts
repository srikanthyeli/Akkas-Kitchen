export const WA_NUMBER = "919703235395";
export const WA_BASE = `https://wa.me/${WA_NUMBER}`;
export const ORDER_PREFIX = "AKKAS KITCHEN ఆర్డర్ కోసం";

export type OrderFields = {
  name: string;
  phone: string;
  items: string;
  qty: string;
  area: string;
  notes: string;
};

export const REQUIRED_FIELDS = ["name", "phone", "items"] as const;

/** wa.me link with optional pre-filled text. */
export function waLink(text?: string): string {
  return text ? `${WA_BASE}?text=${encodeURIComponent(text)}` : WA_BASE;
}

/** Same message format as the original static site's buildWaLink(). */
export function buildWaLink(f: OrderFields): string {
  const lines = [
    ORDER_PREFIX,
    "Name: " + f.name,
    "Phone: " + f.phone,
    "Item(s): " + f.items,
    "Quantity: " + f.qty,
    "Delivery area: " + f.area,
    "Notes: " + f.notes,
  ];
  return waLink(lines.join("\n"));
}
