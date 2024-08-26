import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky,setSticky]= useState(false);
  const [hideMenu,setHideMenu]= useState(false);

  useEffect(()=> {

    window.addEventListener('scroll' , ()=> {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);    })

  },[]);




  const toggleMenu = () => {

    hideMenu?setHideMenu(false):setHideMenu(true);

  }




  return (


    <nav className={`container ${sticky?'dark-nav':''}`}>

    <img src={logo} alt="" className='logo' />

      <ul className={hideMenu ? '' :'mobile'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>        
        <li><Link to='contact' smooth={true} offset={-260} duration={500} >Contact Us</Link></li>
    </ul>

    <img onClick={toggleMenu} className='menu-icon' src={menu_icon} alt="" />

    </nav>
  )
}

export default Navbar
