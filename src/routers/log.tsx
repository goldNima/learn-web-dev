import '../App.css'

import ImgLog from '../image/image-log-in/89e31fb982e6d87f239196db2b3e9ccc copy 1.png'
import logoBoxLog from '../logo/logo-log/LOGO.png'
import logoFacebook from '../logo/logo-log/Group.png'
import logoGit from '../logo/logo-log/Vector.png'
import logoGoogle from '../logo/logo-log/Group 2212.png'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const Log =()=>{

    const navigate = useNavigate();

    const [email , setEmail] = useState<string>('');
    const [password , setPassword] = useState<string>('');
    const [error , setError] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent)=>{
        e.preventDefault();

        localStorage.setItem('email :' , email);
        localStorage.setItem('password :' , password);

        if(email === '' && password === ''){
            setError("لطفا اطلاعات را به صورت کامل وارد کنید ...")
        }else if (email === "nimaT22@gmail.com" && password === "N1212T"){
            navigate("/panel-Admin")
        }else{
            navigate("/dashboard")
        }

        const emailRegax = /^[6\s@]+@[^\s@]+\.[^s@]+\.[^s@]+$/;
        if (!emailRegax.test(email)){
            return;
        }

    }

    const handleFaceBook =()=>{
        window.location.href =("https://www.facebook.com/")
    }
    const handlegit = ()=>{
        window.location.href= ("https://github.com/")
    }
    const handleGoogle = ()=>{
        window.location.href= ("https://www.google.com/")
    }

    return(
        <div className='log'>
            <div className='log-container'>
                <img className='img-log' src={ImgLog}></img>
                <div data-aos="flip-up" className='log-in-box'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email'></label>
                            <img className='logo-log-in' src={logoBoxLog}></img>
                            <h2 className='title-log'>ثبت نام</h2>
                            <p className='text-input'>ایمیل :</p>
                            <input onChange={handleChange} type='email' value={email} className='input-log' placeholder='ایمیل :'></input>
                            <p className='text-input'>رمز عبور :</p>
                            <input maxLength={20} onChange={(e)=> setPassword(e.target.value)} type='password' className='input-log' placeholder='رمز عبور :'></input>
                            <br></br>
                            <button type='submit' className='btn-log'>ثبت نام</button>
                            <p style={{color: "red" , textAlign: "center"}}>{error}</p>
                    </form>
                    <div className='logo-footer-container-log'>
                        <img onClick={handleFaceBook} className='logo-footer-log' src={logoFacebook}></img>
                        <img onClick={handlegit} className='logo-footer-log' src={logoGit}></img>
                        <img onClick={handleGoogle} className='logo-footer-log' src={logoGoogle}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}