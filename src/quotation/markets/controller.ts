import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { AUTH_TOKEN } from '../../../config/auth';
import { ITotalAccountInfo } from '../../types/account-types';
import { IMarketInfo } from '../../types/market-types';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

/** 업비트에서 거래 가능한 마켓 목록 조회 */
export async function getAllMarketsCtr (request: FastifyRequest, reply: FastifyReply) {
  try {
    const response = await axios.get(`${UPBIT_OPEN_API_SERVER}/v1/market/all?isDetails=true`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const data = response.data as IMarketInfo[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getAllMarketsCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error: err.message });
  }
}
