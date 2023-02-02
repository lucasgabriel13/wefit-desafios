import { MdShoppingBasket } from 'react-icons/md';
import { useCart } from '../../hooks/useCart';
import { Cart, Container, Logo } from "./styles";

export function Header() {
  const { cart } = useCart();

  return (
    <Container>
      <Logo>
        WeMovies
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>{cart.length} items</span>
        </div>
        <MdShoppingBasket size={29.32} color="#FFFF" />
      </Cart>
    </Container>
  );
}