Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}
if (Meteor.isClient) {
  // This code only runs on the client
  Session.setDefault('counter', 0);
  Template.body.helpers({
    questions: function () {
      return Questions.find({}, {sort: {num: 1}});
    },
    counter: function () {
      return Session.get('counter');
    },
    isEqual: function(var1, var2) {
      return var1 === var2;
  }
  });
  Template.body.events({
    "submit .new": function (event) {
    	event.preventDefault();
        //console.log("submit form"); 
        var nama = event.target.nama.value;
        var m1=getRadioValue('m1');
        var l1=getRadioValue('l1');
        var m2=getRadioValue('m2');
        var l2=getRadioValue('l2');
        Answers.insert({
        nama: nama,
        m1:m1,
        l1:l1,
        m2:m2,
        l2:l2
      });
      Session.set('counter', Session.get('counter') + 1);
    }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
