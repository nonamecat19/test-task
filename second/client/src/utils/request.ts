import axios from "axios";
import {RequestMethod, RequestPath} from "../constants/Requests.ts";

export type ResponseType = {
    isError: boolean
    data: any
    errorMessage: string
    status: number
}

const Request = async (method: RequestMethod, path: RequestPath, params: Record<string, string> = {}): Promise<ResponseType> => {

    const options = {
        method: method,
        url: path,
        data: params
    }

    try {
        const response = await axios.request(options)
        return {
            isError: false,
            data: response.data,
            errorMessage: '',
            status: response.status
        }
    } catch (error: any) {
        return {
            isError: true,
            data: null,
            errorMessage: error.message,
            status: error.status
        }
    }
}
export default Request