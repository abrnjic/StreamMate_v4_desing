import { useState, useEffect } from "react";

const STORAGE_KEY = "streammate_favorites";

function loadFavorites() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState(loadFavorites);

  const save = (list) => {
    setFavorites(list);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  };

  const toggleFavorite = (item, type) => {
    const entry = { ...item, _type: type };
    const exists = favorites.some(f => f.id === item.id && f._type === type);
    save(exists ? favorites.filter(f => !(f.id === item.id && f._type === type)) : [...favorites, entry]);
  };

  const isFavorite = (id, type) => favorites.some(f => f.id === id && f._type === type);

  return { favorites, toggleFavorite, isFavorite };
}