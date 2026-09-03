import { messages, type Locale } from './messages'

export function t(locale: Locale, key: string) {
  const path = key.split('.')
  let value: unknown = messages[locale]

  for (const segment of path) {
    value = (value as Record<string, unknown>)?.[segment]
  }

  return typeof value === 'string' ? value : key
}

export { messages }
export type { Locale }
