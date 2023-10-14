import { BASE_URL, TIME_OUT } from './config/index';
import HyRequest from "./request";

interface ICommon{
    data: any,
    code: number,
    mp: any
}

export const hyRequest1 = new HyRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {}
})

// hyRequest1.get<ICommon>({
//     url: '',
//     params: {mvid: 5436712}
// }).then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(err);
// })
