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
            "https://backend-strapi-8.onrender.com",  // ✅ Your deployed Strapi URL
            "https://your-frontend.vercel.app",      // ✅ Your frontend URL
          ],
          "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "*.cloudinary.com", 
            "https://backend-strapi-8.onrender.com",  // ✅ Your deployed Strapi URL
            "https://your-frontend.vercel.app",      // ✅ Your frontend URL
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://frontend-project-6gvm.vercel.app/",  // ✅ Update with frontend URL
        "https://backend-strapi-8.onrender.com", // ✅ Update with backend URL
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
