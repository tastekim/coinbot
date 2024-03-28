import { FastifyInstance } from 'fastify';
import { getAccountInfoCtr } from './controller';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

async function AccountRouter (fastify: FastifyInstance, options: any) {
  fastify.get('/', getAccountInfoCtr);
}

export default AccountRouter;
