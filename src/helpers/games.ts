import { Game } from "../types/types";

export const parseGames = (data: Game): Game[] => {
  const result = [];
  for (const game in data) {
    result.push({ [game]: data[game] });
  }

  return result;
};

export const filterByProviders = (
  games: Game[],
  selectedProviderId: string
): Game[] =>
  games.filter(
    (game) => Object.values(game)[0].provider === selectedProviderId
  );

export const findByWord = (games: Game[], word: string): Game[] =>
  games.filter(
    (game) =>
      Object.values(game)[0]
        .title.toLowerCase()
        .split(" ")
        .join("")
        .slice(0, word.split(" ").join("").length) ===
      word.toLowerCase().split(" ").join("")
  );
