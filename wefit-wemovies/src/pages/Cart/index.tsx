import { Link } from 'react-router-dom';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';
import { useTheme } from 'styled-components';

import { Header } from "../../components/Header";

import EmptyCartIllustration from '../../assets/cart-empty.svg';

import { AmountProduct, CartTable, Container, DescriptionProduct, EmptyCart, Footer } from "./styles";
import { formatPrice } from '../../utils/formatPrice';

const DATA = [
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://www.imagemhost.com.br/images/2022/07/10/spider-man.png"
  },
];

export function Cart() {

  const isEmptyCart = false;
  const { COLORS } = useTheme();

  return (
    <>
      <Header />
      <Container>
        {
          isEmptyCart ?
            (
              <EmptyCart>
                <span>Parece que não há nada por aqui :{`(`}</span>
                <img src={EmptyCartIllustration} alt="Ilustração de uma mulher segurando um círculo, simbolizando que a página não há nenhum produto no carrinho" />

                <Link to="/">
                  Voltar
                </Link>
              </EmptyCart>
            ) :
            (
              <CartTable>
                <thead>
                  <tr>
                    <th>Produto</th>
                    <th></th>
                    <th>QTD</th>
                    <th>Subtotal</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {DATA.map(product => (
                    <tr key={product.id}>
                      <td>
                        <img src={product.image} alt={product.title} />
                      </td>
                      <td>
                        <DescriptionProduct>
                          <strong>{product.title}</strong>
                          <span>{formatPrice(product.price)}</span>
                        </DescriptionProduct>
                      </td>
                      <td>
                        <AmountProduct>
                          <button type="button">
                            <MdRemoveCircleOutline size={18} color={COLORS.BLUE} />
                          </button>
                          <input
                            type="text"
                            readOnly
                          />
                          <button type="button">
                            <MdAddCircleOutline size={18} color={COLORS.BLUE} />
                          </button>
                        </AmountProduct>
                      </td>
                      <td>
                        <span>R$ 29,99</span>
                      </td>
                      <td>
                        <button type="button">
                          <MdDelete size={18} color={COLORS.BLUE} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </CartTable>
            )
        }

        <Footer>
          <button type="button">
            Finalizar pedido
          </button>

          <div>
            <span>Total</span>
            <span>R$ 29,90</span>
          </div>
        </Footer>
      </Container>
    </>
  );
}