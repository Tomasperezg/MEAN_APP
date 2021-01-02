const fs = require('fs');

// add data
const getData = (data) => {
    const userData = loadData();

    const duplicateData = userData.filter((info) => info.data === data );

    if (duplicateData.length === 0){
        userData.push({
            data
        })
        saveData(userData);
        console.log('new data is available');
    } else{
        console.log('This data alrady exist');
    }
}

// save data
const saveData = (datas) => {
    var dataJSON = JSON.stringify(datas);
    fs.writeFileSync('enrollUsers.Json', dataJSON)
}


// load data
const loadData = () => {
    try{
        const dataBuffer = fs.readFileSync('enrollUsers.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

module.exports = {
    getData: getData,
    saveData: saveData
}