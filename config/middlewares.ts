module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "*.cloudinary.com",
            "https://backend-strapi-8.onrender.com",
            "https://your-frontend.vercel.app",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.cloudinary.com",
            "https://backend-strapi-8.onrender.com",
            "https://your-frontend.vercel.app",
          ],
          upgradeInsecureRequests: null, // Allow HTTP & HTTPS
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["https://your-frontend.vercel.app"], // Explicitly allow frontend
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
