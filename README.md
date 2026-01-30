# Bridge Basketball 🏀

> A full-stack web application for managing league schedules, standings, player stats, and game videos for a recreational basketball league.

Bridge Basketball is a web application built for players in the Bridge Basketball League to easily access league information in one centralized place. Instead of relying on scattered group chats and messages, players can quickly check schedules, standings, individual stats, and game videos.

This project was one of my early end‑to‑end engineering builds and played a big role in building my confidence as a developer creating software that real people actively use.

---

## Deployed Website

~~https://basketball.nlvcbridge.com~~ --> https://bridgebasketball.onrender.com

---

## 🚀 Features

* **Game Schedule** – View upcoming games and league updates
* **Team Standings** – Track rankings and season progress
* **Player Stats** – See individual performance and progression over time
* **Box Scores** – Review detailed game-by-game statistics and results
* **Game Videos** – Watch recorded games directly on the platform

---

## 🛠 Tech Stack

**Frontend**

* React
* JavaScript (ES6+)
* HTML5 / CSS3
* Bootstrap

**Backend**

* Node.js
* Express.js
* MongoDB (Mongoose)

**Other**

* RESTful APIs
* Git & GitHub
* Render (Deployment)

---

## 🧠 Why I Built This

I started the Bridge Basketball League myself, which meant I also felt the pain of managing schedules, stats, and updates across multiple platforms. Players were constantly waiting for updates or asking the same questions in group chats.

I built Bridge Basketball to solve a real problem: creating a single source of truth that players could rely on. Because I was also running the league and using the product daily, I was able to gather direct feedback, prioritize features that actually mattered to players, and iterate quickly based on real usage.

---

## ⚙️ Local Setup

### Prerequisites

* Node.js (v16 recommended)
* MongoDB (local or Atlas)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bridgebasketball.git

# Install server dependencies
npm install

# Install client dependencies
cd client
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```
MONGODB_URI=mongodb://localhost/bridgebasketball
```

### Run the App

```bash
# From root directory
npm run dev
```

---

## 🔮 Future Improvements

* Authentication and user accounts
* Persisting detailed box score and player stats in the database to enable long-term historical tracking
* Advanced stat tracking and analytics derived from stored data (efficiency metrics, trends, and player comparisons)
* Admin dashboard for managing games and teams, and stat entry
* Mobile-first UI improvements

---

## 🙌 Acknowledgements

Built for and inspired by the Bridge Basketball League and its players.
