import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Projects = new Mongo.Collection("Projects");


if (Meteor.isServer) {
    Meteor.publish("Projects", () => {
        return Projects.find({});
    });
}

Meteor.methods({
    "projects.insert"(name) {
      Projects.insert({name:name});
    },
    "projects.delete"(id) {
        Projects.remove({_id:id});
    },
});
