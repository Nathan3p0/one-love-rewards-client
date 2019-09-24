import config from '../config'
import TokenService from '../services/token-service'

const DashboardApiService = {
    createNewCustomer(newCustomer) {
        return fetch(`${config.API_ENDPOINT}/dashboard/api/add-member`, {
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
    }
}

export default DashboardApiService