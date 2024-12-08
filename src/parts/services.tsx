import '../App.css'

import logoLike from '../logo/logo-home/Like 1.png'
import logoVector from '../logo/logo-home/Vector.png'
import logoDisplay from '../logo/logo-home/Display 1.png'
import logoBG from '../logo/logo-home/Ellipse 3bg.png'

export const Services = ()=>{
    return(
        <div className='services'>
            <h2 className='title-services'>خدمات ما</h2>
            <div data-aos="fade-down" className='services-container'>
                <div className='box-services'>
                    <img className='logo-services' src={logoLike}></img>
                    <h4 className='text-logo-services'>ادمین اینستاگرام</h4>
                </div>
                <div className='box-services'>
                    <img className='logo-services' src={logoVector}></img>
                    <h4 className='text-logo-services'>طراحی گرافیک</h4>
                </div>
                <div className='box-services'>
                    <img className='logo-services' src={logoDisplay}></img>
                    <h4 className='text-logo-services'>طراحی وبسایت</h4>
                </div>
            </div>
        </div>
    )
}