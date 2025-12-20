import "../style.css";

const donationSummary = {
  totalAmount: 4500,
  totalDonations: 4,
  causesSupported: 3,
};

function UsersStories() {
  return (
    <div className="my-stories-page">

      {/* HERO SECTION */}
      <section className="my-stories-hero">
        <h1>My Stories of Kindness</h1>
        <p>
          Small actions. Real impact. A journey of compassion 💜
        </p>
      </section>

      {/* USER IMPACT SUMMARY */}
      <section className="my-stories-summary container">
        <div className="summary-card">
          <h3>₹ {donationSummary.totalAmount}</h3>
          <p>Total Donated</p>
        </div>

        <div className="summary-card">
          <h3>{donationSummary.totalDonations}</h3>
          <p>Acts of Kindness</p>
        </div>

        <div className="summary-card">
          <h3>{donationSummary.causesSupported}</h3>
          <p>Causes Supported</p>
        </div>
      </section>

      {/* USER STORY / MESSAGE */}
      <section className="user-story container card">
        <h2>Why I Chose Kindness</h2>
        <p>
          Giving back has always been close to my heart. Through Humans of Kindness,
          I found a way to support meaningful causes and be part of real change.
        </p>
        <p>
          Every contribution I made wasn’t just a donation — it was a reminder that
          empathy can transform lives.
        </p>
      </section>

      {/* IMPACT HIGHLIGHTS */}
      <section className="impact-highlights container">
        <div className="impact-box">
          🌱 Helped provide education essentials to children
        </div>
        <div className="impact-box">
          🍲 Supported food drives for local communities
        </div>
        <div className="impact-box">
          🏥 Contributed to emergency medical care
        </div>
      </section>

      {/* COMMUNITY ENGAGEMENT */}
      <section className="community-section container card">
        <h2>Encourage Others</h2>
        <p>
          Your words can inspire someone to take their first step towards kindness.
        </p>

        <textarea
          placeholder="Leave a message to encourage others to donate..."
          rows="4"
        />

        <button className="btn-primary">
          Post Encouragement 💜
        </button>
      </section>

      {/* CALL TO ACTION */}
      <section className="my-stories-cta">
        <h3>
          Inspired by this journey?
        </h3>
        <p>
          Join the movement and create your own story of kindness.
        </p>

        <button className="btn-primary">
          <a href="/donation">
            Donate Now
          </a>
        </button>
      </section>

    </div>
  );
}

export default UsersStories;
