module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
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
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://your-frontend.vercel.app",
        "https://backend-strapi-8.onrender.com",
        "http://localhost:3000", // Local development
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
