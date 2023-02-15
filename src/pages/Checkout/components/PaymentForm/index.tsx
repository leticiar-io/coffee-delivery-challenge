import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { PaymentButton } from '../PaymentButton'
import {
  PaymentFormContainer,
  HeaderContainer,
  TitleAndSubtitleContainer,
  Title,
  Subtitle,
  PaymentContainerButtons,
} from './styles'

export function PaymentForm() {
  return (
    <PaymentFormContainer>
      <HeaderContainer>
        <CurrencyDollar size={24} color="#8047F8" />

        <TitleAndSubtitleContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TitleAndSubtitleContainer>
      </HeaderContainer>

      <PaymentContainerButtons>
        <PaymentButton
          name="Cartão de crédito"
          icon={<CreditCard color="#8047F8" size={16} />}
        />
        <PaymentButton
          name="Cartão de débito"
          icon={<Bank color="#8047F8" size={16} />}
        />
        <PaymentButton
          name="Dinheiro"
          icon={<Money color="#8047F8" size={16} />}
        />
      </PaymentContainerButtons>
    </PaymentFormContainer>
  )
}
