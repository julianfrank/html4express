'use strict'

const fs = require('fs')
const inspect = require('util').inspect

/*Generic function to read file within express engine declaration...currently planned to be used only for HTML
Add this into express using this statement =>
        'use strict'
        const app=require('express')()
        const loadHTML=require('./loadhtml.js').loadHTML
        app.set('views', './')
        app.set('view engine', 'html')
        app.engine('html', loadHTML)

In your app render using the following command inside the middleware
        res.render(<your jfml>,options,callback with parameters (error,rendered html content))

This sample gets called when any '.jfml' file is rendered Parameters are called directly by express, so no coding needed*/

function loadjffl(filePath, options, callback) {//std pattern used by / provided by express
    const params = "{ FilePath: " + filePath + ", Options: " + inspect(options) + " }"
    fs.readFile(filePath, function (err, content) {
        if (err) return callback(new Error(err.message))
        // this is an extremely simple template engine
        let rendered = "<pre>" + content.toString() + "<br>" + params + "</pre>"
        return callback(null, rendered)
    })
}
module.exports = { loadjffl }