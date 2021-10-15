import { rest } from 'msw';
import { xxxHandlerResponse } from './responses/xxxHandlerResponse';

const API_URL = 'https://api/rest';

const xxxHandler = rest.get(`${API_URL}/xxx`, (req, res, ctx) => {
  const fields = req.url.searchParams.get('limit');
  if (fields === '12') {
    return res(ctx.status(200), ctx.json(xxxHandlerResponse));
  }
  return res(ctx.status(404));
});

export const handlers = [xxxHandler];
