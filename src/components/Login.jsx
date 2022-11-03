import React from 'react';

import './Login.css';

import Api from '../Api';

const Login = ({onReceive}) => {

    const handleFacebookLogin = async () =>{
        let result = await Api.fbPopup();
        if(result){
            onReceive(result.user);
        }else{
            alert("Erro!");
        }
    }

    return (
        <div className="login">
            <h1>Welcome to WhatsApp</h1>
            <button onClick={handleFacebookLogin}>Login with Facebook</button>
        </div>
    );
}
 
export default Login;