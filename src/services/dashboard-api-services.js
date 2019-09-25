import config from '../config'
import TokenService from '../services/token-service'

const DashboardApiService = {
    getCustomerInfoByPhone(phone) {
        return fetch(`http://localhost:8000/api/dashboard/members/${phone}`, {
            method: 'GET',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    createNewCustomer(newCustomer) {
        return fetch(`http://localhost:8000/api/dashboard/members`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(newCustomer)
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    deleteCustomer(customerId) {
        return fetch(`http://localhost:8000/api/dashboard/members/${customerId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    }
}

export default DashboardApiService