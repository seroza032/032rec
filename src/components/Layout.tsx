import type { ReactNode } from 'react'
import { useLenis } from '../hooks/useLenis'
import { NoiseOverlay } from './ui/NoiseOverlay'
import { CursorBlob } from './ui/CursorBlob'

export function Layout({ children }: { children: ReactNode }) {
  useLenis()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NoiseOverlay />
      <CursorBlob />
      {children}
    </div>
  )
}
