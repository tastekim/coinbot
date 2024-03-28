import { FastifyInstance } from 'fastify';
import { getAllMarketsCtr } from './controller';

async function MarketRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/all', getAllMarketsCtr);
}

export default MarketRouter;
