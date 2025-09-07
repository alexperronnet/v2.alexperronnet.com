import { Geist_Mono, Instrument_Serif, Inter } from 'next/font/google'
import { cn } from '@/lib/class-names'

const headline = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  subsets: ['latin'],
})

const body = Inter({
  variable: '--font-body',
  subsets: ['latin'],
})

const code = Geist_Mono({
  variable: '--font-code',
  subsets: ['latin'],
})

export const fontVariables = cn(headline.variable, body.variable, code.variable)
