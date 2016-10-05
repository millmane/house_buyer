import { applyMiddleware } from 'redux';
import HousesMiddleware from './houses_middleware';
import SessionMiddleware from './session_middleware';
const RootMiddleware = applyMiddleware(
  HousesMiddleware,
  SessionMiddleware
);

export default RootMiddleware;
