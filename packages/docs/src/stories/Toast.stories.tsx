import { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@alfa-ui/react'

export default {
  title: 'Components/Toast',
  component: Toast,
  args: {
    title: 'Agendamento Confirmado!',
    description: 'Seu horário foi reservado com sucesso.',
    type: 'success',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do Toast',
    },
    description: {
      control: 'text',
      description: 'Descrição do Toast',
    },
    type: {
      control: 'radio',
      options: ['success', 'error'],
      description: 'Tipo de Toast para indicar sucesso ou erro',
    },
    onClose: {
      action: 'closed',
      description: 'Callback acionado ao fechar o Toast',
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'O componente de Toast exibe mensagens rápidas de feedback para o usuário.',
      },
    },
  },
} as Meta

export const Default: StoryObj = {}

export const Success: StoryObj = {
  args: {
    title: 'Agendamento Realizado!',
    description: 'Seu horário foi reservado com sucesso.',
    type: 'success',
  },
}

export const Error: StoryObj = {
  args: {
    title: 'Erro no Agendamento',
    description: 'Não foi possível reservar o horário.',
    type: 'error',
  },
}
