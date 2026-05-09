import React, { useState } from 'react';
import './App.css';

function CookieJar() {

  const cookies = [
  { id: 1, name: 'Chocolate Chip', description: 'A classic cookie with chocolate chips.' },
  { id: 2, name: 'Oatmeal Raisin', description: 'A hearty cookie with rolled oats and raisins.' },
  { id: 3, name: 'Peanut Butter', description: 'A creamy cookie with peanut butter.' },
];

  const description = {name: 'What is the cookie jar ?', description: "The cookie jar is a metaphor. It's a metaphor for things we accomplished in life, things we are proud of, things we want to remember. It's a place where we can store our achievements and look back on them when we need a boost of confidence or motivation. This is my cookie jar, filled with my accomplishments. So it's pretty personnal. I'll maybe create a version of the cookie jar where you can add your own cookies, but for now, that's it."};

  const [currentCookie, setCurrentCookie] = useState(description);

  const takeCookie = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * cookies.length);
    } while (currentCookie && cookies[randomIndex].id === currentCookie.id);
    setCurrentCookie(cookies[randomIndex]);
  };

  return (
    <div className="CookieJarContainer">
      <div className="Cookies">
        {currentCookie && (
          <div>
            <h3>{currentCookie.name}</h3>
            <p>{currentCookie.description}</p>
          </div>
        )}
      </div>
      <div className="CookieJar">
        <button className="CookieJarButton" onClick={takeCookie}>Take a cookie ?</button>
      </div>
    </div>
  );
}

export default CookieJar;