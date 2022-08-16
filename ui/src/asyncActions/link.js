import axios from "axios"
import { ASD_API_BASE_URL, ASD_API_GET_URL } from "../config/config"
import { addNewLink } from "../store/linkReducer"
import { addValidLink } from "../store/longLinkReducer"

export const addLink = (link) => {
    return (dispatch) => {
        axios.post(`${ASD_API_BASE_URL}`, {longUrl: link.linkName})
        .then(res => {
            link.linkName = res.data.shortUrl;
            link.urlCode = res.data.urlCode;
            dispatch(addNewLink(link))
        })
        .catch(e => {
            console.log(e.message);
        });
    }
}

export const addLongLink = (code) => {
    return (dispatch) => {
        axios.get(`${ASD_API_GET_URL}${code.code}`)
        .then(res => {
            code.url = res.data;
            dispatch(addValidLink(code));
        });
    }
} 
