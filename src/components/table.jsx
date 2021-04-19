import React from 'react'
import {useSelector} from 'react-redux'

const Table = ({ body }) => {

    const selector = useSelector((state)=>{
        return state.brandReducer.brand
    })
    // console.log(selector)

    return (
        <div>
            <div className="admin_panel_table_div">
                <h5><strong>Subscription Table</strong></h5>
                <table className="table table table-striped table-hover custom_class_table">
                    <thead className='table-dark'>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Brand</th>
                            <th scope="col">City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selector.length && selector.map((val, i) => (
                            <tr key={i}>
                                <th scope="row">{i+ 1}</th>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.brand}</td>
                                <td>{val.city}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default Table
