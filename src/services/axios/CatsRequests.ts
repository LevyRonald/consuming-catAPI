import { http } from "./http"
export default {
    getlAllBreeds: () => {
        return http.get('breeds')
    }
}