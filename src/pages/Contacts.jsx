import React from "react";

export default function Contacts() {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Կոնտակտներ</h1>

        <ul className="content-list">
          <li className="content-list__item">
            <h2 className="title-2">Բնակավայր</h2>
            <p>Սևան, Հայաստան</p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+37477190212">+374 (77) 190-212</a>
            </p>
          </li>
          <li className="content-list__item">
            <h2 className="title-2">Email</h2>
            <p>
              <a href="mailto:nadtyom@gmail.com">nadtyom@gmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
