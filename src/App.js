import React from 'react'

import UserList from './UserList'

import './App.scss'
import Filter from './assets/svg/filter (1).svg'

export default function App() {
    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
            .then((resp) => resp.json())
            .then(json => {
                setUsers(json);
            })
    }, []);
    console.log(users)
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
            <UserList items={users} />
        </div >
    )
}
