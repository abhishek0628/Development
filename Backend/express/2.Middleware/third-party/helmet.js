//npm install helmet
const express = require('express');
const helmet = require('helmet');

const app = express();

// Apply helmet to all routes
app.use(helmet());
// app.use(
//     helmet({
//         contentSecurityPolicy: false, // disable CSP if needed
//         frameguard: { action: 'deny' } // block all framing
//     })
// );

app.get('/', (req, res) => {
    res.send('Hello Secure World');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Content-Security-Policy → Prevent XSS attacks by controlling resources that can load
// X-DNS-Prefetch-Control → Control DNS prefetching
// X-Frame-Options → Prevent clickjacking (iframe attacks)
// Strict-Transport-Security → Enforce HTTPS
// X-Content-Type-Options → Prevent MIME type sniffing
// Referrer-Policy → Control referrer information
// Expect-CT → Certificate transparency enforcement