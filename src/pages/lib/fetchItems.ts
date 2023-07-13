export const fetchItems = async () => {
  const res = await fetch("http://localhost:3000/api/data");
  const items = await res.json();
  return items.data;
};
