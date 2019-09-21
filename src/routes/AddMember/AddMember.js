import React from 'react'
import AddMemberForm from '../../components/AddMemberForm/AddMemberForm'
import './AddMember.css'
import { Link } from 'react-router-dom'

const AddMember = () => {
    return (
        <>
            <section class="dashboard__add-member">
                <AddMemberForm />
            </section>
        </>
    )
}

export default AddMember