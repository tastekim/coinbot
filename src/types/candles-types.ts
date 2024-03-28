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
