import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { ICandleByMinute } from '../../types/candles-types';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

/** 분(Minute) 캔들 조회 */
export async function getCandleByMinuteCtr (request: FastifyRequest, reply: FastifyReply) {
  try {
    const { market, minute } = request.query as { market: string, minute: string };
    const response = await axios.get(`${UPBIT_OPEN_API_SERVER}/v1/candles/minutes/1?market=${market}&count=200`, {
      headers: {
        'Content-Type': 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = response.data as ICandleByMinute[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getCandleByMinuteCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error: err.message });
  }
}
