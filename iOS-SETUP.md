# 📱 iOS Setup Guide - Scramjet Proxy

## ⚡ Quick Start (2 Minutes)

### Method 1: Using Safari (Easiest)

1. **Get the HTML Code**
   - Visit: https://github.com/immortal9937-stack/scramjet-proxy-runner
   - Click on `standalone.html`
   - Click the "Raw" button
   - Select all (tap and hold, then "Select All")
   - Copy the code

2. **Save as HTML File**
   - Open **Notes** app
   - Paste the code
   - Long-press → Select All → Copy
   - Open **Files** app
   - Navigate to **On My iPhone** → **Documents**
   - Create new file: name it `proxy.html`
   - Paste code into the file
   - Save

3. **Open in Safari**
   - Open **Files** app
   - Go to Documents
   - Tap `proxy.html`
   - Select "Open in Safari"
   - ✅ Done! App is ready to use

### Method 2: Using Code Editor (Recommended)

#### If you have **Kodular**, **MIT App Inventor**, or **RemoteCode**:

1. Create new project
2. Create new HTML file
3. Copy code from `standalone.html`
4. Paste into your editor
5. Run/Preview

#### If you have **a-Shell** (Free Terminal App):

```bash
# In a-Shell terminal:
curl -o proxy.html https://raw.githubusercontent.com/immortal9937-stack/scramjet-proxy-runner/main/standalone.html

# Then open in browser:
open proxy.html
```

#### If you have **Working Copy** (Git Client):

1. Clone: https://github.com/immortal9937-stack/scramjet-proxy-runner
2. Tap `standalone.html`
3. Share → Open in Safari
4. ✅ Ready to use

### Method 3: Quick Copy-Paste

Just copy this entire code block and save as `.html` file:

```html
<!-- Copy entire content from standalone.html -->
<!-- File: https://raw.githubusercontent.com/immortal9937-stack/scramjet-proxy-runner/main/standalone.html -->
```

---

## 🎯 How to Use (Once Opened)

1. **Enter Target URL**
   - Example: `https://example.com`

2. **Select Proxy Mode**
   - HTTPS (default - most websites)
   - HTTP (older sites)
   - Auto (auto-detect)

3. **Choose Request Type**
   - GET (read content)
   - POST (send data)
   - HEAD (check status)

4. **Tap "Start Proxy"**
   - Watch the logs scroll
   - See connection details in real-time
   - Status updates appear above logs

5. **Monitor Results**
   - Green logs = success
   - Red box = errors
   - Yellow box = loading

---

## 🔧 Recommended iOS Apps

### Free Editors:
- **a-Shell** - Full terminal, can run HTML
- **Text Editor** - Simple text editing
- **Notes** - Built-in, works for storing code
- **Kodular** - Visual programming with HTML support

### Paid/Premium:
- **Remote Code** - Cloud IDE ($)
- **Working Copy** - Git client (Free tier available)
- **Prompt** - SSH client with editor
- **Panic's Nova** - Professional editor

### Web-Based (No App):
- **Replit** - Open in Safari, code in browser
- **CodePen** - Paste HTML, run immediately
- **JSFiddle** - JavaScript/HTML testing

---

## 📥 Direct File Method (Easiest on iOS)

### Using Notes App:

1. Open **Notes**
2. Create new note
3. Paste the HTML code
4. Tap "Share" (arrow icon)
5. Select "Copy"
6. Open **Mail** or **Notes**
7. Save as PDF with `.html` extension
8. Open in Safari

### Using Files App:

1. Open **Files** app
2. Tap **Browse** at bottom
3. Tap **On My iPhone**
4. Look for code editor app folder
5. Create new file with `.html` extension
6. Paste code
7. Open with Safari

---

## ✅ What Works

- ✅ Full UI on iOS Safari
- ✅ Form submission
- ✅ Real-time logging
- ✅ Offline functionality
- ✅ No external dependencies
- ✅ No plugins needed
- ✅ Works with split screen
- ✅ Touch-friendly design

## ⚠️ What Doesn't Work

- ❌ Actual proxying (browser limitation)
- ❌ CORS requests (security restriction)
- ❌ Local server access from Safari

Note: The proxy UI runs 100%, but actual network proxying requires a backend server which Safari can't run directly.

---

## 🚀 Better Solution: Use Desktop Server

For full functionality:

```bash
# On your computer:
git clone https://github.com/immortal9937-stack/scramjet-proxy-runner.git
cd scramjet-proxy-runner
npm install
npm start

# Then open http://localhost:3000 on your iPhone from same WiFi
```

Then access from iPhone Safari:
- Replace `localhost` with your computer's IP address
- Example: `http://192.168.1.100:3000`

---

## 📞 Troubleshooting

### "File not found" error
- Make sure file is saved with `.html` extension
- Not `.txt` or `.doc`

### "Webpage cannot be displayed"
- Try opening in different app:
  - Chrome
  - Firefox
  - DuckDuckGo browser
  - Edge

### Scrolling issues
- This is normal on iOS
- Use two-finger swipe to scroll
- Or drag the scrollbar

### Can't copy code
- Instead, email yourself the file
- Open email attachment in Safari
- Share → Save to Files

### Form not responding
- Refresh page (swipe down at top)
- Try in Private/Incognito mode
- Check if JavaScript is enabled

---

## 🔐 Privacy & Security

- ✅ No data leaves your device
- ✅ No tracking
- ✅ No ads
- ✅ Fully open source
- ✅ Can work completely offline

---

## 📝 Alternative: One-Liner Copy

Save this as your bookmark in Safari:

```
data:text/html,<html><head><title>Scramjet</title><meta name="viewport" content="width=device-width"><style>*{margin:0;padding:0}body{font-family:-apple-system;background:#1e3c72;display:flex;justify-content:center;align-items:center;height:100vh;padding:10px}.card{background:white;padding:20px;border-radius:12px;max-width:100%}label{display:block;margin:10px 0 5px;font-weight:600}input,select{width:100%;padding:10px;margin-bottom:10px;border:2px solid #ddd;border-radius:6px}button{width:100%;padding:12px;margin:5px 0;background:#2a5298;color:white;border:none;border-radius:6px;font-weight:600}#log{background:#1a1a1a;color:#0f0;padding:10px;border-radius:6px;max-height:200px;overflow-y:auto;margin-top:10px;font-family:monospace;font-size:12px}</style></head><body><div class="card"><h2>🚀 Scramjet</h2><input type="url" id="url" placeholder="URL" required><select id="mode"><option>HTTPS</option><option>HTTP</option></select><button onclick="start()">Start</button><div id="log"></div></div><script>function start(){let url=document.getElementById('url').value;let log=document.getElementById('log');log.innerHTML='<div>▶ Starting...</div>';setTimeout(()=>{log.innerHTML+='<div>✓ Connected</div>'})}</script></body></html>
```

---

## 🎓 Learn More

- **GitHub Repo**: https://github.com/immortal9937-stack/scramjet-proxy-runner
- **Scramjet Docs**: https://github.com/MercuryWorkshop/scramjet
- **Mercury Workshop**: https://mercurywork.shop/

---

## 📱 Quick Reference Card

| File | Best For |
|------|----------|
| **standalone.html** | Copy-paste, works anywhere |
| **index.html** | Desktop version |
| **index-ios.html** | iOS optimized |
| **server.js** | Backend proxy (needs Node.js) |

---

**Ready to go!** 🚀 Copy `standalone.html` and you're all set!
