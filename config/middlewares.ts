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
            "http://localhost:3004", // ✅ Allow local frontend
          ],
          "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "*.cloudinary.com", 
            "https://backend-strapi-8.onrender.com",
            "http://localhost:3004", // ✅ Allow local frontend
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3004",  // ✅ Allow local frontend
        "https://frontend-project-6gvm.vercel.app", // ✅ Allow deployed frontend
      ],
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // ✅ Important for cookies or auth
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
