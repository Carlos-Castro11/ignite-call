import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import imagePreview from '../../src/assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Agendamento descomplicado</Heading>
        <Text size="xl">
          Conecte seu calendário e permita que as pessoas marquem agendamentos
          no seu tempo livre.
        </Text>
        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={imagePreview}
          height={400}
          quality={100}
          priority
          alt="Calendario simbolizando aplicação em funcionamento"
        />
      </Preview>
    </Container>
  )
}
