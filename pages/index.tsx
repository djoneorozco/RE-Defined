import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import '../styles/style.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>RE-DEFINED — Listing Coach</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="glow-wrapper">
        <div className="quiz-container">
          <h1>RE-DEFINED</h1>
          <p className="tagline">
            Your AI Listing Coach — Unlock the Perfect Buyer Archetype
          </p>

          <section id="customFields">
            <h2>Tell Us About Your Listing</h2>
            <label>
              City & Neighborhood:
              <input type="text" id="city" placeholder="e.g. San Antonio, Lackland area" />
            </label>
            <label>
              Listing Price ($):
              <input type="number" id="price" placeholder="e.g. 275000" />
            </label>
            <label>
              Biggest Selling Challenge:
              <input type="text" id="challenge" placeholder="e.g. needs repairs, unique buyer" />
            </label>
            <button id="startQuizBtn">Find Best Buyer Type</button>
          </section>

          <section id="quizSection" style={{ display: 'none' }}>
            <h2 id="question">Loading question...</h2>
            <div id="answers" className="answers"></div>
            <div id="progress" className="progress"></div>
          </section>

          <div className="cta">
            <p>Powered by RealtySaSS</p>
          </div>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <Link href="/home">
              <button style={{
                padding: '12px 24px',
                backgroundColor: '#6c00ff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Go to HomeScreen →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
