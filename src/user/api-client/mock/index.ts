import {
    UserApiClientUrlsInterface,
    UserApiClientInterface,
    UserApiClientModel
} from '../../models/api-clients'

const urls: UserApiClientUrlsInterface = {
    fetchUsers: '/static/data/items.json',
    addUser: ''
}

const UsersApiClient: UserApiClientInterface = new UserApiClientModel({urls})

export default {
    UsersApiClient
}