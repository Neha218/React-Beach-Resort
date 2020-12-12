import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero
        children={
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at $299"
            children={
              <Link to="/rooms" className="btn-primary">
                our rooms
              </Link>
            }
          />
        }
      />
      <Services />
    </>
  );
};

export default Home;
