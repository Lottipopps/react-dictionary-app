import React from "react";
import "./Pictures.css";

export default function Pictures(props) {
  if (props.pictures) {
    return (
      <div className="Pictures">
        <section>
          <div className="row">
            {props.pictures.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="img-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
