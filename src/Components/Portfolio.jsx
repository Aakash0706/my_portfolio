/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "mouse with books and keyboard & a pen.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "GEMINI PRO 1.5 CLONE (React.js)",
    description:
      "Built a React.js project in 4 days that replicates Gemini's chat application interface using the Gemini API.",
    url: "https://geminiweb.netlify.app/",
  },
  {
    title: "FOOD-CRAVE (React.js)",
    description:
      "Developed the front-end for a food delivery platform using React.js, improved page load speed by 40%, increasing customer retention by 25%.",
    url: "https://crave-food.netlify.app/",
  },
  {
    title: "E-commerce Website",
    description:
      "It is a static website developed using html, css, javascript.",
    url: "https://jaiswal-aakash.github.io/projects.github.io/E-CommerceWebsite/",
  },
  {
    title: "Currency Converter",
    description:
      "It is a real time updated currency converter developed using html, css, javascript. I made an api call to fetch the data and it is nearly accurate.",
    url: "https://jaiswal-aakash.github.io/projects.github.io/currencyConverter/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ marginLeft: "18px", height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
