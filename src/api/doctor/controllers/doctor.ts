/**
 * doctor controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::doctor.doctor", ({ strapi }) => ({
  async findOne(ctx) {
    try {      const { id } = ctx.params;

      // Ensure ID is valid
      if (!id || isNaN(Number(id))) {
        return ctx.badRequest("Invalid doctor ID");
      }

      console.log("Fetching doctor with ID:", id);

      // Use Strapi's Entity Service to fetch doctor details
      const doctor = await strapi.entityService.findOne("api::doctor.doctor", Number(id), { populate: "*" });

      if (!doctor) {
        return ctx.notFound("Doctor not found");
      }

      return ctx.send({ data: doctor });
    } catch (error) {
      console.error("Error fetching doctor:", error);
      return ctx.badRequest("Error fetching doctor");
    }
  },
}));
