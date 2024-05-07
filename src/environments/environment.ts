const url = 'http://localhost:3001';
export const environment = {
  production: false,
  interceptor: false,
  logger: true,
  useHash: true,
  workflow: url + '/api/workflow',
  // workflow: 'http://localhost:4000' + '/pocw/v1/workflow',
  //ip: url + '/ip/',
  ip: 'https://jsonip.com/',
  jwk: url + '/auth/v1/keystore/.well-known/jwks.json',
  auth: url + '/api/auth',
  resfresher: '/api/auth/token',
  // jwk: 'http://localhost:5000' + '/auth/v1/keystore/.well-known/jwks.json',
  // auth: 'http://localhost:5000' + '/auth/v1/token',
  // resfresher: 'http://localhost:5000' + '/auth/v1/token',
  assets: url + '/asset',
  data: url + '/data',
  params: url + '/params',
  onlineAttention: url + '/soporte',
  interceptors: {
    reutenticate: false
  },
  idTagging: 'GTM-5DJ5G73',
  urlTagging: 'https://www.googletagmanager.com/ns.html?id=',
  base: '/'
};
