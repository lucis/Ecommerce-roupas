import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
}

interface Props {
  favorite: Array<Product>;
  addProduct(product: Product): void;
}

export const FavoriteContext = createContext<Props>({
  favorite: [],
  addProduct: () => {},
});

const FAVORITE_KEY = "favorite";
const FavoriteProvider: FC = ({ children }) => {
  const [favorite, setFavorite] = useState<Array<Product>>([]);

  const [a, setA] = useState(1)
  const [b, setB] = useState(1)

  useEffect(() => {

  }, [favorite]);

  useEffect(() => {
    const newFavorite = window.localStorage.getItem(FAVORITE_KEY);
    if (newFavorite) {
      setFavorite(JSON.parse(newFavorite));
    }
  }, [favorite]);

  const addProduct = useCallback(
    (product: Product) => {
      if (favorite.some(({ id }) => id === product.id)) {
        return;
      }
      const newFavorite = [...favorite, product];
      setFavorite(newFavorite);
      window.localStorage.setItem(FAVORITE_KEY, JSON.stringify(newFavorite));
    },
    [favorite, setFavorite]
  );

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        addProduct,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
