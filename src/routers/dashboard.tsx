import '../App.css'

import logoHome from '../logo/logo-dashboard/icons8-home-24.png'
import logoDashboard from '../logo/logo-dashboard/icons8-dashboard-24.png'
import logoMessage from '../logo/logo-dashboard/icons8-message-50.png'

import { useNavigate } from 'react-router-dom'

export const Dashboard = ()=>{

    const navigate = useNavigate();

    const handleHome = ()=>{
        navigate("/")
    }

    const email = localStorage.getItem("email :");
    const password = localStorage.getItem("password :")

    return(
        <div className='dashboard'>
            <div className='dashboard-container'>
                <div className='listBox-dashboard'>
                    <img onClick={handleHome} className='logo-dashboard' src={logoHome}></img>
                    <br></br>               
                    <img className='logo-dashboard' src={logoDashboard}></img>
                    <br></br>              
                    <img className='logo-dashboard' src={logoMessage}></img>
                </div>
                <div className='main-dashboard'>
                    <main>
                        <h2 className='title-main-dashboard'>داشبورد</h2>
                        <h4 className='text-main-dashboard'>اطلاعات شما :</h4>
                        <div className='info-dashboard'>
                            <h3 className='text-info-dashboadr'>ایمیل شما : <span className='span-dashboard'>{email}</span></h3>
                            <br></br>
                            <h3 className='text-info-dashboadr'>رمز عبور شما : <span className='span-dashboard'>{password}</span></h3>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}