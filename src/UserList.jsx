import React from 'react'
import UserInfo from './UserInfo'

export default function UserList({ items }) {
    return (
        <div className="users-table inner">
            <div className="users-table__header">
                <div className="name text">Имя пользователя</div>
                <div className="email text">Email</div>
                <div className="date text">Дата регистрации</div>
                <div className="rating text">Рейтинг</div>
                <div className="remove">&#10006;</div>
            </div>
            {
                items.map(obj => <UserInfo
                    key={obj.id}
                    // name={obj.username}
                    // email={obj.email}
                    // date={obj.registration_date}
                    // rating={obj.rating}
                    {...obj}
                />)
            }


        </div>
    )
}
