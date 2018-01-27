const stream = weex.require('stream')

export function post (url, data) {
  return new Promise((resolve, reject) => {
    stream.fetch({
      method: 'POST',
      url: url,
      type: 'json',
      body: JSON.stringify(data),
      header: { "Content-Type": 'application/json' }
    }, function(ret) {
      let res = {}
      if (!ret.ok) {
        res.errMsg = 'request failed'
        res.resultCode = '400'
        reject(res)
      } else {
        res.resultCode = ret.status
        res.data = JSON.parse(ret.data)
      }
    })
  })
}