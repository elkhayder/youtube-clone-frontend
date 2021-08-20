import React from "react";
import VideoCard from "../components/VideoCard";

type HomePagePorps = {};

const HomePage: React.FC<HomePagePorps> = () => {
   return (
      <div>
         <VideoCard />
      </div>
   );
};

export default HomePage;
