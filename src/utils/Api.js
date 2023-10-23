import { apiConfig } from "./constants";

class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  getProfile() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  _handlingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }
  createCard(data) {
    return fetch(`${this._baseUrl}cards`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  deleteCard(id) {
    return fetch(`${this._baseUrl}cards/${id}`, {
      headers: this._headers,
      method: "DELETE",
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
   changeLikeCardStatus(id, isLiked) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._headers,
    })
    .then((res) => {
      return this._handlingServerResponse(res);
    });
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify(avatar),
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  updateUser(data) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
}

const api = new Api(apiConfig);

export default api;
