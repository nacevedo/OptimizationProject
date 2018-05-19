import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";


export const LastUpdate = new Mongo.Collection("LastUpdate");


if (Meteor.isServer) {
    Meteor.publish("LastUpdate", () => {
        return LastUpdate.find({name:"time"});
    });
}

Meteor.methods({
    "last.update"() {
        const res = LastUpdate.find({name:"time"}).fetch();

        if(res.length>0){
            let obj = res[0];
            LastUpdate.update(obj._id, {
                $set: { value: moment().locale('es').format('MMMM Do YYYY, h:mm:ss a')},});
        }
        else {
            LastUpdate.insert({name:"time",value:moment().locale('es').format('MMMM Do YYYY, h:mm:ss a')})
        }
    }
});
