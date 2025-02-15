module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Harshita@2003'), // Corrected line
      ssl: env.bool('DATABASE_SSL', false),
    },
    pool: { min: 0, max: 5 }, // Prevent max connections issue
  },
});

