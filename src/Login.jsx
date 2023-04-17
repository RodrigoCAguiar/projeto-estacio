import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
    <>   
    <div className="logo">
        <img src="./src/assets/estacio.png" alt="estacio-logo" />
    </div>    

    <div className="auth-form-wrapper">

        <div className="auth-form-image">
            <img src="./src/assets/Rectangle.png" alt="your-image" />
        </div>

        <div className="auth-form-container">
        <h3>Faça seu login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />

                <label htmlFor="email">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="email" name="email" />

                <button onClick={() => props.onFormSwitch('register')}>Não tem uma conta? <strong>CADASTRE-SE.</strong></button>
                <button onClick={() => props.onFormSwitch('password')}>Esqueceu a senha?</button>
                
                <button id="login" type="submit">Log in</button>
            </form>

        </div>

    </div>
    </>
    )
}