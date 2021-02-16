import React from 'react';
import axios from 'axios'

import UserList from './UserList';
import Search from './Search';
import ClearButton from './ClearButton';

import './App.scss';




export default function App() {

    const [users, setUsers] = React.useState([])
    const [init, setInit] = React.useState([])

    const [active, setActive] = React.useState(true)
    const [visibleClr, setVisibleClr] = React.useState(false)

    React.useEffect(() => {
        axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
            .then(({ data }) => {
                setUsers(data)
                setInit(data)
            })

        // fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
        //     .then((resp) => resp.json())
        //     .then(json => {
        //         setUsers(json);
        //     })
    }, []);

    const clear = () => {
        const clr = init.sort((a, b) => a.id - b.id)
        setUsers(clr)
        document.getElementsByTagName('input')[0].value = ''
        setActive(false)
        setVisibleClr(false)
    }

    const refreshActiveSort = () => {
        setActive(true)
    }

    const visibleClearBtn = () => {
        setVisibleClr(true)
    }

    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filterEmail = init.filter(email => {

            return email.email.toLowerCase().includes(value);
        });

        const filterUsers = init.filter(user => {

            return user.username.toLowerCase().includes(value);
        });

        const filter = [...new Set([...filterUsers, ...filterEmail])]
        setUsers(filter)
        const a = document.getElementsByClassName('active')[0]

        value.length > 0 || a ? visibleClearBtn() : setVisibleClr(false)
    };

    return (

        <div>
            <div className="header__title inner">Список пользователей</div>
            <div className="search-form inner">
                <Search search={dataSearch} />
                <ClearButton clear={clear} visible={visibleClr} />
            </div>
            <UserList
                items={users}
                active={active}
                onActive={refreshActiveSort}
                visibleClr={visibleClearBtn}
            />
        </div >
    )
}
