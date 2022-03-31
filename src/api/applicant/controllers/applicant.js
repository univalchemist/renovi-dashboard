'use strict';

/**
 *  applicant controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::applicant.applicant', ({ strapi }) =>  ({

    async create(ctx) {
        // some logic here
        const response = await super.create(ctx);
        console.log("ctx :: ", ctx);
        // some more logic

        return response;
      },

      async update(ctx) {
        // some logic here
        const response = await super.update(ctx);
        console.log("ctx :: ", ctx);
        // some more logic

        return response;
      }

  }));