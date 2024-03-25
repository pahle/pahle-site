import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

import Sparkles from '@/components/Sparkles'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-start gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200 flex-1">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
              </div>
              <div className="text-sm font-medium text-zinc-800 dark:text-zinc-200 shrink-0">
                Special thanks to :{' '}
                <Sparkles>
                  <Link
                    href="https://github.com/wiscaksono"
                    className="text-teal-500 hover:underline"
                  >
                    Wisnu Wicaksono
                  </Link>
                </Sparkles>
              </div>
              <p className="flex justify-end text-sm text-zinc-400 dark:text-zinc-500 flex-1">
                &copy; {new Date().getFullYear()} Pahle. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
