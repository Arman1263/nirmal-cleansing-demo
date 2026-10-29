import { createContext, useContext } from 'react';

export type ToastType = 'success' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  title?: string;
}

export interface ToastContextType {
  showToast: (message: string, type?: ToastType, title?: string) => void;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast(): ToastContextType {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

