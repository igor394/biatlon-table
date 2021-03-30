const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const db = require('./db/data.json');


http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('server work ========');
    if (req.method == 'GET') {
        res.end('the server is running on port 3500 through a nodeJS');
    }
    else {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let params = JSON.parse(body);
            switch (params.action) {
                case 1:
                    console.log('action 1');
                    console.log(chek1);
                    if(chek1){
                        res.end(JSON.stringify(filterNumberBack(db, 'id')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterNumber(db, 'id')));
                        chek1=true
                        break;
                    }
                case 2:
                    console.log('action 2');
                    if(chek1){
                        res.end(JSON.stringify(filterNumber(db, 'number')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterNumberBack(db, 'number')));
                        chek1=true
                        break;
                    }
                case 3:
                    console.log('action 3');
                    if(chek1){
                        res.end(JSON.stringify(filterString(db, 'name')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterStringBack(db, 'name')));
                        chek1=true
                        break;
                    }
                    break;
                case 4:
                    console.log('action 4');
                    if(chek1){
                        res.end(JSON.stringify(filterString(db, 'country')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterStringBack(db, 'country')));
                        chek1=true
                        break;
                    }
                    break;
                case 5:
                    console.log('action 5');
                    if(chek1){
                        res.end(JSON.stringify(filterNumber(db, 'miss')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterNumberBack(db, 'miss')));
                        chek1=true
                        break;
                    }
                case 6:
                    console.log('action 6');
                    if(chek1){
                        res.end(JSON.stringify(filterNumber(db, 'number')));
                        chek1=false;
                        break;
                    }else {
                        res.end(JSON.stringify(filterNumberBack(db, 'number')));
                        chek1=true
                        break;
                    }
            }
        });
    }

}).listen(3500);

let chek1= true;
const filterNumber = (arr, arg) => {
    return arr.sort((a, b) => a[arg] - b[arg]);
}
const filterNumberBack = (arr, arg) => {
    return arr.sort((a, b) => b[arg] - a[arg]);
}
const filterString = (arr, arg) => {
    return arr.sort((a, b) => (a[arg] < b[arg]) ? -1 : 1);
}
const filterStringBack = (arr, arg) => {
    return arr.sort((a, b) => (a[arg] > b[arg]) ? -1 : 1);
}