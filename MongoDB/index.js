const mongo = require("mongodb");

const client = new mongo.MongoClient("mongodb://localhost:27017", {
    useNewParser: true
});

client.connect(err => {
    if (err) {
        console.log("it's something wrong");
    } else {
        console.log("Welcome on board ;)");

        const db = client.db("cars");

        const clients = db.collection("test.cars");

        clients.insertOne({
            brand: "Infiniti",
            model: "Q50"
        });

        clients.deleteOne({
            _id: mongo.ObjectID("5d89bcd26963f2ab46172e52")
        });

        clients.find({}).toArray((err, carList) => {
            if (err) {
                console.log("errror!");
            } else {
                console.log("carList:", carList);
            }
        });

        clients.updateOne({
            year: {
                $gt: 2019
            }
        }, {
            $set: {
                active: false,
            },
        }, err => {
            if (err) {
                console.log('error in update')
            } else {
                console.log('ok')
            }
        })
    }

    client.close();
});