import React from 'react';
import './User.css';

function User() {
  const jsonData = [
    {
      "id": 1,
      "name": "Aman",
      "email": "aman@gmail.com",
      "password": "password1232",
      "achievements": [
        {
          "currentLevel": "4",
          "selectedScenario": "Chemical Disaster Training",
          "scores": ["100", "90", "95", "83", "78"]
        }
      ]
    }
  ];

  return (
    <div className='bg-element'>
      <div className='b-container'>
        <h1>Your Profile</h1>
        <p>Welcome, {jsonData[0].name}!!</p>
        <p>You are on {jsonData[0].achievements[0].selectedScenario}.</p>
        <p>Your Current Level is {jsonData[0].achievements[0].currentLevel}.</p>
        <br/>
        <p>Score Board:</p>
        <div className="t-container">
          <table>
            <thead>
              <tr>
                <th>Level</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {jsonData[0].achievements[0].scores.map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;


