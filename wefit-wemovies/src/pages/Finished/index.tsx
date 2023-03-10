import { Link } from 'react-router-dom'
import { Header } from "../../components/Header";

import CompletePurchaseIllustration from '../../assets/complete-purchase.svg';

import { Container, Content } from "./styles";

export function Finished() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <span>Compra realizada com sucesso!</span>
          <img src={CompletePurchaseIllustration} alt="Ilustração de um home fazendo uma confirmação com a mão, simbolizando que a compra foi realizada com sucesso" />

          <Link to="/">
            Voltar
          </Link>
        </Content>
      </Container>
    </>
  );
}