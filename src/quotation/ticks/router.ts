import { FastifyInstance } from 'fastify';
import { getLatestTradeTicksCtr } from './controller';

async function TickRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/', getLatestTradeTicksCtr);
}

export default TickRouter;
