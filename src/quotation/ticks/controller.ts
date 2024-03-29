import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import { IMarketInfo } from '../../types/market-types';
import { ITick } from '../../types/ticks-type';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

/** 업비트에서 거래 가능한 마켓 목록 조회 */
export async function getLatestTradeTicksCtr (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { market, count, cursor } = request.query as {
      market: string,
      count: string,
      cursor: string
    };
    // market: 마켓 코드 (ex. KRW-BTC)
    // count: 체결 개수 (최대 200개)
    // cursor: 페이지네이션 커서 (sequentialId). 체결의 유일성 판단을 위한 근거로 쓰일 수 있습니다. 하지만 체결의 순서를 보장하지는 못합니다.
    // daysAgo: 최근 체결 날짜 기준 7일 이내의 이전 데이터 조회 가능. 비워서 요청 시 가장 최근 체결 날짜 반환. (범위: 1 ~ 7))
    const response = await axios.get(`
    ${UPBIT_OPEN_API_SERVER}/v1/trades/ticks?market=${market}&count=${count}&cursor=${cursor}
    `, {
      headers : {
        'Content-Type' : 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    const data = response.data as ITick[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getAllMarketsCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error : err.message });
  }
}
