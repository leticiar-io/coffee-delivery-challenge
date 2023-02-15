import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface PaymentButtonProps {
  name: string
  icon: ReactNode
}

export function PaymentButton({ name, icon }: PaymentButtonProps) {
  return (
    <ButtonContainer>
      {icon}
      <span>{name}</span>
    </ButtonContainer>
  )
}
