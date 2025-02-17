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
            "http://localhost:3006", // ✅ Allow localhost
            "https://your-frontend.vercel.app", // ✅ Allow Vercel frontend
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.cloudinary.com",
            "https://backend-strapi-8.onrender.com",
            "http://localhost:3006", // ✅ Allow localhost
            "https://your-frontend.vercel.app", // ✅ Allow Vercel frontend
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["http://localhost:3006", "https://your-frontend.vercel.app"], // ✅ Set allowed origins
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // ✅ Allow credentials
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
