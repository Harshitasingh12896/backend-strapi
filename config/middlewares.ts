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
            "http://localhost:3004",
            "https://your-frontend.vercel.app",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.cloudinary.com",
            "https://backend-strapi-8.onrender.com",
            "http://localhost:3004",
            "https://your-frontend.vercel.app",
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      origin: ["http://localhost:3004", "https://your-frontend.vercel.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
