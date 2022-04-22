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
                <div className="col" key={index}>
                  <a href={photo.src.original} ref="noreferrer">
                    <img src={photo.src.landscape} className="img-fluid" />
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
