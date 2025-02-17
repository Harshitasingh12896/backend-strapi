export default [
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
            "https://nextjs-project-five-indol.vercel.app", // ✅ Vercel frontend
            "http://localhost:3000", // ✅ Allow localhost
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "*.cloudinary.com",
            "https://backend-strapi-8.onrender.com",
            "https://nextjs-project-five-indol.vercel.app", // ✅ Vercel frontend
            "http://localhost:3000", // ✅ Allow localhost
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://nextjs-project-five-indol.vercel.app", // ✅ Vercel frontend
        "http://localhost:3000", // ✅ Allow localhost
      ], // ✅ Set allowed origins
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
