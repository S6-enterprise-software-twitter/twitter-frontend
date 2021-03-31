import Keycloak from 'keycloak-js';
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'

const initOptions = {
    url: 'http://localhost:8486/auth', realm: 'Twitter', clientId: 'twitter-frontend', onLoad: 'login-required'
  }

const keycloak = new Keycloak(initOptions);

export default keycloak;