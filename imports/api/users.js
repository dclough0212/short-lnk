import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
    Accounts.validateNewUser((user)=>{
        const email = user.emails[0].address;

        try {
            new SimpleSchema({
              email: {
                  type: String,
                  regEx: SimpleSchema.regEx.email
              }  
            }).validate({email});
        } catch (e) {
            throw new Meteor.Error(e.message);
        }

        return true;
    });
});