import '../App.css'

import logoBag from '../logo/logo-cart/icons8-bag-50.png'
import imgCart from '../image/image-cart/Unofficial_JavaScript_logo_2.svg.png'
import logoPay from '../logo/logo-cart/icons8-card-30.png'
import logoDelete from '../logo/logo-cart/icons8-delete-24.png'

export const Cart = ()=>{
    return(
        <div className='cart'>
            <div className='header-cart'>
                <img className='logo-cart' src={logoBag}></img>
                <h1 className='title-cart'>سبد خرید</h1>
            </div>
            <div className='cart-container'>
                <div className='box-cart'>
                    <div className='shops-container-box'>
                        <img className='img-shop' src={imgCart}></img>
                        <h3 className='name-shop'>آموزش جاوا اسکریپت مقدماتی تا پیشرفته + مینی پروژه</h3>
                        <h4 className='price-shop'>2,000,000 تومان</h4>
                        <img className='logo-delete' src={logoDelete}></img>
                    </div>
                </div>
                <div className='box-pay'>
                    <div className='header-pay'>
                        <img className='logo-pay' src={logoPay}></img>
                        <h1 className='title-pay'>اطلاعات پرداخت</h1>
                    </div>
                    <h2 className='text-pay'>مجموع قیمت ها :</h2>
                    <h3 className='price-pay'>2,000,000 تومان</h3>
                    <button className='btn-pay'>پرداخت</button>
                </div>
            </div>
        </div>
    )
}