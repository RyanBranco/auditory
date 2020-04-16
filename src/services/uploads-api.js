const BASE_URL = "/api/uploads"

export function getUploads() {
    return fetch(BASE_URL)
    .then(res => res.json());
}