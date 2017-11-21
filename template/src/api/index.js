import axios from 'axios'

const api = {
  /**
   * init the api object with the baseUrl and Endpoits 
   */ 
  init: (
      baseUrl = 'http://localhost:3000',
      apiEndpoint = '/api/v2/',
      authEndpoint = '/auth/v1/token') => {
    axios.defaults.baseURL = baseUrl // set default api URL
    // TODO headers
  },
  /**
   * entity : name of the endpoint's entity to fetch
   * @param {String} entity 
   */
  get (entity) {
    axios.get(this.apiEndpoint + entity)
    .then(response => {
      return response.data
    }).catch(err => console.log(err))
  },
  /**
   * WP REST API /me user endpoint
   */
  user () {
    axios.get(this.apiEndpoint + 'me').then(response => response).catch(err => console.log(err))
  },
  /**
   * This function was write for JWT auth to WP REST API
   * @param {Object} user 
   */
  getToken (user) { // user an object { username: String, password: String }
    axios.post(this.authEndpoint, {
      username: user.username,
      password: user.password
    })
    .then(response => {
      let user = {
        token: response.data.token,
        displayName: response.data.user_display_name,
        userEmail: response.data.user_email,
        niceName: response.data.user_nicename
      }
      return user
    }).catch(err => console.log(err))
  }
}

export default api
