const BASE_URL = "/api/uploads"

export function getUploads() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function getUserUploads(userId) {
    return fetch(`${BASE_URL}/myuploads/${userId}`)
    .then(res => res.json())
}

export function deleteOne(id) {
    return fetch(`${BASE_URL}/myuploads/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  export function getSpecificUpload(id) {
    return fetch(`${BASE_URL}/myupload/${id}`)
    .then(res => res.json())
  }