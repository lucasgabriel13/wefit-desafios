import { Link, useNavigate } from 'react-router-dom';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete
} from 'react-icons/md';
import { useTheme } from 'styled-components';

import { Header } from "../../components/Header";

import EmptyCartIllustration from '../../assets/cart-empty.svg';

import {
  AmountProduct,
  Container,
  Content,
  DeleteProduct,
  EmptyCart,
  Footer,
  ProductDescription,
  ProductListItem,
  ProductTable,
  ProductTableHeader,
  Subtotal
} from "./styles";

import { formatPrice } from '../../utils/formatPrice';
import { Product, useCart } from '../../hooks/useCart';

export function Cart() {
  const { COLORS } = useTheme();
  const { cart, removeProduct, updateProductAmount, finalizeOrder } = useCart();

  const isEmptyCart = cart.length === 0 ? true : false;

  const totalPrice = formatPrice(cart.reduce((sumTotal, product) => {
    sumTotal += product.price * product.amount;
    return sumTotal
  }, 0));

  const navigate = useNavigate();

  function handleProductIncrement(product: Product) {
    const productUpdated = {
      productId: product.id,
      amount: product.amount + 1
    }

    updateProductAmount(productUpdated.productId, productUpdated.amount)
  }

  function handleProductDecrement(product: Product) {
    const productUpdated = {
      productId: product.id,
      amount: product.amount - 1
    }

    updateProductAmount(productUpdated.productId, productUpdated.amount)
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  function handleFinalizeOrder() {
    finalizeOrder();
    navigate('/finished');
  }

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
              <Content>
                <ProductTable>
                  <ProductTableHeader>
                    <span>Produto</span>
                    <span>Qtd</span>
                    <span>Subtotal</span>
                  </ProductTableHeader>
                  {
                    cart.map((product) => (
                      <ProductListItem key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <ProductDescription>
                          <strong>{product.title}</strong>
                          <span>{formatPrice(product.price)}</span>
                        </ProductDescription>
                        <AmountProduct>
                          <button
                            type="button"
                            onClick={() => handleProductDecrement(product)}
                          >
                            <MdRemoveCircleOutline size={18} color={COLORS.BLUE} />
                          </button>
                          <input
                            type="text"
                            value={product.amount}
                            readOnly
                          />
                          <button
                            type="button"
                            onClick={() => handleProductIncrement(product)}
                          >
                            <MdAddCircleOutline size={18} color={COLORS.BLUE} />
                          </button>
                        </AmountProduct>
                        <Subtotal>{formatPrice(product.price * product.amount)}</Subtotal>
                        <DeleteProduct>
                          <button
                            type="button"
                            onClick={() => handleRemoveProduct(product.id)}>
                            <MdDelete size={18} color={COLORS.BLUE} />
                          </button>
                        </DeleteProduct>
                      </ProductListItem>
                    ))
                  }
                </ProductTable>
                <Footer>
                  <button
                    type="button"
                    onClick={handleFinalizeOrder}
                  >
                    Finalizar pedido
                  </button>

                  <div>
                    <span>Total</span>
                    <span>{totalPrice}</span>
                  </div>
                </Footer>
              </Content>
            )
        }
      </Container>
    </>
  );
}