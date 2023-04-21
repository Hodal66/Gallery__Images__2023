import React, { useState } from "react";
import imgA from "../Images/A.jpg";
import imgB from "../Images/B.jpg";
import imgC from "../Images/C.jpg";
import imgD from "../Images/D.jpg";
import imgE from "../Images/E.jpg";
import imgF from "../Images/F.jpg";
import imgH from "../Images/H.jpg";
import imgG from "../Images/G.jpg";
import imgJ from "../Images/J.jpg";
import imgK from "../Images/K.jpg";
import "./gallery.css";
import CloseIcon from "@mui/icons-material/Close";
const data = [
  {
    id: 1,
    imageSrc: imgA,
  },
  {
    id: 2,
    imageSrc: imgB,
  },
  {
    id: 3,
    imageSrc: imgC,
  },
  {
    id: 4,
    imageSrc: imgD,
  },
  {
    id: 5,
    imageSrc: imgE,
  },
  {
    id: 6,
    imageSrc: imgF,
  },
  {
    id: 7,
    imageSrc: imgG,
  },
  {
    id: 8,
    imageSrc: imgJ,
  },
  {
    id: 9,
    imageSrc: imgK,
  },
  {
    id: 10,
    imageSrc: imgH,
  },
];

function Gallery() {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImage = (imageSource) => {
    setTempImgSrc(imageSource);
    setModel(true);
  };
  return (
    <div className="container">
      <div className={model ? "model open" : "model"}>
        <img src={tempImgSrc} alt="clicked ImageId" />
        <CloseIcon onClick={() => setModel(false)} className="svg" />
      </div>
      <div className="gallery">
        {data.map((item, id) => {
          return (
            <div
              className="pics"
              key={id}
              onClick={() => getImage(item.imageSrc)}
            >
              <img
                src={item.imageSrc}
                alt="imageContent"
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Gallery;
