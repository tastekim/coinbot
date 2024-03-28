export interface IMarketInfo {
  /** 업비트에서 제공중인 시장 정보 */
  market: string;
  /** 거래 대상 디지털 자산 한글명 */
  korean_name: string;
  /** 거래 대상 디지털 자산 영문명 */
  english_name: string;
  /** 업보트 시장경보 */
  market_event: {
    /** 유의종목 지정 유무 */
    warning: boolean;
    /** 주의종목 지정 여부 */
    caution: {
      /** 가격 급등락 경보 발령 여부 */
      PRICE_FLUCTUATIONS: boolean;
      /** 거래량 급등 경보 발령 여부 */
      TRADING_VOLUME_SOARING: boolean;
      /** 입금량 급등 경보 발령 여부 */
      DEPOSIT_AMOUNT_SOARING: boolean;
      /** 가격 차이 경보 발령 여부 */
      GLOBAL_PRICE_DIFFERENCES: boolean;
      /** 소수 계정 집중 경보 발령 여부 */
      CONCENTRATION_OF_SMALL_ACCOUNTS: boolean;
    };
  }
}
