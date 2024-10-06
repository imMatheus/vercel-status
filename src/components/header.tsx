import React from 'react'
import { ThemeSwitcher } from './ui/theme-switcher'

export const Header: React.FC = ({}) => {
  return (
    <div className="max-w-5xl z-[1] sticky top-0 mx-auto border-border bg-background-100 sm:border-x sm:border-b">
      <div className="flex h-16 items-center justify-between gap-4 px-4">
        <h1 className="text-2xl font-bold">Vercel status</h1>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
