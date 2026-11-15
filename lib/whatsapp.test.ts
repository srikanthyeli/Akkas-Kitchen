import { test } from "node:test";
import assert from "node:assert/strict";
import { buildWaLink, waLink, ORDER_PREFIX } from "./whatsapp";

const sample = {
  name: "Ravi",
  phone: "98765 43210",
  items: "1/2 Chicken Curry + White Rice + Phulkas",
  qty: "2",
  area: "Madhapur",
  notes: "Less spicy & by 1pm? thanks #1",
};

test("link targets wa.me/919703235395 with a text param", () => {
  const url = new URL(buildWaLink(sample));
  assert.equal(url.origin + url.pathname, "https://wa.me/919703235395");
  assert.deepEqual([...url.searchParams.keys()], ["text"]);
});

test("message starts with the Telugu prefix and lists every field", () => {
  const text = decodeURIComponent(buildWaLink(sample).split("?text=")[1]);
  assert.ok(text.startsWith("AKKAS KITCHEN ఆర్డర్ కోసం\n"));
  assert.equal(
    text,
    [
      "AKKAS KITCHEN ఆర్డర్ కోసం",
      "Name: Ravi",
      "Phone: 98765 43210",
      "Item(s): 1/2 Chicken Curry + White Rice + Phulkas",
      "Quantity: 2",
      "Delivery area: Madhapur",
      "Notes: Less spicy & by 1pm? thanks #1",
    ].join("\n"),
  );
});

test("special characters are escaped so they can't break the URL", () => {
  const query = buildWaLink(sample).split("?")[1];
  assert.equal(query.split("?").length, 1);
  assert.ok(!query.slice("text=".length).includes("&"));
  assert.ok(!query.includes("#"));
  assert.ok(!query.includes(" ") && !query.includes("\n"));
  assert.ok(query.includes("%26") && query.includes("%3F") && query.includes("%0A"));
});

test("matches the original site's encodeURIComponent output byte for byte", () => {
  const original =
    "https://wa.me/919703235395?text=" +
    encodeURIComponent(
      ["AKKAS KITCHEN ఆర్డర్ కోసం", "Name: Ravi", "Phone: 98765 43210",
       "Item(s): 1/2 Chicken Curry + White Rice + Phulkas", "Quantity: 2",
       "Delivery area: Madhapur", "Notes: Less spicy & by 1pm? thanks #1"].join("\n"),
    );
  assert.equal(buildWaLink(sample), original);
});

test("hero link equals the original hard-coded href", () => {
  assert.equal(
    waLink(ORDER_PREFIX),
    "https://wa.me/919703235395?text=AKKAS%20KITCHEN%20%E0%B0%86%E0%B0%B0%E0%B1%8D%E0%B0%A1%E0%B0%B0%E0%B1%8D%20%E0%B0%95%E0%B1%8B%E0%B0%B8%E0%B0%82",
  );
  assert.equal(waLink(), "https://wa.me/919703235395");
});

test("empty optional fields still produce their labels", () => {
  const text = decodeURIComponent(
    buildWaLink({ ...sample, qty: "", area: "", notes: "" }).split("?text=")[1],
  );
  assert.ok(text.endsWith("Quantity: \nDelivery area: \nNotes: "));
});
