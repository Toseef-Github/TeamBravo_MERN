import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';

function Home() {
    return (
        <>
        
        <body>
            <div>
                <h1 id="welcomeTitle">Welcome to QA Cinema</h1>
            </div>

        <Carousel variant="dark">
         <Carousel.Item>
         <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
        </body>

        </>

    );
};

export default Home;

// const data = [
//     {
//      image: require('./Images/Minion.jpg'), 
//      caption:"Caption",
//      description:"Description Here"
//     },
//     {
//       image:require('./Images/bullet-train-movie.jpg'), 
//       caption:"Caption",
//       description:"Description Here"
//      },
//      {
//       image:require('./Images/image3.jpg'), 
//       caption:"Caption",
//       description:"Description Here"
//      } 
//   ]
  
//   function HomeCarousel() {
//     const [index, setIndex] = useState(0);
//     const handleSelect = (selectedIndex, e) => {
//       setIndex(selectedIndex);
//     };
  
//     return (
//       <Carousel activeIndex={index} onSelect={handleSelect}>
//          {data.map((slide, i) => {
//           return (
//             <Carousel.Item>        
//           <img
//             className="d-block w-100"
//             src={slide.image}
//             alt="slider image"
//           />
//           <Carousel.Caption>
//             <h3>{slide.caption}</h3>
//             <p>{slide.description}</p>
//           </Carousel.Caption>
//         </Carousel.Item>
//           )
//         })}
        
//       </Carousel>
//     );
//   }
//   export default HomeCarousel;