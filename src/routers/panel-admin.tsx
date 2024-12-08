import '../App.css'

import logoHome from '../logo/logo-panel-admin/icons8-home-24.png'
import logoPanel from '../logo/logo-panel-admin/icons8-panel-24.png'
import logoMessages from '../logo/logo-panel-admin/icons8-message-50.png'

import { useNavigate } from 'react-router-dom'

export const PanelAdmin  = ()=>{

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate("/")
    }
    const handleMessage = ()=>{
        navigate("/panel-Admin-messages")
    }

    const email = localStorage.getItem("email :");
    const password = localStorage.getItem("password :")

    return(
        <div className='panleAdmin'>
            <div className='panelAdmin-container'>
                <div className='list-box'>
                    <img onClick={handleHome} className='logo-panel' src={logoHome}></img>
                    <br></br>
                    <img className='logo-panel' src={logoPanel}></img>
                    <br></br>
                    <img onClick={handleMessage} className='logo-panel' src={logoMessages}></img>
                </div>
                <div className='box-logs'>
                    <h2 className='title-boxLog'>اطلاعات ثبت نام ها</h2>
                    <h3 className='text-logs'>ایمیل :<span className='span-panel'>{email}</span></h3>
                    <br></br>
                    <h3 className='text-logs'>رمز :<span className='span-panel'>{password}</span></h3>
                </div>
            </div>
        </div>
    )
}