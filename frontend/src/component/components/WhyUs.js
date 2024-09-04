import React from 'react'
import Employees from "../assets/images/73503-creative-team.gif";

export default function WhyUs() {
  return (
    <div className="px-3 py-3">
      <div className="col-12 row">
        <div className="my-3 ">
          <h2 className="ps-5">Why We Are Best ?</h2>
        </div>

        <div className="col-7 mx-auto">
          <ol>
            <li className="py-2">
              <ul>
                <h5 className="fw-bold text-warning">Dedication and Hard Work</h5>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Stories of Commitment:</span>
                  Share anecdotes of employees going above and beyond in their
                  roles.
                </li>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Recognition Programs:</span>
                  Highlight any awards or recognition programs that celebrate
                  hard work.
                </li>
              </ul>
            </li>
            <li className="py-2">
              <ul>
                <h5 className="fw-bold text-warning">Skills and Expertise</h5>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Employee Spotlights:</span>
                  Feature individual employees, detailing their skills,
                  expertise, and contributions.
                </li>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Professional Development:</span>
                  Discuss the training and development opportunities provided by
                  the company and how employees have benefited.
                </li>
              </ul>
            </li>
            <li className="py-2">
              <ul>
                <h5 className="fw-bold text-warning">Teamwork and Collaboration</h5>
                <li className="py-1">
                  <spanc className="fw-bold text-secondary pe-3">Team Achievements:</spanc>
                  Showcase successful projects that were a result of excellent
                  teamwork.
                </li>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Collaboration Stories:</span>
                  Share stories of how different departments or teams have
                  worked together to achieve common goals.
                </li>
              </ul>
            </li>
            <li className="py-2">
              <ul>
                <h5 className="fw-bold text-warning">Innovation and Creativity</h5>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Innovative Projects:</span>
                  Highlight projects or ideas that employees have come up with
                  that have significantly impacted the company.
                </li>
                <li className="py-1">
                  <span className="fw-bold text-secondary pe-3">Creative Solutions:</span>
                  Share examples of creative problem-solving by employees.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="col-5 mx-auto px-5 py-5">
          <img
            src={Employees}
            alt=""
            className="image-fluid"
            height="auto"
            width="90%"
          />
        </div>

      </div>
    </div>
  );
}
