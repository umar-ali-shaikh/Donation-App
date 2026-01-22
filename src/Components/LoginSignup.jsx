import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../Css/Component.css';

function Loginsign({ setIsLoggedIn }) {
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("login", "true");
        setIsLoggedIn(true);
        navigate("/home");
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        {isLogin ? 'Login' : 'Create Account'}
                    </button>
                </form>

                <p className="toggle-text">
                    {isLogin ? "Don't have an account?" : 'Already have an account?'}
                    <span onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? ' Sign Up' : ' Login'}
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Loginsign
