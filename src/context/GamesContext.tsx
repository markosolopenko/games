import React, { createContext, Dispatch, ReactNode, useReducer } from "react";
import { Game } from "../types/types";
import { FETCH_GAMES } from "../actionTypes/gamesActions";

type Actions = { type: "FETCH_GAMES"; payload: Game[] };

type GamesInitialState = {
  games: Game[];
};

const initialState: GamesInitialState = {
  games: [],
};

export const GamesContextState = createContext<GamesInitialState>(initialState);

export const GamesContextDispatch = createContext<Dispatch<Actions>>(
  () => null
);

const gamesReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case FETCH_GAMES:
      return { ...state, games: action.payload };
    default:
      return state;
  }
};

export const GamesContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [state, dispatch] = useReducer(gamesReducer, initialState);
  return (
    <GamesContextState.Provider value={state}>
      <GamesContextDispatch.Provider value={dispatch}>
        {children}
      </GamesContextDispatch.Provider>
    </GamesContextState.Provider>
  );
};
