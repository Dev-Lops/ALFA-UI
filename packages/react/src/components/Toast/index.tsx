import { X } from "phosphor-react"
import { CloseButton, StyledToast, ToastDescription, ToastTitle, ToastViewport } from "./styles"
import * as ToastPrimitive from '@radix-ui/react-toast'

interface ToastProps {
  title: string
  description?: string
  type?: 'success' | 'error'
  onClose?: () => void
}

export function Toast({
  title,
  description,
  type = 'success',
  onClose,
}: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <StyledToast type={type} onOpenChange={(open) => {
        if (!open) {
          console.log("Toast fechado");
          onClose?.();
        }
      }}>
        <div>
          <ToastTitle>{title}</ToastTitle>
          {description && <ToastDescription>{description}</ToastDescription>}
        </div>
        <CloseButton asChild>
          <button aria-label="Close">
            <X size={20} />
          </button>
        </CloseButton>
      </StyledToast>
      <ToastViewport />
    </ToastPrimitive.Provider>

  )
}