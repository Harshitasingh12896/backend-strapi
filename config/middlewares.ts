export default [
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
            "https:",
            "*.cloudinary.com",
            "http://localhost:3000",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            "*.cloudinary.com",
            "http://localhost:3000",
          ],
          "connect-src": [
            "'self'",
            "https:",
            "*.cloudinary.com",
            "http://localhost:1337", // ✅ Allow API requests
            "http://localhost:3000",
          ],
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true, // ✅ Ensure it's enabled
      origin: [
        "http://localhost:3000", // ✅ Allow frontend access
        "https://your-deployed-frontend.com", // ✅ Add deployed domain here
      ],
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // ✅ Allow authentication credentials (cookies, sessions)
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
