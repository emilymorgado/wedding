import React from 'react';
// Includes airbnb suggestions, tourisms tips, airport info, general getting around the bay info

const Accommodation = () => {
  return(
    <div>
      <h1>Accommodation</h1>
      <p>Looking to stay the night? Here are some suggestions:</p>
      <ul>
        <a href='https://www.airbnb.com/rooms/16351824'>
          <li>Big Berkeley Airbnb House (14 guests)</li>
        </a>
        <a href='https://www.airbnb.com/rooms/24992279'>
          <li>Big Oakland Airbnb House (14 guests)</li>
        </a>
        <a href='https://www.airbnb.com/'>
          <li>Airbnb</li>
        </a>
        <a href='http://marinainnberkeley.us/'>
          <li>Berkeley Marina Hotel</li>
        </a>
        <a href='http://www.laquintaberkeley.com/?cid=local_6238'>
          <li>Berkeley La Quinta Hotel</li>
        </a>
      </ul>
    </div>
  )
}

export default Accommodation;
