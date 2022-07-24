export type Game = {
  [gameId: string]: {
    title: string;
    provider: string;
    collections: {
      [collection: string]: number;
    };
    real: {
      [currencyCode: string]: {
        id: number;
        jackpot: number;
      };
    };
    demo?: string;
  };
};

export type Provider = {
  id: string;
  title: string;
};
