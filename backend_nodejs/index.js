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
    } else {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            let params = JSON.parse(body);
            switch (params.action) {
                case 1:
                    console.log('action 1' + check);
                    res.end(JSON.stringify(filterNumber(db, 'id')));
                    break;
                case 2:
                    console.log('action 2');
                        res.end(JSON.stringify(filterNumber(db, 'number')));
                    break;
                case 3:
                    console.log('action 3');
                        res.end(JSON.stringify(filterString(db, 'name')));
                        break;
                case 4:
                    console.log('action 4');
                        res.end(JSON.stringify(filterString(db, 'country')));
                    break;
                case 5:
                    console.log('action 5');
                        res.end(JSON.stringify(filterNumber(db, 'miss')));
                    break;
                case 6:
                    console.log('action 6');
                        res.end(JSON.stringify(filterNumber(db, 'timeShoots')));
                    break;
                case 7:
                    console.log('action 7' + ' / ' + params.text);
                        res.end(JSON.stringify(searchMembers(db, params.text)));
                    break;
            }
        });
    }
}).listen(3500);

let check = false;
const filterNumber = (arr, arg) => {
    if (check) {
        check = false;
        return arr.sort((a, b) => a[arg] - b[arg]);
    } else {
        check = true
        return arr.sort((a, b) => b[arg] - a[arg]);
    }
}

const filterString = (arr, arg) => {
    if (check) {
        check = false;
        return arr.sort((a, b) => (a[arg] < b[arg]) ? -1 : 1);
    } else {
        check = true
        return arr.sort((a, b) => (a[arg] > b[arg]) ? -1 : 1);
    }
}

const searchMembers = (arr, arg) => {
    return arr.filter(item => item['name'].toLowerCase().includes(arg))
}