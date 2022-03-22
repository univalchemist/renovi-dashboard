'use strict';

/**
 * nft-token service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::nft-token.nft-token');
