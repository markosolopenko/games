import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { GamesContextState } from "../../context/GamesContext";

import "./styles.scss";

const Demo = (): JSX.Element => {
  const { game } = useContext(GamesContextState);
  const gameBody = Object.values(game);

  const { provider, title, demo } = gameBody[0];

  return (
    <div className="DemoPage">
      <Link to={ROUTES.GAMES} className="backButton">
        Back
      </Link>

      <div className="iframe">
        <div className="title">{`${provider}/${title}`}</div>
        <iframe src={`https://domain.com${demo}`} />
      </div>
    </div>
  );
};

export default Demo;
