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
            "http://localhost:1337",  // Allow localhost for images
            "http://localhost:3000",  // Allow your Next.js frontend (if running locally on port 3000)
          ],
          "media-src": [
            "'self'", 
            "data:", 
            "blob:", 
            "*.cloudinary.com", 
            "http://localhost:1337",  // Allow localhost for media
            "http://localhost:3000",  // Allow your Next.js frontend (if running locally on port 3000)
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "http://localhost:3000", // Allow your local frontend (Next.js running on port 3000)
        "http://localhost:1337", // Allow Strapi's local backend if needed
      ],
      methods: ["GET", "POST", "PUT", "DELETE"], // Allow the HTTP methods your app will use
      allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers like Authorization
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
