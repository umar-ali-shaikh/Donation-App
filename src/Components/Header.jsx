import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Css/Component.css';

const DEFAULT_AVATAR = "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";

function Header({ isLoggedIn, setIsLoggedIn }) {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
    const navigate = useNavigate();

    useEffect(() => {
        const updateAvatar = () => {
            const savedImage = localStorage.getItem("profileImage");
            setAvatar(savedImage || DEFAULT_AVATAR);
        };

        updateAvatar();
        window.addEventListener("profileImageUpdated", updateAvatar);
        return () => window.removeEventListener("profileImageUpdated", updateAvatar);
    }, []);

    const logout = () => {
        localStorage.removeItem("login");
        setIsLoggedIn(false);
        setOpen(false);
        navigate("/login", { replace: true });
    };

    return (
        <header className="app-header">

            {/* --- 1. TOP BAR --- */}
            {/* Updated bg-dark to use var(--secondary) for the specific dark gray #2d3436 */}
            <div
                className="top-bar text-white py-2"
                style={{ backgroundColor: 'var(--secondary)', fontSize: '0.9rem' }}
            >
                <div className="container d-flex justify-content-between align-items-center">

                    {/* Left: Contact Info */}
                    <div className="d-none d-md-block">
                        <i className="fas fa-envelope me-2" style={{ color: 'var(--primary)' }}></i>
                        info@humansofkindness.com
                        <span className="mx-3 text-white-50">|</span>
                        <i className="fas fa-phone me-2" style={{ color: 'var(--primary)' }}></i>
                        +1 (888) 123-4567
                    </div>

                    {/* Right: Login / Profile */}
                    <div className="ms-auto d-flex align-items-center">
                        {!isLoggedIn ? (
                            <div className="auth-links">
                                <span
                                    className="text-white me-3"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate("/login")}
                                >
                                    <i className="fas fa-user me-1"></i> Login / Sign Up
                                </span>
                                <span
                                    className="text-white"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => navigate("/contact")}
                                >
                                    Support
                                </span>
                            </div>
                        ) : (
                            <div className="position-relative">
                                <div
                                    className="d-flex align-items-center"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setOpen(!open)}
                                >
                                    <img
                                        src={avatar}
                                        alt="Profile"
                                        className="rounded-circle border border-white me-2"
                                        style={{ width: '30px', height: '30px', objectFit: 'cover' }}
                                    />
                                    <span>My Account <i className="fas fa-chevron-down ms-1" style={{ fontSize: '0.7em' }}></i></span>
                                </div>

                                {/* Dropdown Menu */}
                                {open && (
                                    <div
                                        className="position-absolute bg-white text-dark shadow rounded p-2 end-0 mt-2"
                                        style={{ width: '180px', zIndex: 1030 }}
                                    >
                                        <div className="d-flex flex-column gap-2">
                                            <button className="btn btn-sm btn-light text-start" onClick={() => navigate("/profile")}>
                                                My Profile
                                            </button>
                                            <button className="btn btn-sm btn-light text-start" onClick={() => navigate("/userstories")}>
                                                My Stories
                                            </button>
                                            <hr className="my-1" />
                                            <button className="btn btn-sm btn-light text-start text-danger" onClick={logout}>
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* --- 2. NAVBAR --- */}
            <nav className="navbar navbar-expand-lg sticky-top bg-white shadow-sm">
                <div className="container">

                    {/* Brand */}
                    <a className="navbar-brand fw-bold fs-3" href="#" onClick={(e) => { e.preventDefault(); navigate('/home'); }} style={{ color: 'var(--text-main)' }}>
                        <span style={{ color: 'var(--primary)', marginRight: '5px' }}>
                            <span className="heart me-1">❤️</span>
                            Humans
                        </span>
                        of Kindness
                    </a>

                    {/* Mobile Toggler */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Links */}
                    <div className={`collapse navbar-collapse justify-content-end ${menuOpen ? 'show' : ''}`} id="navbarNav">
                        <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => { navigate("/home"); setMenuOpen(false); }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => { navigate("/about"); setMenuOpen(false); }}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => { navigate("/stories"); setMenuOpen(false); }}>Stories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => { navigate("/contact"); setMenuOpen(false); }}>Contact Us</a>
                            </li>

                            {/* Donate CTA */}
                            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <button
                                    className="btn btn-primary rounded-pill px-4"
                                    style={{
                                        backgroundColor: 'var(--primary)',
                                        borderColor: 'var(--primary)'
                                    }}
                                    onClick={() => { navigate("/donation"); setMenuOpen(false); }}
                                >
                                    Donate Now <i className="fas fa-arrow-right ms-2"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;