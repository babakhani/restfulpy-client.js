/**
 * Created by vahid on 7/13/17.
 */
import { MockupClient } from './helpers'

describe('Authentication', function () {
  let c = new MockupClient()

  it('Login', function (done) {
    c.login({'email': 'user1@example.com', 'password': '123456'}).then(resp => {
      expect(resp.json.token).not.toBe(null)
      expect(c.authenticator.authenticated).toBe(true)
      done()
    }).catch(resp => {
      expect(resp.error).toBeNull()
      done()
    })
  })

  it('Logout', function () {
    c.logout()
    expect(c.authenticator.authenticated).toBe(false)
  })
})
