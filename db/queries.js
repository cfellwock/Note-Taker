const util = require("util")
const fs = require("fs")

const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const readfileasync = util.promisify(fs.readFile)
const writefileasync = util.promisify(fs.writeFile)

class Queries{
    read() {
        return readfileasync("db/db.json", "utf8")
    }
    write(note) {

    }
    get() {

    }
    addNote(note) {

      }
    
}
module.exports = new Queries();