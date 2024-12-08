import '../App.css'

export const Messages = ()=>{

    const name = localStorage.getItem("name :");
    const lastname = localStorage.getItem("lastname :");
    const Email = localStorage.getItem("Email :"); 
    const phoneNumber = localStorage.getItem("phoneNumber :");
    const text = localStorage.getItem("text :");

    return(
        <div className="message">  
            <div className='box-messages'>
                <h2 className='title-messages-panel'>پیام های دریافتی </h2>
                <div className='info-message'>
                    <h3 className='info-user-message'>نام کاربر : <span className='span-message'>{name}</span></h3>
                    <h3 className='info-user-message'>نام خانوادکی کاربر: <span className='span-message'>{lastname}</span></h3>
                    <h3 className='info-user-message'>ایمیل کاربر : <span className='span-message'>{Email}</span></h3>
                    <h3 className='info-user-message'>شماره تماس : <span className='span-message'>{phoneNumber}</span></h3>
                    <br></br>
                    <h3 className='info-user-message'>متن کاربر : <span className='span-message-user-text'>{text}</span></h3>
                </div>
            </div>
        </div>
    )
}