import { MdAddShoppingCart } from 'react-icons/md';
import { Button, Container } from "./styles";

type CardProps = {
  imageUrl: string;
  title: string;
  price: string;
  amount: number;
}

export function Card({ imageUrl, title, price, amount }: CardProps) {

  return (
    <Container>
      <img src={imageUrl} alt={title} />
      <strong>{title}</strong>
      <span>{price}</span>

      <Button>
        <div>
          <MdAddShoppingCart size={13.6} color="#ffffff" />
          <span>{amount}</span>
        </div>

        <span>Adicionar ao carrinho</span>
      </Button>
    </Container>
  );
}