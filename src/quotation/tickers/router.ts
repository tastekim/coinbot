import { FastifyInstance } from 'fastify';
import { getCurrTickersCtr } from './controller';

async function TickerRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/', getCurrTickersCtr);
}

export default TickerRouter;
