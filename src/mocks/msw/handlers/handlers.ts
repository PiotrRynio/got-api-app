import { rest } from 'msw';
import { houseDetails8HandlerResponse } from './responses/houseDetails8HandlerResponse';

const API_URL = 'https://api/rest';

const houseDetailsHandler = rest.get(`${API_URL}/house`, (req, res, ctx) => {
  const houseId = req.params.houseId;
  if (houseId === '8') {
    return res(ctx.status(200), ctx.json(houseDetails8HandlerResponse));
  }
  return res(ctx.status(404));
});

export const handlers = [houseDetailsHandler];
