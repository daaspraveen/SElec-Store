// pages/GamesPage.js
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import gameData from "../../gamesData.json"; // Save your JSON data here
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Types
interface PlayCountData {
  id: number;
  gameId: string;
  playCount: number;
}

// interface GameData {
//   id: number;
//   proj_name: string;
//   proj_link: string;
//   category: string;
//   short_desc: string;
//   image_url: string;
// }

const GamesPage = () => {
  const [playCounts, setPlayCounts] = useState<PlayCountData[]>([]);

  // GET
  // https://sestore-games-backend.onrender.com/api/sestore/games/play-counts
  // Update
  // https://sestore-games-backend.onrender.com/api/sestore/games/play-countsincrease/{proj name in lower}
  useEffect(() => {
    fetch("https://sestore-games-backend.onrender.com/api/sestore/games/play-counts")
      .then((res) => res.json())
      .then((data) => {
        // console.log("data : ", data)
        // console.log(data[0].gameId)
        setPlayCounts(data);
      });
  }, []);

  const handlePlayClick = async (proj_name:string, proj_link:string) => {
    console.log(proj_name, proj_link)
    try{ 
      const formattedProjName = proj_name.split(" ").join("-").toLowerCase()
      // console.log('formattedProjName', formattedProjName)
      const updateGamePlayCountUrl = `https://sestore-games-backend.onrender.com/api/sestore/games/play-countsincrease/${formattedProjName}`
      const options = {method : 'PUT'}
      const sendCall = await fetch(updateGamePlayCountUrl, options)
      if (sendCall.ok) {
        const response = await sendCall.json()
        console.log(response)
      } else {
        const errorResp = await sendCall.json()
        console.log('ERROR IN CALLING API', errorResp.error_msg)
      }
    } catch (e) {
      console.log("ERROR : ", e)
    }
  }

  return (
    <>
      <Header />
    <div className="p-6 pt-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Play and Have Fun</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gameData
          .filter((game) => game.category === "Game")
          .map((game) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const exists = playCounts.find((each:any) => each.gameId === game.proj_name.split(" ").join("-").toLowerCase()) || undefined
            // console.log("exists : ", exists)
            const eachGamePlayCount = exists?.playCount || 0;
            return (
            <div key={game.id} className="bg-white shadow-lg rounded-lg p-4 max-sm:w-80 max-md:w-90 m-auto">
              <img
                src={`./media/games/${game.image_url}`}
                alt={game.proj_name}
                className="h-45 w-full object-cover rounded"
              />
              <h2 className="text-xl font-semibold mt-4">{game.proj_name}</h2>
              <p className="text-gray-600">{game.short_desc}</p>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => handlePlayClick(game.proj_name, game.proj_link)}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  <Link to={game.proj_link} target="_blank">Play Now</Link>
                </button>
                <span className="text-sm text-gray-500">
                  Played: {eachGamePlayCount} times
                </span>
              </div>
            </div>
          )})}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default GamesPage;
