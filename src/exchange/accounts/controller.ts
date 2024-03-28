import axios from 'axios';
import { FastifyReply, FastifyRequest } from 'fastify';
import { AUTH_TOKEN } from '../../../config/auth';
import { ITotalAccountInfo } from '../../types/account-types';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

/** 내가 보유한 자산 리스트 조회 */
export async function getAccountInfoCtr (request: FastifyRequest, reply: FastifyReply)  {
  try {
    const response = await axios.get(`${UPBIT_OPEN_API_SERVER}/v1/accounts`, {
      headers: {
        Authorization: AUTH_TOKEN,
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const data = response.data as ITotalAccountInfo[];

    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getAccountInfoCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error: err.message });
  }
}
