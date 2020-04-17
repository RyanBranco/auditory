const BASE_URL = "/api/uploads"

export function getUploads() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function getUserUploads(userId) {
    return fetch(`${BASE_URL}/myuploads/${userId}`)
    .then(res => res.json())
}