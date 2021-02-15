import React from 'react'
import Filter from './assets/svg/filter (1).svg'

export default function Search({ items }) {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = items.filter(user => {

            return user.username.toLowerCase().includes(value);
        });
        // dataLoad = filter
        // setUsers(dataLoad)
        // update({
        //   data: filter,
        //   active: 0,
        //   term: value
        // });

    };
    console.log(this)

    return (
        // <div>
        <div className="search-form inner">
            <div className="search-form__field">
                <input type="text" placeholder="Поиск по имени или e-mail" onChange={dataSearch}></input>
            </div>
            <div className="search-form__clear-btn">
                <img src={Filter} alt="img" />
                <span className="text">Очистить фильтр</span>
            </div>
        </div>
        // </div>
    )
}
