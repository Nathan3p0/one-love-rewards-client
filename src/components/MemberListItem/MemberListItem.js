import React from 'react'

const MemberListItem = () => {
    return (
        <li className="tableRow">
            <div className="col col-1" data-label="Created">Create</div>
            <div className="col col-2" data-label="Customer Name">George Beaver</div>
            <div className="col col-3" data-label="Customer Email">blahblahblah@gmail.com</div>
            <div className="col col-4" data-label="Customer Phone">7345550101</div>
        </li>
    )
}

export default MemberListItem