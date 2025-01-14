import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Games() {
  const { id } = useParams();
  const [match, setMatch] = useState(null);
  const [move, setMove] = useState('');

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://fauques.freeboxos.fr:3000/matches/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMatch(response.data);
      } catch (error) {
        console.error('Error fetching match details:', error);
      }
    };

    fetchMatchDetails();
  }, [id]);

  const playTurn = async (turnId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(`http://fauques.freeboxos.fr:3000/matches/${id}/turns/${turnId}`, { move }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert('Turn played!');
      // Optionally fetch updated match details
    } catch (error) {
      console.error('Error playing turn:', error);
    }
  };

  if (!match) return <p>Loading match details...</p>;

  return (
    <div className='body-games'>
      <div className="games-container">
      <div className="game-match-id">
        <h2 className='game-match-id'>Game for Match ID: {id}</h2>
      </div>
      <div className="list-players">
        <h3>Player 1: {match.user1?.username}, Player 2: {match.user2?.username || 'Waiting for player'}</h3>
      </div>
      <div className="move">
        <label className='choose-your-move'>
          Choose your move:
          <select className='select' value={move} onChange={(e) => setMove(e.target.value)}>
            <option value="">Select move</option>
            <option value="rock">Rock</option>
            <option value="paper">Paper</option>
            <option value="scissors">Scissors</option>
          </select>
        </label>
        <button className='button-play-turn' onClick={() => playTurn(match.turns.length)}>Play Turn</button>
      </div>
      </div>
    </div>
  );
}

export default Games;
