import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from "../../assets/b1.jpg";
import bannerImg2 from "../../assets/b2.jpg";
import bannerImg3 from "../../assets/b3.jpg";

import "./style.css";

const Banner = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
      >
        <div>
          <img className="w-auto h-auto" src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
