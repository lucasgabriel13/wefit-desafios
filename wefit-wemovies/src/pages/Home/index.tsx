import { useEffect, useState } from 'react';
import { Card } from '../../components/Card';

import { Header } from "../../components/Header";
import { Loading } from '../../components/Loading';

import { formatPrice } from '../../utils/formatPrice';
import { api } from '../../lib/axios';

import { Container, ProductList } from "./styles";
import { useCart } from '../../hooks/useCart';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
}

type ProductList = Product & {
  priceFormatted: string;
}

type ProductAmount = {
  [key: number]: number;
}

export function Home() {
  const [products, setProducts] = useState<ProductList[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { cart } = useCart();

  const productAmount = cart.reduce((sumTotalAmount, product) => {
    const newProductAmount = { ...sumTotalAmount };
    newProductAmount[product.id] = product.amount;

    return newProductAmount;
  }, {} as ProductAmount);

  async function loadProducts() {
    const { data } = await api.get('products');

    if (!data) {
      setIsLoading(true);
      return;
    }

    const productsFormatted = data.map((product: Product) => {
      const newProduct = {
        ...product,
        priceFormatted: formatPrice(product.price),
      }

      return newProduct;
    });

    setProducts(productsFormatted);
    setIsLoading(false);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <Header />

      <ProductList>
        {
          isLoading ?
            (
              <Loading />
            ) :
            (
              products.map((product) => (
                <Card
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  imageUrl={product.image}
                  amount={productAmount[product.id] ?? 0}
                  price={product.priceFormatted}
                />
              ))
            )
        }
      </ProductList>
    </Container>
  );
}