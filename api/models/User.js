/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  // Enforce model schema in the case of schemaless databases
  schema: true,

  attributes: {
    // associations
    passports: {
      collection: 'Passport',
      via: 'user'
    },

    // attributes
    status: {
      type: 'string',
      enum: ['ACTIVE', 'INACTIVE', 'UNCONFIRMED'],
      defaultsTo: 'UNCONFIRMED',
      required: true
    },
    firstName: {
      type: 'string',
      required: true
    },
    lastName: {
      type: 'string',
      required: true
    },
    // username: {
    //   type: 'string',
    //   unique: true
    // },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    phone: {
      type: 'string'
    },
    dateOfBirth: {
      type: 'date'
    },
    occupation: {
      type: 'string'
    },

    // address
    address1: {
      type: 'string'
    },
    address2: {
      type: 'string'
    },
    city: {
      type: 'string'
    },
    state: {
      type: 'string'
    },
    zip: {
      type: 'string'
    },

    isUnconfirmed: function(){
      return this.status === 'UNCONFIRMED'
    }
  }

};

