import { en } from './en'
import { es } from './es'

export const messages = {
  en,
  es,
} as const

export type Locale = keyof typeof messages
