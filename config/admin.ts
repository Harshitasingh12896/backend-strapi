export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','JOwjHMXTGEUgwJ+D0ugeCw=='),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'd6BLKSBtnVoTo/Ttf11B1w=='), // ✅ Corrected
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT','317da7435043e8289d95b527ae64d786'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
