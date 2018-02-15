import React from 'react';
import Divider from './Divider';

const Item = () => {
  return (
    <div className='container'>
      <div className="item card">
        <div className="card-body">
          <a href='http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3799426'>
            <h4 className='item-name'>Name: (2016 CN248)</h4>
            <h6 className='item-id'>ID: 3799426</h6>
          </a>
          <Divider />
          <div className='row text-center'>
            <div className='col'>
              <dl>
                <dt>Potentially Hazardous:</dt>
                <dd>False</dd>
                <dt>Absolute Magnitude (H):</dt>
                <dd>22.804</dd>
                <dt>Estimated Diameter:</dt>
                <dd>80422</dd>
              </dl>
            </div>
            <div className='col'>
            <dl>
              <dt>Close Approach Data:</dt>
              <dd>
                <table className="table table-sm table-striped table-dark">
                  <tbody>
                    <tr>
                      <th scope="row">Date Nearest</th>
                      <td>2018-02-14</td>
                    </tr>
                    <tr>
                      <th scope="row">Relative Velocity</th>
                      <td>53205.931152634 kph</td>
                    </tr>
                    <tr>
                      <th scope="row">Miss Distance</th>
                      <td>5583401 km</td>
                    </tr>
                    <tr>
                      <th scope="row">Orbiting Body</th>
                      <td>Earth</td>
                    </tr>
                  </tbody>
                </table>
              </dd>
            </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
