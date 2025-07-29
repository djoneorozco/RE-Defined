//# ===========================================
//# SaSStisfied Homepage (index.tsx) - Ivy 2.99 Polished
//# Description: Modernized UX using your template's styles
//# ===========================================

import React from 'react';
import styles from '@/styles/HomeScreen.module.sass';
import common from '@/styles/common.sass';
import layout from '@/styles/layout.css';
import page from '@/styles/page.css';

export default function HomePage() {
  return (
    <div className={`${styles.main} ${common.pageWrap}`}>
      {/* Sidebar */}
      <aside className={common.sidebar}>
        <div className={common.logo}>Kohaku</div>
        <nav className={common.navList}>
          <a className={common.navItem + ' active'}>Home</a>
          <a className={common.navItem}>Notifications</a>
          <a className={common.navItem}>Messages</a>
          <a className={common.navItem}>Bookmarks</a>
          <a className={common.navItem}>Profile</a>
          <a className={common.navItem}>Explore</a>
        </nav>
        <button className={common.postBtn}>Post</button>
      </aside>

      {/* Feed Area */}
      <main className={common.feedArea}>
        <div className={common.feedCard}>
          <h2>Welcome to <span className={common.brandText}>RE-DEFINED</span></h2>
          <p>Your feed will appear here soon...</p>
        </div>

        {/* Elena Demo Post */}
        <div className={common.postCard}>
          <div className={common.postHeader}>
            <img src="/avatars/elena.jpg" alt="Elena avatar" className={common.avatar} />
            <div>
              <strong>Elena</strong>
              <div className={common.timestamp}>01:12 AM</div>
            </div>
          </div>
          <p className={common.postText}>
            Come and Try e-SaSS — our Behavior Science designed, A.I Powered Social Media Platform
            for Exhilarating but Safe fun!
          </p>
          <img src="/images/elena-podium.png" className={common.postImage} alt="Elena speaking" />
          <div className={common.postStats}>
            <span>❤️ 59</span>
            <span>💬 16</span>
            <span>🔁 24</span>
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className={common.rightSidebar}>
        <div className={common.card}>
          <h4>Who to follow</h4>
          <div className={common.followList}>
            <div>
              <strong>Leila</strong>
              <span>Emotional Tantric Bonding</span>
            </div>
            <div>
              <strong>Odalys</strong>
              <span>Dominant Latina Temptress</span>
            </div>
            <div>
              <strong>Violet</strong>
              <span>Sensual Edge Hacker</span>
            </div>
          </div>
        </div>
        <div className={common.card}>
          <h4>Trending topics</h4>
          <ul>
            <li>#AInRomance</li>
            <li>#DarkDesire</li>
            <li>#EmotionalIntelligence</li>
            <li>#SaSStisfied</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
