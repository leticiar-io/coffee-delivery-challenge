import { ReactNode } from 'react'
import { BackgroundColorType, Container, IconCircle } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string
  backgroundColor: BackgroundColorType
}

export function InfoIcon({ icon, text, backgroundColor }: InfoIconProps) {
  return (
    <Container>
      <IconCircle backgroundColor={backgroundColor}>{icon}</IconCircle>
      <span>{text}</span>
    </Container>
  )
}
