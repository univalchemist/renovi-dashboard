'use strict';

/**
 *  nft-token controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::nft-token.nft-token', ({ strapi }) =>  ({

    async find(ctx) {
        const { query } = ctx;

        const entity = await strapi.entityService.findMany('api::nft-token.nft-token', {
            ...query,
            populate: {
                owner: {
                    populate: {
                        avatar: true
                    }
                },
                applicant: {
                    populate: {
                        avatar: true
                    }
                },
            },
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
      }

  }));