import {createConnection} from 'typeorm';
import dbParams from  '../config/db.json' ;

export default async function createDbConnection(){

    const dbConnection = await createConnection({
        type: "postgres",
        host: dbParams.DB.HOST,
        port: 3306,
        username: dbParams.DB.USER,
        password: dbParams.DB.PASSWORD,
        database: dbParams.DB.DB_NAME,
        entities: [
            __dirname + "/entities/**/*.ts"
        ],
        synchronize: true,
        logging: false
    })
    //.then(connection => {
        // here you can start to work with your entities
    //}).catch(error => console.log(error));
    return dbConnection;

}