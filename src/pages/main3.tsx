import '../App.css'

import { InformationMain3 } from '../information/information-main3'

import { Feature } from '../parts/feaature'

export const Main3 = ()=>{
    return(
        <div className='main3'>
                <div className='header-main'>
                    <button id='btn1-header-main' className='btn-header-main'>مشاهده بیشتر</button>
                    <button id='btn2-header-main' className='btn-header-main'>دیدن نمونه کارها</button>
                </div>
            <div className='main-container-part1'>
                <div className='main-part1'>
                    {InformationMain3.map((information1)=>(
                        <>
                            <img id='fix-image-main3' className='img-main-part1' src={information1.img}></img>
                            <h3 className='text1-main-part1'>{information1.text1}</h3>
                            <h1 className='title0main-part1'>{information1.title}</h1>
                            <p className='text-main-part1'>{information1.text}</p>
                        </>
                    ))}
                </div>
            </div>
            <Feature />
        </div>
)}