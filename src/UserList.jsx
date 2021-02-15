import React from 'react'
import UserInfo from './UserInfo'

export default function UserList({ items }) {
    const [list, setList] = React.useState(items)
    const [toggleRating, setToggleRating] = React.useState(null)
    const [toggleDate, setToggleDate] = React.useState(null)

    return (
        <div>
            <div className="sort-buttons inner">
                <div className="sort-buttons__text text">Сортировка:</div>
                <div
                    onClick={() => {
                        if (toggleDate) {
                            setList(items.sort((a, b) => {
                                return b.registration_date.split('T')[0].split('-').join('') - a.registration_date.split('T')[0].split('-').join('')
                            }))
                            setToggleDate(!toggleDate)
                        }
                        else {
                            setList(items.sort((a, b) => a.registration_date.split('T')[0].split('-').join('') - b.registration_date.split('T')[0].split('-').join('')))
                            setToggleDate(!toggleDate)
                        }
                        setToggleRating(null)
                    }}
                    className={`sort-buttons__date text ${toggleDate != null ? 'active' : ''}`}> Дата регистрации</div>
                <div
                    onClick={() => {
                        if (toggleRating) {
                            setList(items.sort((a, b) => b.rating - a.rating))
                            setToggleRating(!toggleRating)
                        }
                        else {
                            setList(items.sort((a, b) => a.rating - b.rating))
                            setToggleRating(!toggleRating)
                        }
                        setToggleDate(null)
                    }}
                    className={`sort-buttons__rating text ${toggleRating != null ? 'active' : ''}`} >Рейтинг</div>
            </div>
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
                        {...obj}
                    />)
                }
            </div>
        </div>
    )
}
