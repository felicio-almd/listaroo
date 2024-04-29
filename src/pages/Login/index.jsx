import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const navigate = useNavigate()

    const submitUsername = () => {
        if (username.length > 0) {
            localStorage.setItem('username', username);
        }
        navigate('/home')
    };

    return (
        <>
            <form className='login__main' onSubmit={submitUsername}>
                <article className='login__article'>
                    <h1 className='login__title'>Digite o seu nome</h1>
                    <input
                        className="login__label"
                        type="text"
                        placeholder='Usuário...'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <button 
                        type='submit'
                        className='login__button'
                        disabled={username.length === 0}
                    >
                        Entrar em seu ToDoList
                    </button>
                </article>
            </form>
            <Footer />
        </>
    );
}

export default Login;
