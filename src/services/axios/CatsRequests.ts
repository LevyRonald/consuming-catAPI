import { http } from "./http"
export default {
    getlAllBreeds: (params?: object) => {
        return http.get('breeds', { params: params })
    }
}