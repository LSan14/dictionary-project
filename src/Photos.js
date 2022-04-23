import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section>
        <div className="Photos">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      className="img-fluid"
                      alt={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
