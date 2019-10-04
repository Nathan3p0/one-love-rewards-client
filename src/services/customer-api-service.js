import config from '../config'
import TokenService from '../services/token-service'

const CustomerApiService = {
    getCustomerInfoByPhone(phone) {
        return fetch(`${config.API_ENDPOINT}/customers/${phone}`)
            .then(res => (
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            ))
    },
    getCustomerRewardsById(id) {
        return fetch(`${config.API_ENDPOINT}/customers/rewards/${id}`)
            .then(res =>
                (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json()
            )
    }
}

export default CustomerApiService