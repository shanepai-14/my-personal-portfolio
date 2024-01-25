import React from "react";

const education = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <p>QUALIFICATION</p>
            <h3>My Education</h3>
            <ul className="educ-list mb-5">
              <li className="shadow p-5 mb-4">
                <span>
                  <p>
                    <strong>Davao Vision College</strong>(2022-2023)
                  </p>
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a libero urna. Pellentesque ac odio purus. Integer finibus
                  mauris a ligula interdum auctor. Vivamus vestibulum pharetra
                  odio, et consectetur nunc consectetur a.
                </p>
                <button className="btn btn-primary rounded-pill">
                  Diploma in Information Tech
                </button>
              </li>
              <li className="shadow p-5 mb-4">
                {" "}
                <p>
                  <strong>Davao Vision College</strong>(2022-2023)
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a libero urna. Pellentesque ac odio purus. Integer finibus
                  mauris a ligula interdum auctor. Vivamus vestibulum pharetra
                  odio, et consectetur nunc consectetur a.
                </p>
                <button className="btn btn-primary rounded-pill">
                  Diploma in Information Tech
                </button>
              </li>
              <li className="shadow p-5 mb-4">
                {" "}
                <p>
                  <strong>Davao Vision College</strong>(2022-2023)
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  a libero urna. Pellentesque ac odio purus. Integer finibus
                  mauris a ligula interdum auctor. Vivamus vestibulum pharetra
                  odio, et consectetur nunc consectetur a.
                </p>
                <button className="btn btn-primary rounded-pill">
                  Diploma in Information Tech
                </button>
              </li>
            </ul>
          </div>
          <div className="col">
            <p>CERTIFICATIONS</p>
            <h3>My Trainings</h3>
            <ul>
              <li>DICT</li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default education;
