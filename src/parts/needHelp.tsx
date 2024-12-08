
import '../App.css'
import Swal from 'sweetalert2';

import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const NeedHelp = ()=>{

    const navigate = useNavigate();

    const [name , setName] = useState<string>("");
    const [lastName , setLastName] = useState<string>("");
    const [email , setEmail] = useState<string>("");
    const [phoneNumber , setPhoneNumber] = useState<number>();
    const [text , setText] = useState<string>("")
    const [error , setError] = useState<string>("");

    const handleSubmit = (e: any)=>{
        e.preventDefault();

        if (name === '' && lastName === '' && email === '' && text === ''){
            setError("لطفا اطلاعات خود را به صورت کامل وارد کنید ...")
        }

        localStorage.setItem("name :" , name);
        localStorage.setItem("lastname :" , lastName);
        localStorage.setItem("Email :" , email);
        localStorage.setItem("phoneNumber :" , phoneNumber?.toString() || "");
        localStorage.setItem("text :" , text);

        Swal.fire({
            title: "ثبت شد ...",
            text: "پیغام شما با موفقیت ثبت و ارسال شد ...",
            icon: "success",
            confirmButtonText: "باشه ",
        });
    }

    return(
        <div className='needHelp'>
            <h1 className='title-needHelp'>نیاز به مشاوره دارید؟</h1>
            <div className='needHelp-container'>
                <div className='header-box-help'>
                    <input onChange={(e)=> setName(e.target.value)} maxLength={10} className='input-header-box0help' placeholder='نام :'></input>
                    <input onChange={(e)=> setLastName(e.target.value)} maxLength={20} className='input-header-box0help' placeholder='نام خانوادگی :'></input>
                    <br></br>
                    <input onChange={(e)=> setEmail(e.target.value)} className='input-header-box0help' placeholder='ایمیل :'></input>
                    <input onChange={(e)=> setPhoneNumber(Number(e.target.value))} maxLength={11} className='input-header-box0help' placeholder='شماره تلفن :'></input>
                </div>
                <div className='main-box-help'>
                <h2 className='title-mainHelp'>موضوع مشاوره :</h2>
                    <div className='main-box-help-container'>
                        <h4 className='text-checkbox-Help'>طراحی سایت</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                        <h4 className='text-checkbox-Help'>خدمات سئو و بهینه ساز</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                        <h4 className='text-checkbox-Help'>اپلیکیشن موبایل</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                        <h4 className='text-checkbox-Help'>طراحی گرافیک</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                        <br></br>
                        <h4 className='text-checkbox-Help'>فروشگاه اینترنتی</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                        <h4 className='text-checkbox-Help'>بازاریابی دیجیتال (تبلیغات، رپورتاژ و ...)</h4>
                        <input className='check-box-input-main-help' type='checkbox'></input>
                    </div>
                </div>
                <div className='footer-help'>
                    <input onChange={(e)=> setText(e.target.value)} className='input-text-help' placeholder='درخواست خود را شرح دهید...'></input>
                    <br></br>
                    <button onClick={handleSubmit} className='btn-help'>ارسال</button>
                    <p style={{color : 'red' , fontWeight: "bolder"}}>{error}</p>
                </div>
            </div>
        </div>
    )
}