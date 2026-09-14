/**
 * Scramjet Proxy Server
 * Mercury Workshop - Advanced Web Proxy
 */

const http = require('http');
const https = require('https');
const url = require('url');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

class ScramjetProxyServer {
    constructor(port) {
        this.port = port;
        this.server = http.createServer((req, res) => this.handleRequest(req, res));
    }

    handleRequest(req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

        if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
            return;
        }

        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;

        console.log(`[${new Date().toISOString()}] ${req.method} ${pathname}`);

        if (pathname === '/' || pathname === '/index.html') {
            this.serveIndex(res);
        } else if (pathname === '/api/proxy') {
            this.handleProxyRequest(req, res);
        } else if (pathname === '/api/health') {
            this.handleHealthCheck(res);
        } else if (pathname.startsWith('/api/fetch')) {
            this.handleFetch(req, res, parsedUrl.query);
        } else {
            this.serve404(res);
        }
    }

    serveIndex(res) {
        const indexPath = './index.html';
        
        fs.readFile(indexPath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(data);
        });
    }

    handleProxyRequest(req, res) {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const data = JSON.parse(body);
                const targetUrl = data.url;
                const method = data.method || 'GET';

                if (!targetUrl) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'URL is required' }));
                    return;
                }

                this.proxyRequest(targetUrl, method, res);
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }

    proxyRequest(targetUrl, method, res) {
        const parsedUrl = url.parse(targetUrl);
        const protocol = parsedUrl.protocol === 'https:' ? https : http;

        const options = {
            method: method,
            headers: {
                'User-Agent': 'Scramjet/1.0 (Mercury Workshop)',
            }
        };

        console.log(`[PROXY] Fetching: ${targetUrl}`);

        const proxyReq = protocol.request(targetUrl, options, (proxyRes) => {
            let responseBody = '';

            proxyRes.on('data', chunk => {
                responseBody += chunk;
            });

            proxyRes.on('end', () => {
                res.writeHead(200, {
                    'Content-Type': proxyRes.headers['content-type'] || 'text/plain',
                    'X-Scramjet-Proxy': 'true'
                });
                res.end(JSON.stringify({
                    success: true,
                    statusCode: proxyRes.statusCode,
                    content: responseBody,
                    timestamp: new Date().toISOString()
                }));
            });
        });

        proxyReq.on('error', (err) => {
            console.error(`[ERROR] Proxy request failed: ${err.message}`);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                success: false,
                error: err.message,
                timestamp: new Date().toISOString()
            }));
        });

        proxyReq.end();
    }

    handleHealthCheck(res) {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
            status: 'healthy',
            service: 'Scramjet Proxy',
            version: '1.0.0',
            timestamp: new Date().toISOString()
        }));
    }

    handleFetch(req, res, query) {
        const targetUrl = query.url;

        if (!targetUrl) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'URL parameter required' }));
            return;
        }

        this.proxyRequest(targetUrl, 'GET', res);
    }

    serve404(res) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }

    start() {
        this.server.listen(this.port, () => {
            console.log(`
╔══════════════════════════════════════════╗
║   Scramjet Proxy - Mercury Workshop     ║
║   🚀 Server Running on Port ${this.port}       ║
╚══════════════════════════════════════════╝

📍 Access the proxy at: http://localhost:${this.port}
📡 API Health: http://localhost:${this.port}/api/health
🔗 Proxy Endpoint: http://localhost:${this.port}/api/proxy

✅ Ready to handle requests
            `);
        });
    }
}

const proxyServer = new ScramjetProxyServer(PORT);
proxyServer.start();

process.on('SIGTERM', () => {
    console.log('\n⚠️ SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\n⚠️ SIGINT received. Shutting down gracefully...');
    process.exit(0);
});