import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {Inventory} from "./inventory";


export const Parameters = new Mongo.Collection("Parameters");


if (Meteor.isServer) {
    Meteor.publish("Parameters", () => {
        return Parameters.find({});
    });
}
Meteor.methods({
    "budget.update"(value) {
        const res = Inventory.find({ref:ref}).fetch();

        if(res.length>0){
            let obj = res[0];
            Parameters.update(obj._id, {
                $set: { amount:obj.value+value},});
        }
    }
});