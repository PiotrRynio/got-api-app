import { rest } from 'msw';
import { API_URL } from 'constant/apiUrl';
import handlersResponses from './responses';

const houseDetailsHandler = rest.get(`${API_URL}/houses/:houseId`, (req, res, ctx) => {
  const houseId = req.params.houseId;
  if (houseId === '8') {
    return res(ctx.status(200), ctx.json(handlersResponses.houseDetails.id_8));
  }
  if (houseId === '15') {
    return res(ctx.status(200), ctx.json(handlersResponses.houseDetails.id_15));
  }
  return res(ctx.status(404));
});

const charactersHandler = rest.get(`${API_URL}/characters`, (req, res, ctx) => {
  const { searchParams } = req.url;
  const pageSize = searchParams.get('pageSize');
  const page = searchParams.get('page');

  if (pageSize === '25') {
    if (page === '1') {
      return res(ctx.status(200), ctx.json(handlersResponses.characters.PageSize25Page1));
    }
  }
  if (pageSize === '50') {
    if (page === '1') {
      return res(ctx.status(200), ctx.json(handlersResponses.characters.PageSize50Page1));
    }
    if (page === '3') {
      return res(ctx.status(200), ctx.json(handlersResponses.characters.PageSize50Page3));
    }
  }

  return res(ctx.status(404));
});

export const handlers = [houseDetailsHandler, charactersHandler];
