import React from 'react';

function Highscore({ highscore }) {
  const extractNameFromEmail = (email) => {
    const atIndex = email.indexOf('@');
    return email.substring(0, atIndex);
  };

  return (
    <div className='highscore-cont'>
      <h1>Highscores (Top 10)</h1>
      <div className='highscore'>
        {highscore && highscore.map((user, index) => (
          <p key={index}>
            {extractNameFromEmail(user.email)} - {user.score}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Highscore;
