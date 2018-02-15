import axios from 'axios';
import {
  getNeosRequest,
  getNeosReceive,
  getNeosFailure
} from '../actions/actionCreators';
import { dateInNums } from '../App';

const getNeos = () => (dispatch) => {
  dispatch(getNeosRequest());

  const baseURL = 'https://api.nasa.gov/neo/rest/v1/feed?';
  const myAPIKey = 'sePtlOTj7sU6MNA4atR3wWkUJQ08xno1dllnS6gf';

  axios.get(`${baseURL}end_date=${dateInNums}&api_key=${myAPIKey}`)
    .then(
      (response) => {
        dispatch(getNeosReceive(response.data.near_earth_objects[dateInNums]));
      },
      (error) => {
        dispatch(getNeosFailure(error.message));
      }
    );
};

export default getNeos;
