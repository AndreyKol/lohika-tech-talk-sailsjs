/**
* Order.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    lastUpdatedDate:'datetime',
    status:{
      type:'string',
      enum:['new', 'processing','completed']
    },
    user:{
      model:'user'
    },
    items:{
      collection:'orderItem',
      via:'order'
    }
  }
};

