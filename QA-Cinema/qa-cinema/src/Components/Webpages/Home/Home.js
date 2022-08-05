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

        <Carousel variant="dark" div className="col-lg-10 col-md-12 mb-4 mb-lg-0 border shadow gt-2 text-center card w-80 bg-dark">
        
         <Carousel.Item>
         <img
          className="d-block w-100"
          src="https://64.media.tumblr.com/2f658e9161e08847d5806017d50da7c8/54efcde873939e47-bb/s540x810/e5fa52740daa0d193d09c929b7d2fef09fcd863e.gifv?text=First slide&bg=f5f5f5"
          alt="First slide"
        />
        <Carousel.Caption>
         <a href="https://github.com"> Minion gru </a>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thumbs.gfycat.com/SkeletalAssuredBedbug-size_restricted.gif?text=Second slide&bg=eee"
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
          src="https://media1.giphy.com/media/pL6mkjytFkTlekNMtM/giphy.gif?cid=ecf05e47c1nj5qlax4tbpq6ewfw5ht15ifgj40qaupbsuilm&rid=giphy.gif&ct=g?text=third slide&bg=e5e5e5"
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
