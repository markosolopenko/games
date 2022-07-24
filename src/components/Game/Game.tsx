import React from "react";
import { Game as GameType } from "../../types/types";

import styles from "./styles.module.scss";

type GameProps = {
  game: GameType;
};

const Game = ({ game }: GameProps): JSX.Element => {
  const [[gameId, gameBody]] = Object.entries(game);
  const { title, demo } = gameBody;
  const handleButtonClick = () => {
    window.open(`https://domain.com/${demo}`);
  };

  return (
    <div className={styles.Game}>
      <div className={styles.image}>
        <img src={`https://cdn.softswiss.net/i/s3/${gameId}.png`} alt="Error" />
      </div>
      <div className={styles.title}>{title}</div>
      <iframe src={`https://domain.com/it/${demo}`} />
      <button className={styles.button} onClick={handleButtonClick}>
        Play
      </button>
    </div>
  );
};

export default Game;
