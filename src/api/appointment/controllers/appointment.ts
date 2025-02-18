import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::appointment.appointment', ({ strapi }) => ({
  async find(ctx) {
    try {
      const { Email } = ctx.query; // Get Email from query params if provided

      let query = {};
      if (Email) {
        query = { filters: { Email: { $eq: Email } } }; // Filter by Email if provided
      }

      // Fetch appointments based on the query (with optional filters)
      const appointments = await strapi.entityService.findMany('api::appointment.appointment', {
        ...query,
        populate: ['doctors', 'doctors.image'], // Populate related doctors and their images
      });

      if (appointments.length === 0) {
        return ctx.send({ message: 'No appointments found.' });
      }

      ctx.send(appointments); // Send the found appointments
    } catch (error) {
      ctx.internalServerError('Something went wrong');
    }
  }
}));
