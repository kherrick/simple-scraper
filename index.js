const request = require('request')
const cheerio = require('cheerio')

request({
  uri: 'http://example.com/1970/01/01/article-title/',
}, (error, response, body) => {
  const $ = cheerio.load(body)

  // $('.example-title > a').each(function() {
  //   const link = $(this)
  //   const text = link.text()
  //   const href = link.attr('href')

  //   console.log(text + ' -> ' + href)
  // })

  const title = $('title').text()

  console.log(title)
})
