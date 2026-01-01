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
        setIsLoggedIn(false);
        navigate("/login", { replace: true });
    };
    const [menuOpen, setMenuOpen] = useState(false);



    return (
        <header className="app-header">
            <div className="container header-inner">

                {/* Logo */}
                <div className="header-logo">
                    <span className="heart">❤️</span>
                    <span className="brand">Humans of Kindness</span>
                </div>


                <div
                    className={`header-manu-icon ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="fa-solid fa-bars"></i>
                </div>

                {/* Navigation */}
                <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
                    <a href="/home" onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="/about" onClick={() => setMenuOpen(false)}>About Us</a>
                    <a href="/stories" onClick={() => setMenuOpen(false)}>Stories</a>
                    <a href="/donation" onClick={() => setMenuOpen(false)}>Donate</a>
                    <a href="/contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
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
