import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../style.css';

const DEFAULT_AVATAR =
    "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";

function Header({ isLoggedIn, setIsLoggedIn }) {
    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState(DEFAULT_AVATAR);
    const navigate = useNavigate();

    useEffect(() => {
        const updateAvatar = () => {
            const savedImage = localStorage.getItem("profileImage");
            setAvatar(savedImage || DEFAULT_AVATAR);
        };

        updateAvatar(); // first load
        window.addEventListener("profileImageUpdated", updateAvatar);

        return () => {
            window.removeEventListener("profileImageUpdated", updateAvatar);
        };
    }, []);

    const logout = () => {
        localStorage.removeItem("login");
        localStorage.removeItem("profileImage");
        setIsLoggedIn(false);
        navigate("/login");
    };

    return (
        <header className="app-header">
            <div className="container header-inner">

                {/* Logo */}
                <div className="header-logo">
                    <span className="heart">❤️</span>
                    <span className="brand">Humans of Kindness</span>
                </div>

                {/* Navigation */}
                <nav className="header-nav">
                    <a href="/home">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/Stories">Stories</a>
                    <a href="/donation">Donate</a>
                    <a href="/contact">Contact Us</a>
                </nav>

                {/* Actions */}
                <div className="header-actions">

                    {/* Guest user */}
                    {!isLoggedIn && (
                        <button
                            className="btn-outline"
                            onClick={() => navigate("/login")}
                        >
                            Login / Sign Up
                        </button>
                    )}

                    {/* Logged-in user */}
                    {isLoggedIn && (
                        <div className="profile-box">
                            <img
                                src={avatar}
                                alt="Profile"
                                className="profile-icon"
                                onClick={() => setOpen(!open)}
                            />

                            {open && (                 /* ✅ correct condition */
                                <div className="profile-dropdown">
                                    <a onClick={() => navigate("/profile")}>
                                        My Profile
                                    </a>
                                    <a onClick={() => navigate("/userstories")}>
                                        My Stories
                                    </a>
                                    <a onClick={logout}>
                                        Logout
                                    </a>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </header>
    );
}

export default Header;
