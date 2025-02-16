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
            "https://your-strapi-deployment.com",  // Add deployed Strapi URL
            "https://your-frontend.vercel.app",    // Add deployed Next.js frontend URL
          ],
          "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "*.cloudinary.com", 
            "https://your-strapi-deployment.com",  // Add deployed Strapi URL
            "https://your-frontend.vercel.app",    // Add deployed Next.js frontend URL
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://your-frontend.vercel.app",  // Deployed frontend URL
        "https://your-strapi-deployment.com", // Deployed Strapi backend URL
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
