// export default BASE_URL = "test";
import Keycloak from 'keycloak-js';

export let initOptions = {
    url: 'http://localhost:8486/auth', realm: 'Twitter', clientId: 'twitter-frontend', onLoad: 'login-required'
  }

export var keycloak =  Keycloak(initOptions);