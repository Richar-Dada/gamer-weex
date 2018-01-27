const stream = weex.requireModule('stream')

export function get (url) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'GET',
      url: url,
      type: 'json'
    }, function(ret) {
      let res = {}
      if (!ret.ok) {
        res.errMsg = 'request failed'
        res.resultCode = '400'
        reject(res)
      } else {
        res.resultCode = ret.status
        res.data = ret.data
        resolve(res)
      }
    })
  })
}

export function post (url, data) {
  console.log(data)
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url: url,
      type: 'json',
      body: data,
      headers: { "Content-Type": 'application/json' }
    }, function(ret) {
      let res = {}
      if (!ret.ok) {
        res.errMsg = 'request failed'
        res.resultCode = '400'
        reject(res)
      } else {
        res.resultCode = ret.status
        res.data = ret.data
        resolve(res)
      }
    })
  })
}