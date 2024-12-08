import '../App.css'

import { InformationMain2Part1 } from '../information/information-main2'
import { InformationMain2Part2 } from '../information/information-main2'

export const Main2 = ()=>{
    return(
        <div className='main2'>
                <div className='header-main'>
                    <button id='btn1-header-main' className='btn-header-main'>مشاهده بیشتر</button>
                    <button id='btn2-header-main' className='btn-header-main'>دیدن نمونه کارها</button>
                </div>
            <div className='main-container-part1'>
                <div className='main-part1'>
                    {InformationMain2Part1.map((information1)=>(
                        <>
                            <img id='fix-image-main2' className='img-main-part1' src={information1.img}></img>
                            <h3 className='text1-main-part1'>{information1.text1}</h3>
                            <h1 className='title0main-part1'>{information1.title}</h1>
                            <p className='text-main-part1'>{information1.text}</p>
                        </>
                    ))}
                </div>
            </div>
            <br></br>
            <div className='main-container-part2'>
                <div className='main-part2'>
                    {InformationMain2Part2.map((information2)=>(
                        <>
                            <img id='fix-image-main2' className='img-main-part2' src={information2.img}></img>
                            <h3 className='text1-main-part2'>{information2.text1}</h3>
                            <h1 className='title-main-part2'>{information2.title}</h1>
                            <p className='text-main-part2'>{information2.text}</p>
                        </>
                    ))}
                </div>
            </div>
            <div className='footer-main'>
                <button id='btn1-header-main-part2' className='btn-header-main-part2'>مشاهده بیشتر</button>
                <button id='btn2-header-main-part2' className='btn-header-main-part2'>دیدن نمونه کارها</button>
            </div>
        </div>
    )
}