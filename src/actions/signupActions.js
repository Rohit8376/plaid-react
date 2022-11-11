import { SIGNUP_USER } from './types';
import axios from 'axios';

export const signupUser = (email, password) => dispatch => {
    axios.post('http://34.235.139.150/register',{email, password})
         .then(res => {
                if (res.status === 200){
                    dispatch({
                            type: SIGNUP_USER,
                            payload: {formCompleted: true}
                        })
                }
    });
}
