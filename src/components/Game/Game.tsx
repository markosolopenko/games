import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CHOOSE_GAME } from "../../actions/gamesActions";
import { ROUTES } from "../../constants/routes";
import { GamesContextDispatch } from "../../context/GamesContext";
import { Game as GameType } from "../../types/types";

import styles from "./styles.module.scss";

type GameProps = {
  game: GameType;
};

const Game = ({ game }: GameProps): JSX.Element => {
  const [[gameId, gameBody]] = Object.entries(game);
  const dispatch = useContext(GamesContextDispatch);
  const { title } = gameBody;

  const handleButtonClick = () => {
    dispatch({ type: CHOOSE_GAME, payload: game });
  };

  return (
    <div className={styles.Game}>
      <div className={styles.image}>
        <img src={`https://cdn.softswiss.net/i/s3/${gameId}.png`} alt="Error" />
      </div>
      <div className={styles.title}>{title}</div>
      <Link
        className={styles.button}
        to={ROUTES.DEMO}
        onClick={handleButtonClick}
      >
        Play
      </Link>
    </div>
  );
};

export default Game;
