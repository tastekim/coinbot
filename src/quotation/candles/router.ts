import { FastifyInstance } from 'fastify';
import {
  getCandleByDayCtr,
  getCandleByMinuteCtr, getCandleByMonthCtr,
  getCandleByWeekCtr
} from './controller';


async function CandleRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/minute', getCandleByMinuteCtr);
  fastify.get('/day', getCandleByDayCtr);
  fastify.get('/week', getCandleByWeekCtr);
  fastify.get('/month', getCandleByMonthCtr);
}

export default CandleRouter;
