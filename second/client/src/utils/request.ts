import {RequestMethod, ResponseType} from "../types/request";
import axios from "axios";
const Request = async (method: RequestMethod, path: string, params: Record<string, string> = {}): Promise<ResponseType> => {
    const options = {
        url: path,
        method: method,
        data: params
    }

    return axios
        .request(options)
        .then((res: any) => {
            return res
        })
        .catch((error: any) => {
            return error.response.data
        })
}
export default Request