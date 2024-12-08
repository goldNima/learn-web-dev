import '../App.css'

import img1 from '../image/image-lastText/6f5bc0101084519 2img1.png'
import img2 from '../image/image-lastText/9c5bf1101084519 2img2.png'
import img3 from '../image/image-lastText/unsplash_71Qk8ODIBkoimg3.png'

export const LastText = ()=> {
    return(
        <div className='lastText'>
            <h1 className='title-lasttext-main'>آخرین مقالات</h1>
            <div className='lastText-container'>
                <img className='img-lasttext1' src={img1}></img>
                <div className='box-lasttext'>
                    <h2 className='title-lasttext'>هر رنگ نشانه چیست؟ چطور باید انتخاب رنگ مناسبی داشته باشیم؟</h2>
                    <h4 className='date-lasttext'><span className='span'>۲۲</span> خرداد ۱۴۰۲</h4>
                    <p className='text-lasttext'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها....</p>
                </div>
                <img className='img-lasttext2' src={img2}></img>
                <div className='box-lasttext'>
                    <h2 className='title-lasttext'>همه چیز درباره تولید محتوا وبسایت، معرفی ۶ اصل مهم.</h2>
                    <h4 className='date-lasttext'><span className='span'>۲۲</span> خرداد ۱۴۰۲</h4>
                    <p className='text-lasttext'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها....</p>
                </div>
                 <img className='img-lasttext3' src={img3}></img>
                <div className='box-lasttext'>
                    <h2 className='title-lasttext'>آپدیت جدید اینستاگرام منتشر شد معرفی قابلیت های اینستاگرام.</h2>
                    <h4 className='date-lasttext'><span className='span'>۲۲</span> خرداد ۱۴۰۲</h4>
                    <p className='text-lasttext'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان است، چاپگرها....</p>
                </div>
            </div>
        </div>
    )
}