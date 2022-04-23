import React from "react";
import "./Banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUAAACnej3aAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, sit
          eaque fugiat vero expedita sint distinctio veniam repudiandae ipsa
          itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Beatae, sit eaque fugiat vero expedita sint distinctio veniam
          repudiandae ipsa itaque? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Beatae, sit eaque fugiat vero expedita sint
          distinctio veniam repudiandae ipsa itaque?`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeButtom"></div>
    </header>
  );
};

export default Banner;
