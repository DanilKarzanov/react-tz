import  React  from "react";
import Loginform from "../components/Loginform";


const Account = () => {
    
    const divStyle = {
        fontSize: '26px',
        fontWeight: '600',
        marginTop: '30px',
        marginLeft: '500px',
        marginBottom: '20px'
    }
    return (
        <div style={divStyle}>Войти
                <Loginform/>
        </div>
    )
}

export default Account