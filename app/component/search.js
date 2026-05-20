export const normalize = (s) =>
  String(s ?? "")
    .toLowerCase()
    .trim();

export const productMatchesQuery = (product, query) => {
  const q = normalize(query);
  if (!q) return true;

  const name = normalize(product?.name);
  return name.includes(q);
};

