export interface ICandleByMinute {
  /** 마켓명 */
  market: string;
  /** 캔들 기준 시긱(UTC 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_utc: string;
  /** 캔들 기준 시각(KST 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_kst: string;
  /** 시가 */
  opening_price: number;
  /** 고가 */
  high_price: number;
  /** 저가 */
  low_price: number;
  /** 종가 */
  trade_price: number;
  /** 해당 캔들에서 마지막 틱이 저장된 시각 */
  timestamp: number;
  /** 누적 거래 금액 */
  candle_acc_trade_price: number;
  /** 누적 거래량 */
  candle_acc_trade_volume: number;
  /** 분 단위(유닛) */
  unit: number;
}

export interface ICandleByDay {
  /** 마켓명 */
  market: string;
  /** 캔들 기준 시긱(UTC 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_utc: string;
  /** 캔들 기준 시각(KST 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_kst: string;
  /** 시가 */
  opening_price: number;
  /** 고가 */
  high_price: number;
  /** 저가 */
  low_price: number;
  /** 종가 */
  trade_price: number;
  /** 해당 캔들에서 마지막 틱이 저장된 시각 */
  timestamp: number;
  /** 누적 거래 금액 */
  candle_acc_trade_price: number;
  /** 누적 거래량 */
  candle_acc_trade_volume: number;
  /** 전일 종가(UTC 0시 기준) */
  prev_closing_price: number;
  /** 전일 종가 대비 변화 금액 */
  change_price: number;
  /** 전일 종가 대비 변화량 */
  change_rate: number;
  /** 종가 환산 환폐 단위로 환산된 가격(요청에 convertingPriceUnit 파라미터 없을 시 해당 필드 포함되지 않음) */
  converted_trade_price?: number;
}

export interface ICandleByWeek {
  /** 마켓명 */
  market: string;
  /** 캔들 기준 시긱(UTC 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_utc: string;
  /** 캔들 기준 시각(KST 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_kst: string;
  /** 시가 */
  opening_price: number;
  /** 고가 */
  high_price: number;
  /** 저가 */
  low_price: number;
  /** 종가 */
  trade_price: number;
  /** 해당 캔들에서 마지막 틱이 저장된 시각 */
  timestamp: number;
  /** 누적 거래 금액 */
  candle_acc_trade_price: number;
  /** 누적 거래량 */
  candle_acc_trade_volume: number;
  /** 캔들 기간의 가장 첫 날 */
  first_day_of_period: string;
}

export interface ICandleByMonth {
  /** 마켓명 */
  market: string;
  /** 캔들 기준 시긱(UTC 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_utc: string;
  /** 캔들 기준 시각(KST 기준) (yyyy-MM-dd'T'HH:mm:ss) */
  candle_date_time_kst: string;
  /** 시가 */
  opening_price: number;
  /** 고가 */
  high_price: number;
  /** 저가 */
  low_price: number;
  /** 종가 */
  trade_price: number;
  /** 해당 캔들에서 마지막 틱이 저장된 시각 */
  timestamp: number;
  /** 누적 거래 금액 */
  candle_acc_trade_price: number;
  /** 누적 거래량 */
  candle_acc_trade_volume: number;
  /** 캔들 기간의 가장 첫 날 */
  first_day_of_period: string;
}
