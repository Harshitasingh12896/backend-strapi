import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::appointment.appointment', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { data } = ctx.request.body;

      if (!data) {
        return ctx.badRequest('Missing data');
      }

      // Ensure required fields are present
      const { UserName, Email, Date, Time, Note } = data;
      if (!UserName || !Email || !Date || !Time) {
        return ctx.badRequest('All fields are required');
      }

      const newAppointment = await strapi.entityService.create('api::appointment.appointment', {
        data: {
          UserName,
          Email,
          Date,
          Time,
          Note,
          publishedAt: new Date().toISOString(), // Auto-publish
        },
      });

      ctx.send({ message: 'Appointment booked successfully', newAppointment });
    } catch (error) {
      ctx.internalServerError('Something went wrong');
    }
  }
}));
