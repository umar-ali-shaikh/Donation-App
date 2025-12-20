import { useState } from 'react'
import '../style.css'

function Stories() {
    const stories = [
        { id: 1, title: 'The Little Library That Grew', img: 'https://source.unsplash.com/500x400/?community,people' },
        { id: 2, title: 'A Bridge Built with Compassion', img: 'https://source.unsplash.com/500x400/?family,care' },
        { id: 3, title: 'Healing Paws, Loving Hearts', img: 'https://source.unsplash.com/500x400/?dog,love' },
        { id: 4, title: 'Helping Hands', img: 'https://source.unsplash.com/500x400/?helping,kindness' },
        { id: 5, title: 'Small Acts, Big Change', img: 'https://source.unsplash.com/500x400/?charity,smile' },
        { id: 6, title: 'Together We Rise', img: 'https://source.unsplash.com/500x400/?volunteer,people' }
    ]

    return (

        <>

            <div className="intro-page">

                {/* Hero */}
                <section className="intro-hero">
                    <div className="container intro-hero-content">
                        <h1>We Celebrate Kindness</h1>
                        <p className="intro-sub">
                            A platform built to share real stories, real humans, and real acts of kindness.
                        </p>
                    </div>
                </section>

                {/* Story */}
                <section className="intro-story container fade-in">
                    <h2>Story of the Platform</h2>
                    <p>
                        Our journey began with a simple belief — small acts of kindness can create
                        powerful change. Humans of Kindness exists to shine a light on stories that
                        inspire compassion, connection, and hope.
                    </p>
                </section>

                {/* Team */}
                <section className="intro-team container">
                    <h2>Team Section</h2>

                    <div className="team-grid">
                        {[
                            { name: 'Founder', role: 'Founder' },
                            { name: 'Rayane Uss', role: 'Community Lead' },
                            { name: 'Harliner', role: 'Community Lead' },
                            { name: 'Bonlune', role: 'Program Lead' },
                            { name: 'Sam Ame', role: 'Community Lead' }
                        ].map((member, index) => (
                            <div className="team-card card hover-scale" key={index}>
                                <img
                                    src={`https://i.pravatar.cc/120?img=${index + 5}`}
                                    alt={member.name}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Impact */}
                <section className="intro-impact container">
                    <div className="impact-grid">
                        <div className="impact-card card">
                            <h3>10,000+</h3>
                            <p>Total Donors</p>
                        </div>
                        <div className="impact-card card">
                            <h3>500+</h3>
                            <p>Stories Written</p>
                        </div>
                        <div className="impact-card card">
                            <h3>₹1.5 Million+</h3>
                            <p>Money Donated</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="intro-cta">
                    <p>Your story of kindness is waiting to be shared.</p>
                    <button className="btn btn-primary">
                        <a href="/donation">
                            Join the Movement
                        </a>
                    </button>
                </section>

            </div>

            <div className="stories-page">

                {/* Hero */}
                <section className="stories-hero container fade-in">
                    <h1>
                        Real Stories. Real Humans. <br /> Real Kindness.
                    </h1>

                    <div className="stories-filters">
                        <button className="filter active">Latest</button>
                        <button className="filter">Trending</button>
                        <button className="filter">Most Heartfelt</button>
                    </div>
                </section>

                {/* Stories Grid */}
                <section className="stories-grid-section container">
                    <div className="stories-grid">
                        {stories.map(story => (
                            <div className="story-card card hover-scale" key={story.id}>
                                <img src={story.img} alt={story.title} />
                                <div className="story-content">
                                    <h3>{story.title}</h3>
                                    <p>
                                        A heartfelt story celebrating compassion, humanity, and small
                                        acts that create big change.
                                    </p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="load-more">
                        <button className="btn btn-primary">Load More Stories</button>
                    </div>
                </section>

            </div>

        </>
    )
}

export default Stories
