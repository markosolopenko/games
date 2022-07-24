import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FETCH_GAMES } from "../../actionTypes/gamesActions";
import { getGames, getProviders } from "../../api/gamesRequests";
import Game from "../../components/Game/Game";
import Input from "../../components/Input/Input";
import { Loader } from "../../components/Loader/Loader";
import { Pagination } from "../../components/Pagination/Pagination";
import Select from "../../components/Select/Select";
import {
  GamesContextDispatch,
  GamesContextState,
} from "../../context/GamesContext";
import { debounce } from "../../helpers/debounce";
import { filterByProviders, findByWord, parseGames } from "../../helpers/games";
import { Game as GameType, Provider } from "../../types/types";

import styles from "./styles.module.scss";

const PER_PAGE = 10;
const DEFAULT_PROVIDER = { id: "providers", title: "Providers" };

const Games = (): JSX.Element => {
  const dispatch = useContext(GamesContextDispatch);
  const { games } = useContext(GamesContextState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [gamesList, setGamesList] = useState<GameType[]>(games);

  const handlePaginationChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleInputChange = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      setGamesList(!e.target.value ? games : findByWord(games, e.target.value));
    }, 500),
    []
  );

  const handleFilterByProviders = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGamesList(filterByProviders(games, e.target.value));
  };

  useEffect(() => {
    getProviders().then((data) => setProviders(data));
  }, []);

  useEffect(() => {
    getGames()
      .then((data) => {
        const parsedGames = parseGames(data);
        dispatch({ payload: parsedGames, type: FETCH_GAMES });
        setGamesList(parsedGames);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(gamesList.length / PER_PAGE),
    [gamesList]
  );

  const gamesToShow = useMemo(
    () =>
      gamesList.slice(
        currentPage * PER_PAGE - PER_PAGE,
        currentPage * PER_PAGE
      ),
    [currentPage, gamesList]
  );

  if (isLoading) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.Games}>
      <div className={styles.filters}>
        <div className={styles.searchForm}>
          <Input placeholder="Search" onChange={handleInputChange} />
        </div>
        <div className={styles.select}>
          <Select
            options={providers}
            defaultValue={DEFAULT_PROVIDER}
            onChange={handleFilterByProviders}
          />
        </div>
      </div>
      <div className={styles.gamesList}>
        {gamesToShow.map((game, index) => (
          <Game game={game} key={index} />
        ))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          onChange={handlePaginationChange}
          activePage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default Games;
