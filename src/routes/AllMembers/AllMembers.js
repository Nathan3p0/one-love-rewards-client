import React from 'react'
import { Link } from 'react-router-dom'
import './AllMembers.css'
import '../../components/MemberListItem/MemberListItem'
import MemberListItem from '../../components/MemberListItem/MemberListItem'

const AllMembers = () => {
    const members = [
        {
            id: 1,
            registered: 'date',
            name: 'george',
            email: 'lalal@lala.com',
            phone: 7345551010
        }
    ]

    const listAllMembers = members.map(member =>
        <MemberListItem key={member.id}
            registered={member.created}
            name={member.customer_name}
            email={member.customer_email}
            phone={member.customer_phone}
        />
    )

    return (
        <section className="dashboard__all-members">
            <h2>All Registered Members</h2>
            <ul className='responsiveTable'>
                <AllMembersTableHeader />
                {listAllMembers}
            </ul>
        </section>
    )
}

export default AllMembers

const AllMembersTableHeader = () => {
    return (
        <li className='tableHeader'>
            <div className='col col-1'>Date Registered</div>
            <div className='col col-2'>Customer Name</div>
            <div className='col col-3'>Customer Email</div>
            <div className='col col-4'>Customer Phone #</div>
        </li>
    )
}