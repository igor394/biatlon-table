const sportsMan = [
    {
        id: 1,
        number: 11,
        country: 'NORWAY',
        flag: './images/NOR.png',
        name: 'ANDERSEN Aleksander Fjeld',
        miss: 0,
        time: '02:45:24.5',
        timeShoots: 48.5
    },
    {
        id: 2,
        number: 3,
        country: 'NORWAY',
        flag: './images/NOR.png',
        name: 'BAKKEN Sivert Guttorm',
        miss: 1,
        time: '+12.9s',
        timeShoots: 55.5
    },
    {
        id: 3,
        number: 18,
        country: 'ITALY',
        flag: './images/ITA.png',
        name: 'CAPPELLARI Daniele',
        miss: 0,
        time: '+18.8s',
        timeShoots: 44.7
    },
    {
        id: 4,
        number: 25,
        country: 'RUSSIA',
        flag: './images/RUS.png',
        name: 'SUCHILOV Semen',
        miss: 1,
        time: '+30.4s',
        timeShoots: 58.1
    },
    {
        id: 5,
        number: 21,
        country: 'FRANCE',
        flag: './images/FRA.png',
        name: 'PERROT Eric',
        miss: 1,
        time: '+32.8s',
        timeShoots: 42.0
    },
    {
        id: 6,
        number: 44,
        country: 'SWEDEN',
        flag: './images/SWE.png',
        name: 'STEFANSSON Malte',
        miss: 0,
        time: '+36.4s',
        timeShoots: 48.9
    },
    {
        id: 7,
        number: 32,
        country: 'GERMANY',
        flag: './images/GER.png',
        name: 'NAWRATH Philipp',
        miss: 1,
        time: '+40.8s',
        timeShoots: 38.5
    },
    {
        id: 8,
        number: 38,
        country: 'CANADA',
        flag: './images/CAN.png',
        name: 'BURNOTTE Jules',
        miss: 2,
        time: '+43.1s',
        timeShoots: 53.7
    },
    {
        id: 9,
        number: 7,
        country: 'UKRAINE',
        flag: './images/UKR.png',
        name: 'TSYMBAL Bogdan',
        miss: 2,
        time: '+48.6s',
        timeShoots: 51.0
    },
    {
        id: 10,
        number: 19,
        country: 'SWEDEN',
        flag: './images/SWE.png',
        name: 'STENERSEN Torstein',
        miss: 4,
        time: '+52.8s',
        timeShoots: 40.5
    },
    {
        id: 11,
        number: 42,
        country: 'UKRAINE',
        flag: './images/UKR.png',
        name: 'LESIUK Taras',
        miss: 3,
        time: '+55.3s',
        timeShoots: 48.5
    }
]

let sortedProducts = [...sportsMan];
sortedProducts.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});
console.log(sortedProducts)