# 🚀 Scramjet Proxy Runner

A complete proxy server implementation built with Scramjet by Mercury Workshop, featuring an interactive HTML interface for easy setup and monitoring.

## 📋 Features

- ✅ **Web-Based Interface**: User-friendly HTML/CSS/JavaScript UI
- 🔒 **Secure Proxy**: Advanced interception-based proxy system
- ⚡ **Fast Performance**: Optimized request handling
- 🤖 **CAPTCHA Support**: Handles modern CAPTCHA verification
- 📦 **Open Source**: Full source code available on GitHub
- 🔧 **Easy Configuration**: Simple form-based setup
- 📊 **Live Logging**: Real-time request/response monitoring

## 🎯 Quick Start

### Option 1: Run in Browser (No Installation)

1. Open `index.html` directly in your web browser
2. Enter the target URL you want to proxy
3. Click "Start Proxy"
4. Watch the live logs as requests are processed

### Option 2: Run with Node.js Server

```bash
# Install dependencies (no external dependencies required)
npm install

# Start the server
npm start
# or
node server.js
```

The server will be available at `http://localhost:3000`

## 📖 Usage

### Browser Interface
1. **Target URL**: Enter the website you want to access through the proxy
2. **Proxy Mode**: Choose between HTTP, HTTPS, or Auto Detect
3. **Request Type**: Select GET, POST, or HEAD
4. **Start Proxy**: Click to initiate the connection
5. **Monitor**: Watch the output box for real-time status updates

### API Endpoints

```
GET  /                    - Serve the main HTML interface
POST /api/proxy           - Handle proxy requests
GET  /api/health          - Health check endpoint
GET  /api/fetch?url=...   - Fetch URL through proxy
```

## 🛠️ Configuration

### Server Port
By default, the server runs on port `3000`. To use a different port:

```bash
PORT=8080 npm start
```

### Environment Variables
- `PORT`: Server port (default: 3000)

## 📁 Project Structure

```
scramjet-proxy-runner/
├── index.html          # Main web interface
├── server.js           # Node.js server backend
├── package.json        # Project configuration
├── README.md           # This file
├── INSTALLATION.md     # Setup guide
└── .gitignore          # Git ignore patterns
```

## 🔗 Related Projects

- **Scramjet**: https://github.com/MercuryWorkshop/scramjet
- **Mercury Workshop**: https://mercurywork.shop/
- **Titanium Network**: https://docs.titaniumnetwork.org/

## 💡 How It Works

1. **Client Request**: User enters URL in the web interface
2. **Proxy Processing**: Server intercepts and rewrites the request
3. **Content Delivery**: Response is processed and delivered back to the client
4. **Sandbox Execution**: Content runs in a secure sandbox environment
5. **Real-time Logging**: All operations are logged and displayed in the UI

## 🔐 Security Features

- End-to-end encryption
- Request/response validation
- CORS protection
- Input sanitization
- Error handling and logging

## ⚙️ Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js (HTTP/HTTPS)
- **Protocol**: HTTP/HTTPS with custom headers
- **Logging**: Real-time event streaming

## 📝 Request Handling Flow

```
User Input
    ↓
Form Validation
    ↓
Proxy Server
    ↓
Request Processing
    ↓
Content Rewriting
    ↓
Response Delivery
    ↓
Live Display
```

## 🚀 Advanced Usage

### Custom Headers
The proxy adds custom headers to identify Scramjet traffic:
```
X-Scramjet-Proxy: true
```

### Error Handling
All errors are caught and displayed in the output box with detailed messages including:
- Timestamp
- Error type
- Error description
- Recovery suggestions

## 📊 Monitoring

The interface provides real-time monitoring:
- Connection status
- Request/response times
- Data transfer status
- CAPTCHA verification status
- System health indicators

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Report bugs
2. Suggest features
3. Submit pull requests
4. Improve documentation

## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## ⚠️ Disclaimer

This proxy tool is provided for educational and legitimate use cases only. Users are responsible for:
- Complying with local laws and regulations
- Respecting website terms of service
- Not using for unauthorized access
- Protecting user privacy

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Use a different port
PORT=8080 npm start
```

### CORS Errors
The server automatically handles CORS. If you still get errors, ensure:
- Server is running
- URL is correct
- Firewall isn't blocking requests

### CAPTCHA Not Loading
Some CAPTCHAs require JavaScript execution. The proxy supports this, but ensure:
- JavaScript is enabled
- Browser is up to date
- Network connection is stable

## 📞 Support

For issues and support:
- GitHub Issues: https://github.com/immortal9937-stack/scramjet-proxy-runner/issues
- Scramjet Docs: https://docs.titaniumnetwork.org/proxies/scramjet/

## 🙏 Acknowledgments

Built with Scramjet technology by Mercury Workshop. Special thanks to the Titanium Network community.

---

**Happy Proxying! 🚀**
