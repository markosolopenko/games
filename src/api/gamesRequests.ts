import { endpoints, API_URL } from "../constants/endpoints";
import { Game, Provider } from "../types/types";

const { ALL_GAMES, PROVIDERS } = endpoints;

type ResponseType = Game;

export const getGames = async (): Promise<ResponseType> => {
  const response = await fetch(`${API_URL}/${ALL_GAMES}`);
  return await response.json();
};

export const getProviders = async (): Promise<Array<Provider>> => {
  const response = await fetch(`${API_URL}/${PROVIDERS}`);
  return await response.json();
};
