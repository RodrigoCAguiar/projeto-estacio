import React, { useState } from "react"
import { Link } from "react-router-dom"

function Login() {
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
        <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />

                <label htmlFor="email">Senha</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="email" name="email" />

                <button>
                    <Link to={'/register'} style={{ textDecoration: 'none', color: 'inherit' }}>Não tem uma conta? <strong>CADASTRE-SE.</strong></Link>
                </button>
                <button>
                    <Link to={'/password'} style={{ textDecoration: 'none', color: 'inherit' }}>Esqueceu a senha?</Link>
                </button>
                
                <button id="login" type="submit">Log in</button>
            </form>

        </div>

    </div>
    </>
    )
}

export default Login;