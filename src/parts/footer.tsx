import '../App.css'

import logoCall from '../logo/logo-footer/Call.png'
import logoLocation from '../logo/logo-footer/Location.png'
import logoMessage from '../logo/logo-footer/Message.png'
import logoAparat from '../logo/logo-footer/Aparat_Icon 1.png'
import logoTel from '../logo/logo-footer/telegram.png'
import logoInsta from '../logo/logo-footer/ph_instagram-logo.png'
import logowhatsapp from '../logo/logo-footer/whatsapp.png'
import logoTewter from '../logo/logo-footer/tweter.png'

import imgFooter from '../image/image-footer/000 1.png'

export const Footer = ()=>{

    const scrollToTop = ()=>{
        window.scrollTo({top: 0 , behavior: 'smooth'})
    }

    const handleAparat =()=>{
        window.location.href =("https://www.aparat.com/")
    }
    const handleTelegram =()=>{
        window.location.href =("https://telegram.org/")
    }
    const handleInsta =()=>{
        window.location.href =("https://www.instagram.com/")
    }
    const handleWhatsApp =()=>{
        window.location.href =("https://web.whatsapp.com/")
    }
    const handletweter =()=>{
        window.location.href =("https://twitter.com/?lang=fa")
    }

    return(
        <div className='footer'>
            <div className='header-footer'>
                <img className='logo-header-footer' src={logoCall}></img>
                <h3 className='text-header-footer'>تلفن : ۳۲۳۴ ۲۳۴۵ ۰۲۱</h3>
                <img className='logo-header-footer' src={logoLocation}></img>
                <h3 className='text-header-footer'>شیراز خیابان ملاصدرا، کوچه ۶</h3>
                <img className='logo-header-footer' src={logoMessage}></img>
                <h3 className='text-header-footer'>meymandiarman@gmail.com</h3>
            </div>
            <div className='main-footer'>
                <img className='img-footer' src={imgFooter}></img>
                <div className='list1-footer'>
                    <h3 className='title-list'>دسترسی سریع</h3>
                    <p onClick={scrollToTop} className='text-list'>صفحه اصلی</p>
                    <p className='text-list'>حساب کاربری</p>
                    <p className='text-list'>تماس با ما</p>
                </div>
                <div className='list2-footer'>
                    <h3 className='title-list'>لینک های داغ</h3>
                    <p className='text-list'>فرصت های شغلی</p>
                    <p className='text-list'>قوانین و مقررات</p>
                    <p className='text-list'>درباره ما</p>
                </div>
                <div className='list3-footer'>
                    <h2 className='title-list'>از تخفیفات با خبر شو</h2>
                    <input className='input-footer' placeholder='لطفا شماره موبایل خود را وارد کنید'></input>
                    <button className='btn-footer'>عضو شوید</button>
                    <div className='img-footer-container-lost'>
                        <img onClick={handleAparat} className='img-logo-list' src={logoAparat}></img>
                        <img onClick={handleTelegram} className='img-logo-list' src={logoTel}></img>
                        <img onClick={handleInsta} className='img-logo-list' src={logoInsta}></img>
                        <img onClick={handleWhatsApp} className='img-logo-list' src={logowhatsapp}></img>
                        <img onClick={handletweter} className='img-logo-list' src={logoTewter}></img>
                    </div>
                </div>
            </div>
            <div className='footer-footer'>
                <h3 className='text-footer-footer'>کلیه حقوق مادی و معنوی دوره ها متعلق به این وبسایت می باشد.</h3>
            </div>
        </div>
    )
}