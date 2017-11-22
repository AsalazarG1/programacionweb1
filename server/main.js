import { Meteor } from 'meteor/meteor';
import { InfoDB } from '../imports/collections/info.js'

Meteor.startup(() => {
  // code to run on server at startup
  if (InfoDB.find().count() === 0){
    InfoDB.insert({
      nombre : 'Fulanito',
    cantidad : 1,
    extra : 'lorem'
      
    });
    
  }
});
