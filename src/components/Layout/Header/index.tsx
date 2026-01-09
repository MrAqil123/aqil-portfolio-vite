import { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom' 
import { Icon } from '@iconify/react'
import { headerData } from '../Header/Navigation/menuData'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import AuthDialogContext from '../../../app/context/AuthDialogContext'

const Header: React.FC = () => {
  const location = useLocation()
  const pathUrl = location.pathname;


  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const signInRef = useRef<HTMLDivElement>(null)
  const signUpRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // مدیریت چسبنده شدن هدر در اسکرول
  const handleScroll = () => {
    setSticky(window.scrollY >= 160)
  }

  // بستن منوها هنگام کلیک به بیرون
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;
    
    if (signInRef.current && !signInRef.current.contains(target)) {
      setIsSignInOpen(false)
    }
    if (signUpRef.current && !signUpRef.current.contains(target)) {
      setIsSignUpOpen(false)
    }
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(target) && navbarOpen) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [navbarOpen, isSignInOpen, isSignUpOpen])

  // جلوگیری از اسکرول بدنه هنگام باز بودن منو
  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen])

  const authDialog = useContext(AuthDialogContext)

  return (
    <header
      className={`fixed h-24 top-0 py-1 z-50 w-full transition-all duration-300 ${
        sticky
          ? 'shadow-lg bg-light-mode-a backdrop-blur-md '
          : 'shadow-none bg-transparent'
      }`}>
      <div className='container mx-auto max-w-6xl flex items-center justify-between p-6'>
        {/* در Vite از Link به جای تگ a استفاده می‌کنیم */}
        <a href="/">
            <Logo />
        </a>
        
        <nav className='hidden lg:flex grow  items-center justify-center gap-6'>
          {headerData.map((item, index) => (
            <HeaderLink key={index} item={item} />
          ))}
        </nav>

        <div className='flex items-center gap-4'>

          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='block lg:hidden p-2 rounded-lg'
            aria-label='Toggle mobile menu'>
            <div className="space-y-1.5">
                <span className={`block w-7 h-[4px] bg-white   transition-all ${navbarOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-[4px] bg-white  ${navbarOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-[4px] bg-white  transition-all ${navbarOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm z-40 ' onClick={() => setNavbarOpen(false)} />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden fixed top-0 right-0  w-full bg-light-mode-a/80 h-[100vh]  shadow-2xl transform transition-transform duration-300 ease-in-out max-w-xs ${
          navbarOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}>
        <div className='flex items-center justify-between p-6 border-b border-white/30'>
          <h2 className='text-lg font-bold dark:text-white'>Menu</h2>
          <button onClick={() => setNavbarOpen(false)} className="p-1">
            <Icon icon="material-symbols:close-rounded" width="34" className="text-white" />
          </button>
        </div>
        <nav className='flex flex-col items-start p-6 gap-4'>
          {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item}  />
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
