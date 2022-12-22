var fs = require('fs');

//lecture asynchrone
fs.readFile('wellcome.txt', function (err, data) {
    if (err) {
        return console.error(err)
    }
    console.log('Le contenu du fichier est ' + data.toString())
})

