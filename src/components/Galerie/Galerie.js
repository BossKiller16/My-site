import React from "react";
import "./galerie.css";

const galerie = [
  {
    name: "krepelka",
    src:
      "https://www.albert.cz/imgm/YTIwNzMtc3F1YXJlQXJlYXxhMjU4MDMxfGE5MTMxMHxhMTkwMTU18hXD5A/421270.jpg",
    id: 1,
  },
  {
    name: "vajicko",
    src:
      "https://www.krepelkajaponska.cz/wp-content/uploads/2012/08/IMG_8658.jpg",
    id: 2,
  },
  {
    name: "kure",
    src:
      "https://www.albert.cz/imgm/YTY5MDE1LXNxdWFyZUFyZWF8YTEzMzY3MnxhOTEzMTB8YTE5MDE1NQUOnog/16-12-032.jpg",
    id: 3,
  },
  {
    name: "kuratko",
    src:
      "https://www.krepelkajaponska.cz/wp-content/uploads/2012/08/IMG_8657.jpg",
    id: 4,
  },
  {
    name: "nwm",
    src:
      "https://c1.primacdn.cz/sites/default/files/styles/scale_desktop/public/a768d4bf/3794513-17-04-25sef_1056_fotor.jpg?itok=KM9bWkfu",
    id: 5,
  },
];

function Galerie() {
  return (
    <div className="galerie">
      <h1 className="nadpis">Galerie</h1>

      {galerie.map((fotka) => {
        const { name, id, src } = fotka;
        return (
          <div className="block" key={id}>
            <img className="img" src={src} alt={name} />
          </div>
        );
      })}
    </div>
  );
}

export default Galerie;
