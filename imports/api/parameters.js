import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Parameters = new Mongo.Collection("Parameters");


if (Meteor.isServer) {
    Meteor.publish("Parameters", () => {
        return Parameters.find({});
    });
}