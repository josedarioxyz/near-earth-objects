import React from 'react';

const ApproachData = ({ data }) => {
  const {
    close_approach_date,
    relative_velocity,
    miss_distance,
    orbiting_body
  } = data;
  return (
    <dl>
      <dt>Close Approach Data:</dt>
      <dd>
        <table className="table table-sm table-striped table-dark">
          <tbody>
            <tr>
              <th scope="row">Date Nearest</th>
              <td>{close_approach_date}</td>
            </tr>
            <tr>
              <th scope="row">Relative Velocity</th>
              <td>{relative_velocity.kilometers_per_hour} km/h</td>
            </tr>
            <tr>
              <th scope="row">Miss Distance</th>
              <td>{miss_distance.kilometers} km</td>
            </tr>
            <tr>
              <th scope="row">Orbiting Body</th>
              <td>{orbiting_body}</td>
            </tr>
          </tbody>
        </table>
      </dd>
    </dl>
  );
};

export default ApproachData;
