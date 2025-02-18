export default [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        enabled: true,
        useDefaults: true,
        directives: {
          "script-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            "*.cloudinary.com",
            "http://localhost:3001",
            "https://nextjs-project-gmdw-frmrew3ve-harshitas-projects-51e4ee6c.vercel.app"
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "https:",
            "*.cloudinary.com",
            "http://localhost:3001",
            "https://nextjs-project-gmdw-frmrew3ve-harshitas-projects-51e4ee6c.vercel.app",
          ],
          "connect-src": [
            "'self'",
            "https:",
            "*.cloudinary.com",
            "http://localhost:1337", // ✅ Allow API requests
            "http://localhost:3001",
           " https://nextjs-project-gmdw-frmrew3ve-harshitas-projects-51e4ee6c.vercel.app",
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
        "http://localhost:3001", // ✅ Allow frontend access
        "https://nextjs-project-gmdw-frmrew3ve-harshitas-projects-51e4ee6c.vercel.app", // ✅ Add deployed domain here
      ],
      methods: ["GET", "POST", "PUT" ,"PATCH","DELETE",],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true, // ✅ Allow authentication credentials (cookies, sessions)
    },
  },
  "strapi::query",
  "strapi::body",
  "strapi::favicon",
  "strapi::public",
];
