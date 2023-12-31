import React from "react";
import objectiveImg from "../Assests/objective-img.jpg";

const Objective = () => {
  return (
    <section className="bg-primary-subtle">
      <div className="container-lg py-5 d-none d-sm-block">
        <div className="row">
          <div className="col-8 col-md-5">
            <div className="objective">
              <h6 className="fw-bold mb-4">
                We develop high quality Web & Mobile Applications
              </h6>
              <p className="text-muted">
                Our team is well vast in software development<br></br>and is
                ready to help develop the applications<br></br>of your choice.
              </p>
              <p className="text-muted">
                We take responsibility for building custom<br></br>software
                solutions that caters for automation<br></br>of your business
                processes and improve<br></br>efficiency.
              </p>
            </div>
          </div>
          <div className="col-8 col-md-7">
            <div className="objective-img">
              <img
                height={350}
                width="100%"
                src={objectiveImg}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-lg pt-5 pb-3 d-block d-sm-none">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-5">
            <div className="objective">
              <h5 className="fw-bold mb-4">
                We develop high quality Web & Mobile Applications
              </h5>
              <p className="text-muted">
                Our team is well vast in software development<br></br>and is
                ready to help develop the applications<br></br>of your choice.
              </p>
              <p className="text-muted">
                We take responsibility for building custom<br></br>software
                solutions that caters for automation<br></br>of your business
                processes and improve<br></br>efficiency.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-7 order-first mb-4">
            <div className="objective-img">
              <img
                height={350}
                width="100%"
                src={objectiveImg}
                alt="..."
                className="rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objective;
