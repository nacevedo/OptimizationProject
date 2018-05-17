import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {Inventory} from "./inventory";


export const Parameters = new Mongo.Collection("Parameters");


if (Meteor.isServer) {
    Meteor.publish("Parameters", () => {
        return Parameters.find({});
    });
    Meteor.publish("Budget", () => {
        return Parameters.find({"name":"p"});
    });
}
Meteor.methods({
    "budget.update"(value) {
        const res = Parameters.find({name:"p"}).fetch();

        if(res.length>0){
            let obj = res[0];
            Parameters.update(obj._id, {
                $set: { value:value},});
        }
    }
});