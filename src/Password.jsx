import { useState } from "react";
import './Password.css'
import { Link } from "react-router-dom";

function Password(){

    const [email, setEmail] = useState('');

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

            <div className="pass-reset">
                <h1>Recupere <br/><spam className='blue'>sua senha!</spam></h1>
                <p>Para redefinir a sua senha, por favor, informe o endereço de e-mail cadastrado em sua conta para que possamos enviar um link com as instruções necessárias.</p>
            </div>    

            <div className="auth-form-container">
                <form className="register-form" onSubmit={handleSubmit}>

                    <h1>IMPORTANTE!</h1>
                    <p>Se o email não estiver na sua caixa de entraada, por favor, verifique a caixa de spam</p>        

                    <label className="email-form" htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />

                    <button className="submit-button" type="submit">Enviar</button>
                    <button >
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <img src="./src/assets/voltar.png" alt="estacio-logo" />
                            <img src="./src/assets/voltar.png" alt="estacio-logo" />
                        </Link>
                    </button>
                </form> 
            </div>
        </div>    
    </>
    )
}

export default Password;
//