import { MdAddShoppingCart } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import { Button, Container } from "./styles";

type CardProps = {
  id: number;
  imageUrl: string;
  title: string;
  price: string;
  amount: number;
}

export function Card({ id, imageUrl, title, price, amount }: CardProps) {

  const { addProduct } = useCart();

  function handleAddProduct(productId: number) {
    addProduct(productId);
  }

  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <strong>{title}</strong>
      <span>{price}</span>

      <Button
        onClick={() => handleAddProduct(id)}
        isActive={amount > 0}
      >
        <div>
          <MdAddShoppingCart size={13.6} color="#ffffff" />
          <span>{amount}</span>
        </div>

        <span>
          {amount > 0 ? 'Produto adicionado' : 'Adicionar ao carrinho'}
        </span>
      </Button>
    </Container>
  );
}