import '../App.css'

import { Header } from '../parts/header'
import { Services } from '../parts/services'
import { Main1 } from './main1'
import { Main2 } from './main2'
import { Main3 } from './main3'
import { NeedHelp } from '../parts/needHelp'
import { Footer } from '../parts/footer'

import imageHome from '../image/image-home/image-home.png'

export const Home = ()=>{

    
    const scrollToNeedHelp = ()=>{
        window.scrollTo({top: 10750 , behavior: 'smooth'})
    }
    const scrollToProjects = ()=>{
        window.scrollTo({top: 1500 , behavior: 'smooth'})
    }

    return(
        <div className="home">
            <Header />

            <div data-aos="zoom-in" className='home-container'>
                <div className='right-home'>
                    <h1 className='title-home'>شروع کسب و کار آنلاین با</h1>
                    <h4 className='text-home'>تیم طراحی سایت و پشتیبانی وردپرس</h4>
                    <button onClick={scrollToNeedHelp} className='btn-home1'>درخوسات مشاوره رایگان</button>
                    <button onClick={scrollToProjects} className='btn-home2'>نمونه کارها</button>
                </div>
                <div className='img-header-container'>
                    <img className='image-home' src={imageHome}></img>
                </div>
            </div>

            <Services />
            <Main1 />
            <Main2 />
            <Main3 />
            <NeedHelp />
            <Footer />
        </div>
    )
}