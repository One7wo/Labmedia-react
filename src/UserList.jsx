import React from 'react'
import UserInfo from './UserInfo'

export default function UserList({ items, active, onActive, visibleClr }) {

    const [toggleRatingActive, setToggleRatingActive] = React.useState(null)
    const [toggleDate, setToggleDate] = React.useState(null)

    return (
        <div>
            <div className="sort-buttons inner">
                <div className="sort-buttons__text text">Сортировка:</div>
                <div
                    onClick={() => {
                        if (toggleDate) {
                            items.sort((a, b) => {
                                return b.registration_date.split('T')[0].split('-').join('') - a.registration_date.split('T')[0].split('-').join('')
                            })
                            setToggleDate(!toggleDate)
                        }
                        else {
                            items.sort((a, b) => a.registration_date.split('T')[0].split('-').join('') - b.registration_date.split('T')[0].split('-').join(''))
                            setToggleDate(!toggleDate)
                        }
                        setToggleRatingActive(null)
                        visibleClr()
                        onActive()
                    }}
                    className={`sort-buttons__date text ${toggleDate != null && active ? 'active' : ''}`}> Дата регистрации</div>
                <div
                    onClick={() => {
                        if (toggleRatingActive) {
                            items.sort((a, b) => b.rating - a.rating)
                            setToggleRatingActive(!toggleRatingActive)
                        }
                        else {
                            items.sort((a, b) => a.rating - b.rating)
                            setToggleRatingActive(!toggleRatingActive)
                        }
                        setToggleDate(null)
                        visibleClr()
                        onActive()
                    }}
                    className={`sort-buttons__rating text ${toggleRatingActive != null && active ? 'active' : ''} `} >Рейтинг</div>
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
