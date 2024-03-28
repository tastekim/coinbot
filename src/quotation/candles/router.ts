import { FastifyInstance } from 'fastify';
import { getCandleByMinuteCtr } from './controller';


async function CandleRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/1', getCandleByMinuteCtr);
}

export default CandleRouter;
