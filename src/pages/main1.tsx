import '../App.css'

import { InformationMain1Part1 } from '../information/information-main1'
import { InformationMain1Part2 } from '../information/information-main1'

export const Main1 = ()=>{
    return(
        <div className='main1'>
                <div className='header-main'>
                    <button id='btn1-header-main' className='btn-header-main'>مشاهده بیشتر</button>
                    <button id='btn2-header-main' className='btn-header-main'>دیدن نمونه کارها</button>
                </div>
            <div className='main-container-part1'>
                <div className='main-part1'>
                    {InformationMain1Part1.map((information1)=>(
                        <>
                            <img id='fix-image-main1' className='img-main-part1' src={information1.img}></img>
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
                    {InformationMain1Part2.map((information2)=>(
                        <>
                            <img id='fix-image-main1-part2' className='img-main-part2' src={information2.img}></img>
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