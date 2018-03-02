'use strict'
var body = document.getElementsByTagName('body')[0]
body.addEventListener('copy', function (e) {
  e.stopPropagation()
}, false)
