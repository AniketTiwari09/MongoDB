const mongoose = require("mongoose");
const budgetsModel = require("./budgetSchema");

let url = 'mongodb://127.0.0.1:27017/MONGODB CHART';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to the database - to insert initial data");
            let newData1 = new budgetsModel({title: "Eat out", value: 100, color: "#ffcd56"});
            let newData2 = new budgetsModel({title: "Rent", value: 200, color: "##ff0000"});
            let newData3 = new budgetsModel({title: "Grocery", value: 63, color: "#0000ff"});
            let newData4 = new budgetsModel({title: "Dog", value: 231, color: "#00ff00"});
            let newData5 = new budgetsModel({title: "Entertainment", value: 908, color: "##ffa500"});
            let newData6 = new budgetsModel({title: "Motorcycle", value: 977, color: "#6a5acd"});
            let newData7 = new budgetsModel({title: "Office", value: 50, color: "#008000"});

            budgetsModel.insertMany([newData1, newData2, newData3, newData4, newData5, newData6, newData7])
            .then((data) => {
               console.log(data);
               mongoose.connection.close();
            })
            .catch((connectionError) => {
               console.log(connectionError);
            });
        })
        .catch((connectionError) => {
            console.log(connectionError);
        })