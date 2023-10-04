import type { AxiosInstance ,AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios"
import axios from "axios";

interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: {
        requsetSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig,
        requestFailureFn?: (err: any) => any,
        responseSuccessFn?: (res: T) => T,
        responseFailureFn?: (err: any) => any
    }
}

class HyRequest {
    instance: AxiosInstance;
    // request实例 => axios实例
    constructor(config: HyRequestConfig){
        this.instance = axios.create(config);
        // 创建一个全局的拦截器
        this.instance.interceptors.request.use(config => {
            console.log('全局请求成功拦截器')
            return config;
        }, err => {
            console.log('全局请求失败拦截器')
            return err;
        })

        this.instance.interceptors.response.use(config => {
            console.log('全局响应成功拦截器')
            return config.data;
        }, err => {
            console.log('全局响应失败拦截器')
            return err;
        })

        // 针对特定的实例进行拦截
        this.instance.interceptors.request.use(
            config.interceptors?.requsetSuccessFn, 
            config.interceptors?.requestFailureFn
        )

        this.instance.interceptors.response.use(
            config.interceptors?.responseFailureFn, 
            config.interceptors?.responseFailureFn
        )
    }

    // 对axios的request方法进行二次封装，好处是万一以后这个方法不维护了或者改了，那么就只要修改此处就行了
    request<T>(config: HyRequestConfig<T>){
        return new Promise<T>((resolve, reject) => {
            // 针对某一个特定url请求的拦截，需自定义封装
            if (config.interceptors?.requsetSuccessFn){
                config = config.interceptors.requsetSuccessFn(config as any);
            }

            this.instance.request<any, T>(config).then(res => {
                if (config.interceptors?.responseSuccessFn){
                    res = config.interceptors.responseSuccessFn(res);
                }
                resolve(res)
            }).catch(err => {
                reject(err);
            })
        })
    }

    get<T = any>(config: HyRequestConfig<T>){
        return this.request({...config, method: 'GET'});
    }

    post<T = any>(config: HyRequestConfig<T>){
        return this.request({...config, method: 'POST'});
    }
}


export default HyRequest