import React from 'react'

export default function UserInfo({ username, email, registration_date, rating }) {
    return (
        <div className="users-table__user-info">
            <div className="name">{username}</div>
            <div className="email text">{email}</div>
            <div className="date text">{registration_date.split('T')[0]}</div>
            <div className="rating text">{rating}</div>
            <div className="delete-btn">&#10006;</div>
        </div>
    )
}
