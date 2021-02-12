import React from 'react'

// import './App.css'
import './App.scss'
import Filter from './assets/svg/filter (1).svg'

export default function App() {
    return (
        <div>
            <div className="header__title inner">Список пользователей</div>
            <div className="search-form inner">
                <div className="search-form__field">
                    <input type="text" placeholder="Поиск по имени или e-mail"></input>
                </div>
                <div className="search-form__clear-btn">
                    <img src={Filter} alt="img" />
                    <span className="text">Очистить фильтр</span>
                </div>
            </div>
            <div className="sort-buttons inner">
                <div className="sort-buttons__text text">Сортировка:</div>
                <div className="sort-buttons__date text active">Дата регистрации</div>
                <div className="sort-buttons__rating text">Рейтинг</div>
            </div>
            <div className="users-table inner">
                <div className="users-table__header">
                    <div className="name text">Имя пользователя</div>
                    <div className="email text">Email</div>
                    <div className="date text">Дата регистрации</div>
                    <div className="rating text">Рейтинг</div>
                    <div className="remove">&#10006;</div>
                </div>
                <div className="users-table__user-info">
                    <div className="name">Username</div>
                    <div className="email text">mail@mail.ru</div>
                    <div className="date text">11.11.1111</div>
                    <div className="rating text">228</div>
                    <div className="delete-btn">&#10006;</div>
                </div>
                <div className="users-table__user-info">
                    <div className="name">Username</div>
                    <div className="email text">mail@mail.ru</div>
                    <div className="date text">11.11.1111</div>
                    <div className="rating text">228</div>
                    <div className="delete-btn">&#10006;</div>
                </div>
                <div className="users-table__user-info">
                    <div className="name">Username</div>
                    <div className="email text">mail@mail.ru</div>
                    <div className="date text">11.11.1111</div>
                    <div className="rating text">228</div>
                    <div className="delete-btn">&#10006;</div>
                </div>
                <div className="users-table__user-info">
                    <div className="name">Username</div>
                    <div className="email text">mail@mail.ru</div>
                    <div className="date text">11.11.1111</div>
                    <div className="rating text">228</div>
                    <div className="delete-btn">&#10006;</div>
                </div>
                <div className="users-table__user-info">
                    <div className="name">Username</div>
                    <div className="email text">mail@mail.ru</div>
                    <div className="date text">11.11.1111</div>
                    <div className="rating text">228</div>
                    <div className="delete-btn">&#10006;</div>
                </div>
            </div>
        </div >
    )
}
