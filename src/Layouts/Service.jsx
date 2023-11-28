import React from "react";
import logo from "./Image2.png";

export default function Service() {
  return (
    <div className="col-lg-9 mx-auto py-4">
      <div className="row g-5">
        <div className="col-lg-6">
          <div className="card">
            <div
              className="img-responsive img-responsive-21x9 card-img-top rounded-3"
              style={{
                position: "relative",
                height: "150px",
                minHeight: "150px",
                maxHeight: "150px",
                backgroundSize: "cover",
                backgroundImage: "url(" + logo + ")",
              }}
            ></div>
          </div>
          <div className="card-body">
            <div className="card-text p-4 text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos
              explicabo incidunt provident architecto quidem, quod, similique
              magni quam odit
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="card">
            <div
              className="img-responsive img-responsive-21x9 card-img-top rounded-3"
              style={{
                position: "relative",
                height: "150px",
                minHeight: "150px",
                maxHeight: "150px",
                backgroundSize: "cover",
                backgroundImage: "url(" + logo + ")",
              }}
            ></div>
          </div>
          <div className="card-body">
            <div className="card-text p-4 text-center ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi eos
              explicabo incidunt provident architecto quidem, quod, similique
              magni quam odit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
