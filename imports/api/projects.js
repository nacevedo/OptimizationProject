import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Projects = new Mongo.Collection("Projects");


if (Meteor.isServer) {
    Meteor.publish("Projects", () => {
        return Projects.find({});
    });
}

Meteor.methods({
    "projects.insert"(ref, cost) {
      Projects.insert({ref:ref, cost: cost, amount:0});
    },
    "projects.delete"(id) {
        Projects.remove({id:id});
    },
});
