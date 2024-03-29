import dotenv from 'dotenv';
dotenv.config();

import Fastify from 'fastify';
import AccountRouter from './src/exchange/accounts/router';
import MarketRouter from './src/quotation/markets/router';
import CandleRouter from './src/quotation/candles/router';
import TickRouter from './src/quotation/ticks/router';
import TickerRouter from './src/quotation/tickers/router';

const server = Fastify();

server.register(AccountRouter, { prefix: '/api/accounts' });
server.register(MarketRouter, { prefix: '/api/markets' });
server.register(CandleRouter, { prefix: '/api/candles' });
server.register(TickRouter, { prefix: '/api/ticks' });
server.register(TickerRouter, { prefix: '/api/tickers' });

server.listen({ port: 3000, host: '127.0.0.1' }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
