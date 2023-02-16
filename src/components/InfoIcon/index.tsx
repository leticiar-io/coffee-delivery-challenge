import { ReactNode } from 'react'
import { BackgroundColorType, Container, IconCircle } from './styles'

interface InfoIconProps {
  icon: ReactNode
  text: string
  text2?: string
  backgroundColor: BackgroundColorType
}

export function InfoIcon({
  icon,
  text,
  text2,
  backgroundColor,
}: InfoIconProps) {
  return (
    <Container>
      <IconCircle backgroundColor={backgroundColor}>{icon}</IconCircle>

      <div>
        <span>{text}</span>
        <p>{!text2 ? '' : text2}</p>
      </div>
    </Container>
  )
}
