import { MdShoppingBasket } from 'react-icons/md';
import { Cart, Container, Logo } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo>
        WeMovies
      </Logo>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>0 items</span>
        </div>
        <MdShoppingBasket size={29.32} color="#FFFF" />
      </Cart>
    </Container>
  );
}