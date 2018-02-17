import React from 'react';
import Table from './Table';
import Divider from './Divider';

const Item = ({ neo }) => {
  const {
    neo_reference_id,
    name,
    nasa_jpl_url,
    absolute_magnitude_h,
    estimated_diameter,
    is_potentially_hazardous_asteroid,
    close_approach_data
  } = neo;
  const {
    estimated_diameter_min,
    estimated_diameter_max
  } = estimated_diameter.meters;
  return (
    <div className='container'>
      <div className="item card">
        <div className="card-body">
            <h4>
              <a className='item-name' href={nasa_jpl_url}>
                Name: {name}
              </a>
            </h4>
          <h6 className='item-id'>Reference ID: {neo_reference_id}</h6>
          <Divider />
          <div className='row text-center'>
            <div className='col'>
              <dl>
                <dt>Potentially Hazardous:</dt>
                <dd>{is_potentially_hazardous_asteroid.toString()}</dd>
                <dt>Absolute Magnitude (H):</dt>
                <dd>{absolute_magnitude_h}</dd>
                <dt>Estimated Diameter:</dt>
                <dd>
                  {estimated_diameter_min} m
                  <br /> ~ <br />
                  {estimated_diameter_max} m
                </dd>
              </dl>
            </div>
            <div className='col'>
              <Table data={close_approach_data[0]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
