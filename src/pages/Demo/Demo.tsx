import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { GamesContextState } from "../../context/GamesContext";
import { API_URL } from "../../constants/endpoints";

import "./styles.scss";

const Demo = (): JSX.Element => {
  const { game } = useContext(GamesContextState);
  const gameBody = Object.values(game);

  return (
    <div className="DemoPage">
      <Link to={ROUTES.GAMES} className="backButton">
        Back
      </Link>

      {gameBody.length > 0 && (
        <div className="iframe">
          <div className="title">{`${gameBody[0].provider}/${gameBody[0].title}`}</div>
          <iframe src={`${API_URL}${gameBody[0].demo}`} />
        </div>
      )}
    </div>
  );
};

export default Demo;
