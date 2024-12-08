import '../App.css'

import imgFeature from '../image/image-feature/2 1.png'
import imgKingdom from '../image/image-feature/Rectangle 53222.png'
import Imghuman from '../image/image-feature/digital-marketing-specialist-8628815-6854086 1.png'
import lineImg from '../logo/logo-feature/Rectangle 54.png'
import star from '../logo/logo-feature/Group 48095803starcomment.png'
import imgComment1 from '../image/image-feature/Ellipse 10comment2.png'
import imgComment2 from '../image/image-feature/Ellipse 11comment1.png'
import imgComment3 from '../image/image-feature/Ellipse 9comment3.png'


import { InformationFeture } from '../information/information-feature'

import { LastText } from './lastText'

export const Feature = ()=>{

    return(
        <div className='feature'>
            <h1 className='title-feture'>ویژگی های ما</h1>
            <div className='feture-container'>
            <img className='image-feature' src={imgFeature}></img>

                {InformationFeture.map((information)=>(
                    <>
                        <div className='box-feature'>
                            <div className='box-logo-feature'>
                                <img className='logo-item-box-feture' src={information.logo}></img>
                            <h3 className='text-logo-box'>{information.textLogo}</h3>
                            </div>
                            <div className='box-text-feture'>
                            <p className='text-box-feture'>{information.textBox}</p>
                    </div>
                </div>
                    </>
                ))}
            </div>
            <div className='boxText-feature'>
            <img id='imgLine1' className='imgLine' src={lineImg}></img>
            <img id='imgLine2' className='imgLine' src={lineImg}></img>
                <div className='boxText-feature1'>
                    <img className='image-boxText-feature1' src={imgKingdom}></img>
                    <div className='container-text-box-text'>
                    <h3 className='text1-boxText'>در کسب و کارت بدرخش...</h3>
                    <h1 className='title-boxText'>پادشاه کسب و کار خودت باش</h1>
                    <p className='text-boxtext'>امروزه اکثر کسب و کارهای سنتی از دارن از بین میرن و کسب و کارهای آنلاین و یا حتی نوپا پیشتاز در عرصه ی رقابت هستند. حالا ما چه کاری میتوانیم انجام دهیم که دچار ورشکستگی و از بین رفتن کسب و کار خود نشویم؟ </p>
                    </div>
                </div>
            </div>
            <div className='boxText-feature'>
            <img id='img2Line1' className='imgLine' src={lineImg}></img>
            <img id='img2Line2' className='imgLine' src={lineImg}></img>
                <div className='boxText-feature1'>
                    <img className='image2-boxText-feature1' src={Imghuman}></img>
                    <div className='container-text-box-text'>
                    <h3 className='text1-boxText2'>فضایی به گستردگی نیازها...</h3>
                    <h1 className='title-boxText2'>دیجیتال مارکتینگ چیست ؟</h1>
                    <p className='text-boxtext2'>دنیای دیجیتال آنقدر وسیع است که بی شک نیاز به متخصصین خاص خود دارد و احتمالا افرادی را دیده اید که از اصطلاحات نامفهوم انگلیسی استفاده میکنند و خود را دیجیتال مارکتر متخصصی نشان میدهند اما وقتی افسار کسب و کار خود را به دست این افراد میسپارید با نتایج منفی و هدر رفتن وقتتان مواجه میشوید...</p>
                    </div>
                </div>
            </div>
            <div className='comments'>
                <div className='comments-container'>
                    <h1 className='title-comment'>نظرات مشتریان ما</h1>
                    <div className='box-comment'>
                        <div className='container-img-comment'>
                            <img className='img-comment' src={imgComment1}></img>
                            <img className='img-comment' src={imgComment2}></img>
                            <img className='img-comment' src={imgComment3}></img>
                        </div>
                        <h3 className='name-img'>احمدرضا حسینی</h3>
                        <img className='logo-star-comment' src={star}></img>
                        <p className='text-comment'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.</p>
                    </div>
                </div>
            </div>
            <LastText />
        </div>
    )
}