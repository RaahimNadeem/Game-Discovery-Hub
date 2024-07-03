import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
const [games, setGames] = useState<Game[]>([]); // Start with an empty array
  const [error, setError] = useState("");

  // Effect hook to send the fetech requests to the back-end
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results)
        console.log(res.data.results);
      })
        .catch((err) => setError(err.message));
  }, []); // Empty dependency array: Run only once on mount
  

  return (
    <ul>
      {games?.map(game => 
        <li key={game.id}>{game.name}</li>
    )}
    </ul>
  )
}

export default GameGrid;
