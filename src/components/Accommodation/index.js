import React from 'react';
// Includes airbnb suggestions, tourisms tips, airport info, general getting around the bay info

const Accommodation = () => {
  return(
    <div>
      <h1>Accommodation</h1>
      <div className='main-container'>
        <p>Looking to stay the night? Here are some suggestions:</p>
        <ul>
          <a href='https://www.airbnb.com/rooms/16351824' target='_blank'>
            <li>Big Berkeley Airbnb House (14 guests)</li>
          </a>
          <a href='https://www.airbnb.com/rooms/24992279' target='_blank'>
            <li>Big Oakland Airbnb House (14 guests)</li>
          </a>
          <a href='https://www.airbnb.com/' target='_blank'>
            <li>Airbnb</li>
          </a>
          <a href='http://marinainnberkeley.us/' target='_blank'>
            <li>Berkeley Marina Hotel</li>
          </a>
          <a href='http://www.laquintaberkeley.com/?cid=local_6238' target='_blank'>
            <li>Berkeley La Quinta Hotel</li>
          </a>
          <a href='http://www.google.com' target='_blank'>
            <li>Just for Testing</li>
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Accommodation;
