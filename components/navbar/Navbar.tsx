import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/navbar/logo.png'
import Button from '../common/Button'
import Wrapper from '../common/Wrapper'
import { NAV_LINKS } from '@/lib/constants'
import { ArrowRightIcon } from '../icon/ArrowRightIcon'

const Navbar = () => {
  const activeHref = "#home";
  return (
    <header className="sticky top-0 z-50 h-22.25 border-b border-[#f3d7e0] bg-white shadow-[0_4px_62px_0_rgba(250,196,210,0.63)]">
        <Wrapper className='h-full'>
          <div className="flex h-full items-center justify-between gap-4">
            <Link href="/" className='transition-transform duration-300 hover:scale-105 active:scale-95'>
                <Image src={logo} alt="Airbnb Assistant Logo" width={125} height={45} style={{ height: 'auto' }} priority />
            </Link>
            <div className='hidden items-center gap-6.25 lg:flex mx-auto justify-between'>
              {
                NAV_LINKS.map((link) => (
                  <Link 
                    key={link.label} 
                    href={link.href} 
                    className={`relative text-[18px] leading-normal transition-all duration-300 group hover:-translate-y-0.5
                      ${activeHref === link.href 
                        ? "font-bold text-[#ED3C6A]" 
                        : "font-normal text-[#1e1e1e]"
                      }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute -bottom-1 left-0 h-[2px] bg-[#ED3C6A] transition-all duration-300 ${activeHref === link.href ? "w-full hover:scale-110" : "w-0"}`} 
                    />
                  </Link>
                ))
              }
            </div>
          <div className="hidden lg:block">
          <Button size="lg" className="gap-2">
            Schedule A Meeting
            <ArrowRightIcon className="text-white" />
          </Button>
        </div>
        </div>
        </Wrapper>
    </header>
  )
}

export default Navbar