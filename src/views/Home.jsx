import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://fauques.freeboxos.fr:3000/matches', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setMatches(response.data);
      } catch (error) {
        setError('Failed to fetch matches');
        console.error('Error fetching matches:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const startNewGame = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://fauques.freeboxos.fr:3000/matches', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate(`/games/${response.data._id}`); 
    } catch (error) {
      console.error('Error starting new game:', error);
    }
  };

  if (loading) return <p>Loading matches...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='body-home'>
      <div className='home-container'>
      <h1 className='h1-home'>Home Page</h1>
      <div className='button-game'>
      <button className='button-new-game' onClick={startNewGame}>New Game</button> 
      </div>
      <div className='list-of-matches'>
      <h3 className='title-list-of-matches'>List of Matches</h3>
      <ul>
        {matches.map((match) => (
          <li key={match._id}>
            Match ID: {match._id}, Player 1: {match.user1?.username}, Player 2: {match.user2?.username || 'Waiting for player'}
            <button className='button-play' onClick={() => navigate(`/games/${match._id}`)}>Play</button>
          </li>
        ))}
      </ul>
      </div> 
      </div> 
    </div>
  );
}

export default Home;
