import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const dishes = [
    {
        photo: './pizza.jpg',
        name: 'pizza',
        price: 200,
        className: 'selected-table'
    },
    {
        photo: './salad.jpg',
        name: 'salad',
        price: 300,
        className: ''
    },
    {
        photo: './soup.jpg',
        name: 'soup',
        price:100,
        className: ''
    }
]



function MenuItem(props) {
    
    const [className, setClassName] = React.useState('table-item');

    return (<li className={className} onClick={() => {
        if(className === 'table-item selected-table') {
            setClassName('table-item')
        } else {
            setClassName('table-item selected-table')
        }
    }}>
        <img className='table-photo' src={require(`${props.photo}`)}/>
        <h3>{props.name}</h3> 
        <h4>{props.price}$</h4>
    </li>)
}

export function Menu() {

    const [tables, setTables] = useState([]);

    useEffect(() => {
        // Виконання HTTP-запиту до фейкового API
        axios.get('http://localhost:3001/dishes')
        .then(response => {
        // Оновлення стану cars з отриманими даними
        setTables(response.data);
        })
        .catch(error => {
        // Обробка помилки, якщо запит не вдалося виконати
        console.error('Помилка отримання даних з API:', error);
        });
        }, []);

    return (
        <div className='table-content'>
            <ul>
                {dishes.map(dish =>
                    <MenuItem onClick={() => {
                        if(dish.className === 'table-item selected-table') {
                            dish.className = 'table-item'
                        } else {
                            dish.className = 'table-item selected-table'
                        }
                    }} photo={dish.photo} id={dish.id} name={dish.name} price={dish.price}/>
                )
                }
            </ul>

            <Link to="/date_time_selection" >
                <button className="nav-button">
                    Back
                </button>
            </Link>
            <Link to="/success" >
                <button className="nav-button">
                    Next
                </button>
            </Link>
        </div>
    )
}