process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/biblioteca';


}

urlDB = 'mongodb+srv://bryan_gomez:Brayangomez1986@cluster0.ievef.mongodb.net/biblioteca';


process.env.URLDB = urlDB;