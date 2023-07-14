import { IItem } from "@/types/IItem";

export const fetchItemById = async (id: string) => {
  const res = await fetch("http://localhost:3000/api/data").then((res) =>
    res.json()
  );
  const items = res.data;
  const item = items.find((item: IItem) => String(item.id) === id);
  return item;
};
