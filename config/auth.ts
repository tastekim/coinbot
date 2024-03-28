import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';

const {
  UPBIT_ACCESS_KEY,
  UPBIT_SECRET_KEY,
  UPBIT_OPEN_API_SERVER
} = process.env;

const payload = {
  access_key: UPBIT_ACCESS_KEY,
  nonce: uuidv4(),
}
const jwtToken = jwt.sign(payload, UPBIT_SECRET_KEY);
export const AUTH_TOKEN = `Bearer ${jwtToken}`;
