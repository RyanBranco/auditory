const BASE_URL = "/api/users/";

export function getLoggedUser(userId) {
    return fetch(BASE_URL + userId)
    .then(res => res.json());
}