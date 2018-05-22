import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const Projects = new Mongo.Collection("Projects");


if (Meteor.isServer) {
    Meteor.publish("Projects", () => {
        return Projects.find({});
    });
}

Meteor.methods({
    "projects.insert"(name, client, mail, phone, address, inst) {
      Projects.insert({name:name, client:client, mail:mail, phone:phone, address:address, intallations:inst});
    },
    "projects.delete"(id) {
        Projects.remove({_id:id});
    },
});
