import '../App.css';
import './table2.jpg'
import React from 'react';
import { Link } from 'react-router-dom';

const tables = [
    {
        id: 1,
        photo: './table2.jpg',
        className: 'selected-table'
    },
    {
        id: 3,
        photo: './table3.jpg',
        className: ''
    }
]

function Table(props) {

    // function changeState(id) {
    //     tables.forEach(table => {
    //             table.selected = (table.id === id)
    //             if(table.id === id) {
    //                 table.className = 'selected'
    //             } else {
    //                 table.className = ''
    //             }
    //             console.log(table.selected)
    //         }
    //     )
    // }

    let className;
    if(props.id === props.selected) {
        className = 'table-item selected-table'
    } else {
        className = 'table-item'
    }

    return (<li className={className} onClick={props.onClick}>
        <img className='table-photo' src={require(`${props.photo}`)}/>
        <h3>{props.id}</h3> 
    </li>)
}

const TableSelector = () => {
    //const table = tables[0];
    const alt = "photo";

    const [selected, setSelected] = React.useState(1);

    return (
        <div className='table-content'>
            <ul>
                {tables.map(table =>
                    <Table selected={selected} onClick={() => {setSelected(table.id)}}  photo={table.photo} id={table.id}/>
                )
                }
            </ul>
            <Link to="/main" >
                <button className="nav-button">
                    Back
                </button>
            </Link>
            <Link to="/date_time_selection" >
                <button className="nav-button">
                    Next
                </button>
            </Link>
        </div>
    )
    
    // {
    //     tables.map(element => {
    //         <Table photo={element.photo} id={element.id}/>
    //     })
    // }
}

export default TableSelector;