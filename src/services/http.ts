import axios, {
  AxiosInstance,
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig
} from 'axios'

import { errorHandler } from './error'

export class HttpClient {
  protected readonly instance: AxiosInstance

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    })

    this.initializeResponseInterceptor()
  }

  private initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this.handleResponse,
      this.handleError
    )
  }

  private handleResponse = (res: AxiosResponse) => res

  protected handleError = async (error: AxiosError) => {
    await errorHandler(error)

    return Promise.reject(error)
  }

  get<T>(url: string, config: AxiosRequestConfig = {}) {
    return this.instance.get<T>(url, config)
  }

  put<T>(url: string, config: AxiosRequestConfig = {}) {
    return this.instance.get<T>(url, config)
  }

  post<T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
    return this.instance.post<T>(url, body, config)
  }

  delete<T>(url: string, config: AxiosRequestConfig = {}) {
    return this.instance.delete<T>(url, config)
  }
}
