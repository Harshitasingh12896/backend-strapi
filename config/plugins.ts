export default ({ env }: { env: any }) => ({
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // CORS configuration
  settings: {
    cors: {
      enabled: true,
      origin: [
        env('APP_FRONTEND_URL', 'http://localhost:3000'), // Frontend URL
      ],
    },
  },
});


