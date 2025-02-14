module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'), // Replace with your MySQL host
      port: env.int('DATABASE_PORT', 3306),    // Replace with your MySQL port
      database: env('DATABASE_NAME', 'strapi'), // Replace with your database name
      user: env('DATABASE_USERNAME', 'root'),  // Replace with your MySQL username
      password: env('DATABASE_PASSWORD', 'Harshita@2003'), // Replace with your MySQL password
      ssl: env.bool('DATABASE_SSL', false),    // Set to true if SSL is required
    },
  },
});
