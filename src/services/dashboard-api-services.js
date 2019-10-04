import config from '../config'
import TokenService from '../services/token-service'

const DashboardApiService = {
    getAllCustomers() {
        return fetch(`${config.API_ENDPOINT}/dashboard/members`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    getCustomerInfoByPhone(phone) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/${phone}`, {
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
        return fetch(`${config.API_ENDPOINT}/dashboard/members`, {
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
    getCustomerPointsInfo(id) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/points/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))

    },
    addCustomerPoints(points, id) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/points/`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(points)
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    addCustomerPurchase(total, id) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/purchases/${id}`, {
            method: 'POST',
            header: {
                'content-type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(total)
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    deleteCustomer(phone_number) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/${phone_number}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    createInitialPoints(newCustomer) {
        return fetch(`${config.API_ENDPOINT}/dashboard/members/points`, {
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
    getRewards() {
        return fetch(`${config.API_ENDPOINT}/dashboard/rewards`)
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    }
}

export default DashboardApiService