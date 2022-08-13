import axios from "axios"
import { ASD_API_BASE_URL } from "../config/config"
import { addNewLink } from "../store/linkReducer"

export const addLink = (link) => {
    return (dispatch) => {
        console.log('post');
        axios.post(`${ASD_API_BASE_URL}`, {longUrl: link.linkName})
        .then(res => {
            console.log(res);
            link.linkName = res.data.shortUrl;
            link.urlCode = res.data.urlCode;
            dispatch(addNewLink(link))
            console.log('link', res.data.shortUrl);
        })
        .catch(e => {
            console.log(e.message);
        });
    }
}
