import { keyframes, styled } from "../../styles"
import * as ToastPrimitive from '@radix-ui/react-toast'

export const slideIn = keyframes({
  from: { transform: 'translateX(100%)' },
  to: { transform: 'translateX(0)' },
})

export const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const ToastViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 20,
  right: 20,
  padding: '$4',
  zIndex: 9999,
  width: '100%',
  maxWidth: '360px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const StyledToast = styled(ToastPrimitive.Root, {
  backgroundColor: '$gray900',
  color: '$white',
  borderRadius: '$md',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
  padding: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  animation: `${slideIn} 300ms ease-out`,

  '&[data-state="closed"]': {
    animation: `${hide} 300ms ease-in`,
  },

  variants: {
    type: {
      success: { backgroundColor: '$lime500' },
      error: { backgroundColor: '$red700' },
    },
  },
})

export const ToastTitle = styled(ToastPrimitive.Title, {
  fontWeight: '$bold',
  fontSize: '$md',
})

export const ToastDescription = styled(ToastPrimitive.Description, {
  fontSize: '$xs',
  marginTop: '$1',
})

export const CloseButton = styled(ToastPrimitive.Close, {
  background: 'none',
  border: 'none',
  color: '$white',
  cursor: 'pointer',
})