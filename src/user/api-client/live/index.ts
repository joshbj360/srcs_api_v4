import {
    UserApiClientUrlsInterface,
    UserApiClientInterface,
    UserApiClientModel
   } from '../../models/api-clients'
   
   const urls: UserApiClientUrlsInterface = {
    fetchUsers: 'http://127.0.0.1:8000/en/api/v4/user/',
    addUser: "http://127.0.0.1:8000/en/api/v4/user/",
    loginUser: "http://127.0.0.1:8000/en/api/v4/token/"
   }
   // instantiate the UserApiClient pointing at the url that returns static json   mock \   data

   const UserApiClient: UserApiClientInterface = new UserApiClientModel({urls})
   // export our instance
   export default UserApiClient
   