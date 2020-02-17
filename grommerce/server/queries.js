const Sequelize = require('sequelize')

class database {
    constructor(dbConfig){
        this.db = dbConfig
        //this.createDb()
    }
    createDb(){
        this.sequelize = new Sequelize(this.db.DB_NAME, this.db.USER, this.db.PASSWORD, {
            host: 'localhost',
            dialect: 'postgres',
            pool: {
              max: 5,
              min: 0,
              idle: 10000
            },
        })
        return this.sequelize
    }
    defineUser(){
        this.user = new this.sequelize.define('User', {
            name: Sequelize.STRING,
            grocer_id: Sequelize.STRING,
            phone: Sequelize.STRING,
            address: Sequelize.STRING, 
            pincode: Sequelize.STRING,
            created:  Sequelize.DATE,
            updated:  Sequelize.DATE,
        })
    }
    manageUser(postBody){
        const table = postBody.type
        const action = postBody.action.toLowerCase()
        let data = postBody.data
        if (action === "add"){
            this[table].upsert({
                "created": new Date(),
                ...data
            }).success(function(sdepold) {
                console.log(sdepold.values)
            })
        }
        else if (action === "update"){
            this[table].upsert({
                "updated": new Date(),
                ...data
            }).success(function(sdepold) {
                console.log(sdepold.values)
            })
        }
        else{
            this[table].removeAttribute(
                data
            ).success(function(sdepold) {
                console.log(sdepold.values)
            })
        }
    }
}

module.exports = database