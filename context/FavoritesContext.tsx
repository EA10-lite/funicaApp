import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface FavoriteItem {
  id:       string;
  [key: string]: any;
}

interface FavoriteContextType {
  favorites: string[];
  toggleFavorites: (id: string) => void;
  isInFavorites: (id: string) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const useFavoriteContext = (): FavoriteContextType => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavoriteContext must be used within a FavoriteProvider");
  }
  return context;
};

const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorites = (id: string) => {
    let temp_favorites = [...favorites];
    const exists = isInFavorites(id);

    if (exists) {
      temp_favorites = temp_favorites.filter((item) => !(item === id));
    } else {
      temp_favorites.push(id);
    }

    setFavorites(temp_favorites);
    AsyncStorage.setItem("favorites", JSON.stringify(temp_favorites));
  };

  const getFavorites = async () => {
    const stored = await AsyncStorage.getItem("favorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    } else {
      setFavorites([]);
    }
  };

  const isInFavorites = (id: string): boolean => {
    return favorites.includes(id);
  };

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <FavoriteContext.Provider
      value={{
        isInFavorites,
        toggleFavorites,
        favorites,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoritesProvider;
