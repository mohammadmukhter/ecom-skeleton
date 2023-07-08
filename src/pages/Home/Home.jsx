import Banner from "../../components/Banner/Banner";
import BannerRight from "../../components/BannerRight/BannerRight";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row gap-4 my-4 mx-2">
        <div className="w-full md:w-7/12">
          <Banner></Banner>
        </div>
        <BannerRight></BannerRight>
      </div>

      <h1>this is home or landing page</h1>
    </div>
  );
};

export default Home;
