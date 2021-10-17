import { houseDetails8HandlerResponse } from './houseDetails8HandlerResponse';
import { houseDetails15HandlerResponse } from './houseDetails15HandlerResponse';
import { charactersPageSize25Page1HandlerResponse } from './charactersPageSize25Page1HandlerResponse';
import { charactersPageSize50Page1HandlerResponse } from './charactersPageSize50Page1HandlerResponse';
import { charactersPageSize50Page3HandlerResponse } from './charactersPageSize50Page3HandlerResponse';

const handlersResponses = {
  houseDetails: {
    id_8: houseDetails8HandlerResponse,
    id_15: houseDetails15HandlerResponse,
  },
  characters: {
    PageSize25Page1: charactersPageSize25Page1HandlerResponse,
    PageSize50Page1: charactersPageSize50Page1HandlerResponse,
    PageSize50Page3: charactersPageSize50Page3HandlerResponse,
  },
};

export default handlersResponses;
