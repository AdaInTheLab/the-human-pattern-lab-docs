import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import MascotGrid from '@site/src/components/MascotGrid/MascotGrid';
import { mascots } from '@site/src/data/mascots';

const mascotCardStyle = {
    borderRadius: '1rem',
    padding: '1rem',
    background: 'rgba(15,23,42,0.9)',
    border: '1px solid rgba(148,163,184,0.4)',
    boxShadow: '0 12px 30px rgba(15,23,42,0.9)',
    height: '100%',
};

const mascotNameStyle = {
    fontWeight: 600,
    fontSize: '1rem',
    marginBottom: '0.25rem',
};

const mascotRoleStyle = {
    fontSize: '0.8rem',
    opacity: 0.85,
    marginBottom: '0.5rem',
};

const mascotDescStyle = {
    fontSize: '0.8rem',
    lineHeight: 1.5,
    opacity: 0.9,
};

export default function Home() {
    return (
        <Layout
            title="The Human Pattern Lab"
            description="Cosmic documentation for patterns, mascots, and multidisciplinary chaos."
        >
            <main
                style={{
                    padding: '4rem 1rem 3rem',
                    background: 'radial-gradient(circle at top, #1e1b4b 0%, #020617 70%)',
                    color: 'white',
                }}
            >
                <div className="container">
                    {/* HERO / INTRO */}
                    <section>
                        <h1
                            style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                background: 'linear-gradient(90deg,#22d3ee,#a855f7,#34d399)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                marginBottom: '1rem',
                            }}
                        >
                            Welcome to the Lab Archives
                        </h1>

                        <p
                            style={{
                                maxWidth: 720,
                                fontSize: '1.2rem',
                                lineHeight: 1.6,
                                color: 'rgba(226,232,240,0.95)',
                            }}
                        >
                            This portal contains the official documentation for the Human Pattern Lab—
                            an institution dedicated to mapping human weirdness, emotional weather,
                            emergent patterns, and the lore of our beloved mascots.
                        </p>

                        <div style={{ marginTop: '2rem' }}>
                            <Link className="button button--primary button--lg" to="/getting-started">
                                Enter the Docs →
                            </Link>
                        </div>
                    </section>

                    {/* WHAT LIVES HERE CARD */}
                    <section style={{ marginTop: '3.5rem' }}>
                        <div
                            style={{
                                padding: '2rem',
                                borderRadius: '1.5rem',
                                background:
                                    'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.95))',
                                border: '1px solid rgba(148,163,184,0.4)',
                                boxShadow: '0 22px 50px rgba(15,23,42,0.95)',
                            }}
                        >
                            <h2 style={{ marginBottom: '0.75rem', fontSize: '1.4rem' }}>📚 Areas of Study</h2>
                            <p
                                style={{
                                    fontSize: '0.95rem',
                                    color: 'rgba(226,232,240,0.9)',
                                    marginBottom: '0.75rem',
                                }}
                            >
                                Use the documentation to navigate the Lab&apos;s systems and stories:
                            </p>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.95rem' }}>
                                <li>🧬 Core Architecture & system maps</li>
                                <li>🐾 Mascot ecosystems & roles</li>
                                <li>🌦 Emotional Weather Forecasting units</li>
                                <li>🦝 Raccoon Behavioral Sciences experiments</li>
                                <li>🎨 Design system foundations & UI patterns</li>
                            </ul>
                        </div>
                    </section>

                    {/* MASCOT ROW */}
                    <section style={{ marginTop: '3.5rem' }}>
                        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>🐾 Meet the Mascots</h2>

                        <p
                            style={{
                                fontSize: '0.95rem',
                                color: 'rgba(226,232,240,0.9)',
                                maxWidth: 720,
                                marginBottom: '1.75rem',
                            }}
                        >
                            These are the unofficial faculty members of the Lab. Many docs and systems reference
                            them, so this is your quick orientation to who&apos;s who in the chaos.
                        </p>

                        <MascotGrid mascots={mascots} maxImageWidth={260} />

                    </section>
                </div>
            </main>
        </Layout>
    );
}
