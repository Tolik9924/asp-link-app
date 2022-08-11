import axios from "axios"
import { API_BASE_URL } from "../config/config"
import { addNewLink } from "../store/linkReducer"

export const addLink = (link) => {
    return async (dispatch) => {
        axios.post(`${API_BASE_URL}${link.linkName}`)
        .then(res => {
            link.linkName = res.data.result.short_link;
            dispatch(addNewLink(link))
            console.log('link', res.data.result.short_link);
        })
    }
}
