import { http } from "./http"
export default {
    getlAllBreeds: (params?: object) => {
        return http.get('breeds', { params: params })
    },
    getOneBreed: (breed: string | string[]) => {
        return http.get(`breeds/${breed}`)
    },
    getImagesBreed: (params: object) => {
        return http.get('images/search', { params: params })
    }
}