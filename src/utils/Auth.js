import { authConfig } from "./constants";
class Auth {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  _handlingServerResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }
  register(email, password) {
    return fetch(`${this._baseUrl}signup`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  login(email, password) {
    return fetch(`${this._baseUrl}signin`, {
      headers: this._headers,
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
  checkToken(jwt) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((res) => {
      return this._handlingServerResponse(res);
    });
  }
}

const auth = new Auth(authConfig);

export default auth;
