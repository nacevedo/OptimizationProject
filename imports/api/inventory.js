import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import {check} from "meteor/check";
import {SimpleSchema} from "simpl-schema/dist/SimpleSchema";


export const Inventory = new Mongo.Collection("Inventory");


if (Meteor.isServer) {
    Meteor.publish("Inventory", () => {
        return Inventory.find({});
    });
}

Meteor.methods({
    "inventory.insert"(ref, cost) {
      Inventory.insert({ref:ref, cost: cost, amount:0});
    },
    "inventory.delete"(ref) {
        Inventory.remove({ref:ref});
    },
    "amount.update"(ref, amount) {
        const res = Inventory.find({ref:ref}).fetch();

        if(res.length>0){
            let obj = res[0];
            Inventory.update(obj._id, {
                $set: { amount:obj.amount+amount},});
        }
    }
});
