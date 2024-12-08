import '../App.css'

import { Ads } from '../ads/ads'

import { useNavigate } from 'react-router-dom'

import logoHeader from '../logo/logo-header/LOGOheader.png'
import cartHeader from '../logo/logo-header/cartLogo.png'
import vectorHeader from '../logo/logo-header/VectorHeader.png'
import searchHeader from '../logo/logo-header/Search 1header.png'
import MenuLogoHeader from '../logo/logo-header/Menu-logo-headerr.png'



export const Header = ()=>{

    const navigate = useNavigate();

    const handleLog = ()=>{
        navigate("/log-in")
    }
    const handleCart = ()=>{
        navigate("/cart-user")
    }

    const scrollToNeedHelp = ()=>{
        window.scrollTo({top: 10750 , behavior: 'smooth'})
    }
    const scrollToServices = ()=>{
        window.scrollTo({top: 1000 , behavior: 'smooth'})
    }
    const scrollToTexts = ()=>{
        window.scrollTo({top: 9500 , behavior: 'smooth'})
    }
    const scrollToProjects = ()=>{
        window.scrollTo({top: 1500 , behavior: 'smooth'})
    }

    return(
        <div className="header">
            <Ads />
            <div className='header-container'>
                <img className='logo-header' src={logoHeader}></img>
                <button onClick={scrollToServices} className='btn-right-header'>   <img className='logo-menu-right-btn-header' src={MenuLogoHeader}></img>لیست خدمات </button>
                <div className='btn-main-heacer-container'>
                    <h4 className='btn-main-header'>صفحه اصلی</h4>
                    <h4 onClick={scrollToProjects} className='btn-main-header'>نمونه کارها</h4>
                    <h4 onClick={scrollToNeedHelp} className='btn-main-header'>تماس با ما</h4>
                    <h4 onClick={scrollToTexts} className='btn-main-header'>وبلاگ</h4>
                </div>
                <div className='left-side-header-container'>
                    <img className='logo-search-header' src={searchHeader}></img>
                    <button onClick={handleLog} className='btn-log-header'> <img className='logo-vector-header' src={vectorHeader}></img>ورود / ثبت نام </button>
                    <img onClick={handleCart} className='logo-cart-header' src={cartHeader}></img>
                </div>
            </div>
        </div>
    )
}