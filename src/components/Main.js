import React, { useContext } from "react";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="Аватар профиля"
            className="profile__avatar"
          />
          <div
            className="profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></div>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{currentUser.name}</h1>
          <button
            type="button"
            aria-label="Редактировать профиль"
            className="profile__edit-button"
            onClick={props.onEditProfile}
          ></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          aria-label="добавить новое место"
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        <ul className="cards__list">
          {props.cards.map((card) => (
            <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike}  onCardDelete={props.onCardDelete} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
