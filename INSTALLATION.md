# 📦 Installation & Setup Guide

## Method 1: Direct Browser Usage (No Installation)

### Requirements
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection

### Steps
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start using the proxy immediately!

**Advantages:**
- ✅ No installation needed
- ✅ No dependencies to install
- ✅ Works offline for UI
- ✅ Zero configuration

## Method 2: Node.js Server (Full Featured)

### Requirements
- Node.js v14.0.0 or higher
- npm or yarn package manager
- Terminal/Command Prompt access

### Installation Steps

1. **Clone the Repository**
```bash
git clone https://github.com/immortal9937-stack/scramjet-proxy-runner.git
cd scramjet-proxy-runner
```

2. **Install Dependencies**
```bash
npm install
```

3. **Start the Server**
```bash
npm start
```

4. **Access the Proxy**
Open your browser and go to:
```
http://localhost:3000
```

## Troubleshooting

### Port Already in Use
```bash
PORT=8080 npm start
```

### CORS Errors
The server automatically handles CORS. If issues persist, ensure:
- Server is running
- URL is correct
- Firewall isn't blocking requests

---

**Installation Complete! 🎉**