import { Meteor } from 'meteor/meteor';
import {Inject} from "meteor/meteorhacks:inject-initial";

import "../imports/api/inventory"
import "../imports/api/parameters"

Meteor.startup(() => {
    // code to run on server at startup
    Inject.rawModHtml("addLanguage", function (html) {
        return html.replace(/<html>/, '<!-- HTML 5 -->\n<html lang="en">');
    });
});