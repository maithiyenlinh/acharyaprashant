import axios from "axios";

export const getData = async (url) => {
    return await axios.get(url);
}