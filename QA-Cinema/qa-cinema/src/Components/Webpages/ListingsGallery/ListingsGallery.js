import './ListingsGallery.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ListingsGallery() {
    return (
        <>
           <h1>Recent Releases:</h1>
            <div class="movie_card" id="minion">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://m.media-amazon.com/images/I/71NoVb6lTgL._SY679_.jpg" alt= "minion listing"/>
      <h2>Minions: The Rise of Gru</h2>
      <h4>2022, Kyle Balda</h4>
      <span class="minutes">87 min</span>
      <p class="type">Animation, Adventure, Fantasy</p>
      <br/>
    </div>
    <div class="movie_desc">
      <p class="text">
      <br/>
      The untold story of one twelve-year-old's dream to become the world's greatest supervillain.
      </p>
    </div>
    <div class="movie_social">
      <ul>
        <li><a class="material-icons" href= "Booking">Book Now</a></li>
        <li><a class="material-icons" href= "Minions">More Info</a></li>
        <li><a class="material-icons" href = "ContactUs">Contact us</a></li>
      </ul>
    </div>
  </div>
  <div class="blur_back minion_back"></div>
</div>

<div class="movie_card" id="bullettrain">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://m.media-amazon.com/images/M/MV5BMDU2ZmM2OTYtNzIxYy00NjM5LTliNGQtN2JmOWQzYTBmZWUzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt = "bullettrain listing"/>
      <h2>Bullet Train</h2>
      <h4>2022, David Leitch</h4>
      <span class="minutes">127 min</span>
      <p class="type">Action, Comedy</p>
    </div>
    <div class="movie_desc">
      <p class="text">
      Five assassins aboard a fast moving bullet train find out their missions have something in common.
      </p>
    </div>
    <div class="movie_social">
      <ul>
      <ul>
        <li><a class="material-icons" href= "Booking">Book Now</a></li>
        <li><a class="material-icons" href= "BulletTrain">More Info</a></li>
        <li><a class="material-icons" href = "ContactUs">Contact us</a></li>
      </ul>
      </ul>
    </div>
  </div>
  <div class="blur_back bullettrain_back"></div>
</div>

<div class="movie_card" id="thor">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://m.media-amazon.com/images/M/MV5BYmMxZWRiMTgtZjM0Ny00NDQxLWIxYWQtZDdlNDNkOTEzYTdlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" alt = "thor listing"/>
      <h2>Thor: Love and Thunder</h2>
      <h4>2022, Taika Waititi</h4>
      <span class="minutes">118 min</span>
      <p class="type">Action, Adventure</p>
    </div>
    <div class="movie_desc">
      <p class="text">
      Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.
      </p>
    </div>
    <div class="movie_social">
      <ul>
      <ul>
        <li><a class="material-icons" href= "Booking">Book Now</a></li>
        <li><a class="material-icons" href= "Thor">More Info</a></li>
        <li><a class="material-icons" href = "ContactUs">Contact us</a></li>
      </ul>
      </ul>
    </div>
  </div>
  <div class="blur_back thor_back"></div>
</div>

<div class="movie_card" id="Superpets">
  <div class="info_section">
    <div class="movie_header">
      <img class="locandina" src="https://m.media-amazon.com/images/M/MV5BYWI2NDg5M2MtMGMwYS00NzU1LWI1YzktYTg0ZDEwMjY4YmUwXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg" alt="DC: League of Super-Pets listing" />
      <h2>DC League of Super-Pets</h2>
      <h4>2022, Jared Stern</h4>
      <span class="minutes">105 min</span>
      <p class="type">Animation, Action, Adventure</p>
    </div>
    <div class="movie_desc">
      <p class="text">
      Krypto the Super-Dog and Superman are inseparable best friends, sharing the same superpowers and fighting crime side by side in Metropolis. However, Krypto must master his own powers for a rescue mission when Superman is kidnapped.
      </p>
    </div>
    <div class="movie_social">
    <ul>
        <li><a class="material-icons" href= "Booking">Book Now</a></li>
        <li><a class="material-icons" href= "Superpets">More Info</a></li>
        <li><a class="material-icons" href = "ContactUs">Contact us</a></li>
      </ul>
    </div>
  </div>
  <div class="blur_back Superpets_back"></div>
</div>
          
        </>
    );
}

export default ListingsGallery;