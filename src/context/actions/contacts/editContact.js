import {EDIT_CONTACT_FAIL, EDIT_CONTACT_LOADING, EDIT_CONTACT_SUCCESS} from '../../../constants/actionTypes'
import axiosInstance from "../../../helpers/axiosInstance"

export default (form, id) => (dispatch) => onSuccess => {
    const requestPayload = {
        country_code: form.countryCode || '',
        first_name: form.firstName || '',
        last_name: form.lastName || '',
        phone_number: form.phoneNumber || '',
        contact_picture: form.contactPicture || null,
        is_favorite: form.isFavorite || false,
    };
    dispatch({
        type: EDIT_CONTACT_LOADING,
    });
    axiosInstance.put(`/contacts/${id}`, requestPayload).then((res) => {
        dispatch({
            type: EDIT_CONTACT_SUCCESS,
            payload: res.data,
        });

        console.log('res.data',res.data);

        onSuccess(res.data);
    }).catch( (err) => {
        dispatch({
            type: EDIT_CONTACT_FAIL,
            payload: err.response? err.response.data: {error: "Something went wrong, try again."},
        });
    })
}