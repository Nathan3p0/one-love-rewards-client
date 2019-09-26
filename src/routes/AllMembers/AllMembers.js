import React, { useState, useEffect } from 'react'
import './AllMembers.css'
import '../../components/MemberListItem/MemberListItem'
import MemberListItem from '../../components/MemberListItem/MemberListItem'
import DashboardApiService from '../../services/dashboard-api-services'

const AllMembers = () => {

    const [members, setMembers] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        DashboardApiService.getAllCustomers()
            .then(res => setMembers(res))
            .catch(res => {
                setError({ error: res.error })
            })
    }, [])

    const listAllMembers = members.map(member =>
        <MemberListItem key={member.id}
            registered={member.registered}
            name={member.name}
            email={member.email}
            phone={member.phone_number}
        />
    )

    return (
        <section className="dashboard__all-members">
            <h2>All Registered Members</h2>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>
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