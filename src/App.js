import React from 'react';
import axios from 'axios'

import UserList from './UserList';
import Search from './Search';
import ClearButton from './ClearButton';
import Pagination from './Pagination';

import './App.scss';

export default function App() {

    const [users, setUsers] = React.useState([])
    const [init, setInit] = React.useState([])

    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [usersPerPage] = React.useState(5);

    const [active, setActive] = React.useState(true)
    const [visibleClr, setVisibleClr] = React.useState(false)

    const [activePage, setActivePage] = React.useState(1);

    React.useEffect(() => {
        setLoading(true);
        axios.get('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
            .then(({ data }) => {
                setUsers(data);
                setInit(data);
                setLoading(false);
            })
    }, []);

    const indexLastUser = currentPage * usersPerPage;
    const indexFirstUser = indexLastUser - usersPerPage;
    const currentUsers = users.slice(indexFirstUser, indexLastUser);

    //Change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        setActivePage(pageNumber);
        setActive(false)
    }

    const clear = () => {
        const clr = init.sort((a, b) => a.id - b.id)
        setUsers(clr)
        document.getElementsByTagName('input')[0].value = ''
        setActive(false)
        setVisibleClr(false)
        // setActivePage(1)
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
        const a = document.getElementsByClassName('active')[0];
        paginate(1)

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
                items={currentUsers}
                refresh={setUsers}
                lastUser={indexLastUser}
                all={users}
                active={active}
                onActive={refreshActiveSort}
                visibleClr={visibleClearBtn}
                loading={loading}
            />
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={users.length}
                paginate={paginate}
                activePage={activePage}
            />
        </div >
    )
}
