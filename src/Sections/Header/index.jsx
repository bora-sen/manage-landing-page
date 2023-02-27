import React, { useRef } from 'react'
import * as Asset from './Assets'

function Header() {

  const [isMenuOpen,setMenuOpen] = React.useState();
  const modal = useRef();

  React.useEffect(() => {
    setMenuOpen(false);
  },[])

  React.useEffect(() => {
    if(isMenuOpen) {
      modal.current.classList.add('opacity-100');
      modal.current.classList.remove('opacity-0');
      modal.current.classList.remove('hidden');


    }
    else if(!isMenuOpen){
      modal.current.classList.remove('opacity-100');
      modal.current.classList.add('opacity-0');
      modal.current.classList.add('hidden');



    }
  },[isMenuOpen])


  function toggleModal(e){
    e.preventDefault();
    console.log("click Handled");
    if(isMenuOpen){
      setMenuOpen(false);
    }
    else if(!isMenuOpen){
      setMenuOpen(true);
    }
  }

  return (
    <>
      <div ref={modal} className='fixed hidden z-40 top-24 right-0 left-0 bottom-0 bg-gradient-to-t from-darker-blue to-transparent transition-all'>
        <div className='relative px-8'>
          <div className='relative bg-white rounded-lg shadow dark:bg-gray-700 text-xl'>
          <ul className='leading-[3rem] text-center py-8 px-4'>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Product</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Community</a></li>
          </ul>
          </div>
        </div>
      </div>

    <nav className='flex items-center py-8 justify-between p-4 mt-4 md:text-sm lg:text-base'>
      <img className='ml-4' src={Asset.ManageLogo} alt="Manage" />
      <button onClick={toggleModal} className="mr-4 md:hidden">
        {isMenuOpen && <img src={Asset.CloseIcon} alt="PlaceHolder"/>}
        {!isMenuOpen && <img src={Asset.HamburgerSVG} alt="PlaceHolder"/>}
      </button>
        <ul className='hidden gap-8 md:flex md:items-center'>
          <li><a href="/">Pricing</a></li>
          <li><a href="/">Product</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">Careers</a></li>
          <li><a href="/">Community</a></li>
        </ul>
        <button className='hidden md:inline bg-primary-red text-white p-4 rounded-full px-8'>Get Started</button>
    </nav>
  </>
  )
}

export default Header