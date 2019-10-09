import React from 'react'

const MemberListItem = (props) => {
    const date = new Date(props.registered);
    return (
        <li className="tableRow">
            <div className="col col-1" data-label="Created">{date.toLocaleDateString()}</div>
            <div className="col col-2" data-label="Customer Name">{props.name}</div>
            <div className="col col-3" data-label="Customer Email">{props.email}</div>
            <div className="col col-4" data-label="Customer Phone">{props.phone}</div>
        </li>
    )
}

export default MemberListItem