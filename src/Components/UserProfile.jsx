import { useState } from 'react';
import '../style.css';

function Profile() {

    const [profileImage, setProfileImage] = useState(
        localStorage.getItem("profileImage") ||
        "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
    );

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // ✅ File type validation
        if (!file.type.startsWith("image/")) {
            alert("Please upload an image file");
            return;
        }

        // ✅ File size validation (2MB)
        if (file.size > 2 * 1024 * 1024) {
            alert("Image size should be under 2MB");
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            localStorage.setItem("profileImage", reader.result);

            // 🔥 Header ko notify karo
            window.dispatchEvent(new Event("profileImageUpdated"));

            setProfileImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="profile-page">

            {/* Profile Info */}
            <section className="profile-info container card fade-in">

                <div className="profile-avatar-wrapper">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="profile-avatar"
                    />

                    <label htmlFor="avatarUpload" className="edit-avatar">
                        ✏️
                    </label>

                    <input
                        type="file"
                        id="avatarUpload"
                        accept="image/*"
                        hidden
                        onChange={handleImageChange}
                    />
                </div>

                <h1>Amelia Sharma</h1>
                <p className="profile-bio">
                    Compassion advocate, nature lover, and believer in small miracles
                </p>

                <button className="btn btn-primary">Edit Profile</button>
            </section>

            {/* Impact Metrics */}
            <section className="impact-section container">
                <h2>Impact Metrics</h2>

                <div className="impact-grid">
                    <div className="impact-card card">
                        <h3>14</h3>
                        <p>Total Donations</p>
                    </div>

                    <div className="impact-card card">
                        <h3>3</h3>
                        <p>Stories Published</p>
                    </div>

                    <div className="impact-card card">
                        <h3>₹ 4,500+</h3>
                        <p>Total Impact</p>
                    </div>
                </div>
            </section>

            {/* Stories */}
            <section className="stories-section container">
                <h2>My Stories of Kindness</h2>

                <div className="stories-grid">
                    {[1, 2, 3].map((item) => (
                        <div className="story-card card hover-scale" key={item}>
                            <img
                                src="https://source.unsplash.com/400x300/?nature,help"
                                alt="Story"
                            />
                            <div className="story-content">
                                <h3>The Little Library That Grew</h3>
                                <p>Published: Oct 2024</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Profile;
