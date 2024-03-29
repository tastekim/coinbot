import { FastifyReply, FastifyRequest } from 'fastify';
import axios from 'axios';
import {
  ICandleByDay,
  ICandleByMinute, ICandleByMonth,
  ICandleByWeek
} from '../../types/candles-types';

const {
  UPBIT_OPEN_API_SERVER
} = process.env;

/** 분(Minute) 캔들 조회 */
export async function getCandleByMinuteCtr (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { market, count, unit } = request.query as {
      market: string,
      count: string,
      unit: string
    };
    // 분 단위. 가능한 값 : 1, 3, 5, 15, 10, 30, 60, 240
    const response = await axios.get(`
    ${UPBIT_OPEN_API_SERVER}/v1/candles/minutes/${unit}?market=${market}&count=${count}
    `, {
      headers : {
        'Content-Type' : 'application/json',
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
    reply.send({ error : err.message });
  }
}

/** 일(Day) 캔들 조회 */
export async function getCandleByDayCtr (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { market, count, convertingPriceUnit } = request.query as {
      market: string,
      count: string,
      convertingPriceUnit?: string
    };
    // convertingPriceUnit 파라미터의 경우,
    // 원화 마켓이 아닌 다른 마켓(ex. BTC, ETH)의 일봉 요청시 종가를 명시된 파라미터 값으로 환산해 converted_trade_price 필드에 추가하여 반환합니다.
    // 현재는 원화(KRW) 로 변환하는 기능만 제공하며 추후 기능을 확장할 수 있습니다.
    const response = await axios.get(`
    ${UPBIT_OPEN_API_SERVER}/v1/candles/days?market=${market}&count=${count}
    `, {
      headers : {
        'Content-Type' : 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = response.data as ICandleByDay[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getCandleByMinuteCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error : err.message });
  }
}

/** 주(Week) 캔들 조회 */
export async function getCandleByWeekCtr (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { market, count } = request.query as {
      market: string,
      count: string,
    };
    // convertingPriceUnit 파라미터의 경우,
    // 원화 마켓이 아닌 다른 마켓(ex. BTC, ETH)의 일봉 요청시 종가를 명시된 파라미터 값으로 환산해 converted_trade_price 필드에 추가하여 반환합니다.
    // 현재는 원화(KRW) 로 변환하는 기능만 제공하며 추후 기능을 확장할 수 있습니다.
    const response = await axios.get(`
    ${UPBIT_OPEN_API_SERVER}/v1/candles/weeks?market=${market}&count=${count}
    `, {
      headers : {
        'Content-Type' : 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = response.data as ICandleByWeek[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getCandleByMinuteCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error : err.message });
  }
}

/** 월(Month) 캔들 조회 */
export async function getCandleByMonthCtr (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { market, count } = request.query as {
      market: string,
      count: string,
    };
    // convertingPriceUnit 파라미터의 경우,
    // 원화 마켓이 아닌 다른 마켓(ex. BTC, ETH)의 일봉 요청시 종가를 명시된 파라미터 값으로 환산해 converted_trade_price 필드에 추가하여 반환합니다.
    // 현재는 원화(KRW) 로 변환하는 기능만 제공하며 추후 기능을 확장할 수 있습니다.
    const response = await axios.get(`
    ${UPBIT_OPEN_API_SERVER}/v1/candles/months?market=${market}&count=${count}
    `, {
      headers : {
        'Content-Type' : 'application/json',
      }
    });
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    const data = response.data as ICandleByMonth[];
    reply.status(200).send(data);
  } catch (err) {
    const errMsg = `[getCandleByMinuteCtr] ${err.message}`;
    console.log(errMsg, err);
    reply.send({ error : err.message });
  }
}
