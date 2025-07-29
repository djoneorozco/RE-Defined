<!-- /screens/HomeScreen/index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RE-DEFINED HomeScreen</title>
  <link rel="stylesheet" href="../../style.css" />
  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background-color: #000;
      color: white;
    }
    .container {
      display: flex;
      height: 100vh;
    }
    aside, main {
      padding: 20px;
    }
    aside {
      width: 250px;
      border-right: 1px solid #333;
    }
    main {
      flex: 1;
      overflow-y: auto;
    }
    .sidebar-section {
      margin-bottom: 24px;
    }
    .post {
      background: #111;
      padding: 16px;
      margin-bottom: 20px;
      border-radius: 12px;
    }
    .post img.avatar {
      border-radius: 50%;
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }
    .post .header {
      display: flex;
      justify-content: space-between;
      color: #ccc;
      font-size: 14px;
    }
    .post .stats {
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      color: #888;
      font-size: 14px;
    }
    .post .content {
      margin: 10px 0;
    }
    .post img.main-img {
      width: 100%;
      max-height: 300px;
      object-fit: cover;
      border-radius: 10px;
    }
    .rightbar {
      width: 250px;
      border-left: 1px solid #333;
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Left Sidebar -->
    <aside>
      <div class="sidebar-section"><strong>🏠 Home</strong></div>
      <div class="sidebar-section">❤️ Notifications</div>
      <div class="sidebar-section">💬 Messages</div>
      <div class="sidebar-section">🔖 Bookmarks</div>
      <div class="sidebar-section">👤 Profile</div>
      <div class="sidebar-section">✨ Explore</div>
      <div class="sidebar-section" style="position: absolute; bottom: 20px; color: #555;">Kohaku</div>
    </aside>

    <!-- Main Feed -->
    <main>
      <h2>For you</h2>

      <!-- Post 1 -->
      <div class="post">
        <div class="header">
          <div>
            <img src="/images/avatar-elena.jpg" class="avatar" alt="Elena" />
            <span><strong>Elena</strong> • 01:12 AM</span>
          </div>
          <div>⋯</div>
        </div>
        <div class="content">
          Come and Try e-SaSS — our Behavior Science-designed, AI-Powered Social Media Platform for Exhilarating but Safe fun!
        </div>
        <img src="/images/elena-post.jpg" class="main-img" alt="Post by Elena" />
        <div class="stats">
          <span>❤️ 59</span>
          <span>💬 16</span>
          <span>🔁 24</span>
        </div>
      </div>

      <!-- Post 2 -->
      <div class="post">
        <div class="header">
          <div>
            <img src="/images/avatar-moyo.jpg" class="avatar" alt="Moyo Shiro" />
            <span><strong>Moyo Shiro</strong> • 09:00 AM</span>
          </div>
          <div>⋯</div>
        </div>
        <div class="content">
          Just launched my new portfolio website! 🚀 Check out these 15 standout examples of creative, sleek, and interactive portfolio designs that inspired me. #WebDesign
        </div>
        <!-- Optional image: if you have another dummy image -->
        <!-- <img src="/images/moyo-post.jpg" class="main-img" alt="Post by Moyo" /> -->
        <div class="stats">
          <span>❤️ 62</span>
          <span>💬 23</span>
          <span>🔁 45</span>
        </div>
      </div>
    </main>

    <!-- Right Sidebar -->
    <div class="rightbar">
      <strong>Who to follow</strong>
      <ul style="margin-top: 10px; line-height: 1.6;">
        <li>George ✅</li>
        <li>Nettie Schuster ✅</li>
        <li>Mrs. Lola Rohan ✅</li>
        <li>James ➕</li>
        <li>Brandi Padberg ➕</li>
      </ul>
    </div>
  </div>
</body>
</html>
