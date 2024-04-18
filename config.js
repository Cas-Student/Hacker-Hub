import userData from 'https://grass-grower.github.io/Proxy-Users/Users.js'

const config = {
  challenge: true, // Set to true if you want to enable password protection.
  users = userData.users,
  routes: true, // Change this to false if you just want to host a bare server.
  local: true, // Change this to false to disable local assets.
}
export default config
