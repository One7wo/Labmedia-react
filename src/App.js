import React from 'react';
import axios from 'axios'

import UserList from './UserList'

import './App.scss'
import Filter from './assets/svg/filter (1).svg'

export default function App() {

    const [users, setUsers] = React.useState([])
    React.useEffect(() => {
        axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
            .then(({ data }) => {
                setUsers(data)
                console.log('fetch', data)
            })

        // fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        //     .then((resp) => resp.json())
        //     .then(json => {
        //         setUsers(json);
        //     })
    }, []);

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
            <UserList items={users} />
        </div >
    )
}
