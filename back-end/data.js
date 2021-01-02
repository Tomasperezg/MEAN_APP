const fs = require('fs');

// add email

// save email
const saveData = (data) => {
    const dataJSON = JSON.stringify(data)
    fs.writeFileSync('enrollUsers.json', dataJSON)
}
// load email to JSON file
const loadDataEmail = () => {
    try{
        const dataBuffer = fs.readFileSync('enrollUsers.json');
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);

    } catch (e){
        return []
    }
}

module.exports = {
    saveData: saveData
}