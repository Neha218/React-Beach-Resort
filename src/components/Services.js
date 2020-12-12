import { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "../components/Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente?"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente?"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente?"
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        Description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sapiente?"
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div class="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.Description}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
