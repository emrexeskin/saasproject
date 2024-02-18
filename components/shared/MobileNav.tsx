"use client"
import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, UserButton } from '@clerk/clerk-react'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { SignedOut } from '@clerk/nextjs'
import { Button } from '../ui/button'


function MobileNav() {
    const pathname = usePathname();
  return (
   <header className='header'>
    <Link href="/" className='flex items-center gap-2 md:py-2'>
        <Image src="/assets/images/logo-text.svg" alt='logo' width={180} height={28}/>
    </Link>
    <nav className='flex gap-2'>
        <SignedIn>
            <UserButton afterSignOutUrl='/'></UserButton>
            <Sheet>
                <SheetTrigger><Image src="/assets/icons/menu.svg" alt='menu' width={32} height={32} className='cursor-pointer ml-5' /></SheetTrigger>
                <SheetContent  className='sheet-content sm:w-64'>
                    <>
                <ul className='header-nav_elements mt-5'>
                {navLinks.map((link) => {
                  const isActive = link.route === pathname
                    return (
                      <li className={`${isActive && 'text-green-600'} p-18 flex w-full`} key={link.route}>
                      <Link className='sidebar-link' href={link.route}>
                        <Image src={link.icon} alt='logo' width={24} height={24}/>
                        {link.label}
                      </Link>
                      </li>
                    )
                })}
                </ul>
                </>
                </SheetContent>
            </Sheet>
     </SignedIn>
     <SignedOut>
            <Button asChild className='button bg-zinc-900 bg-cover text-white'>
              <Link href="/sign-in"></Link>
            </Button>
          </SignedOut>
    </nav>
   </header>
  )
}

export default MobileNav