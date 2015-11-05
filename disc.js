Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Router.route('/', function () {
  this.render('home');
});
Router.route('/admin', function () {
  this.render('admin');
});
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
    Template.admin.helpers({
    answers: function () {
      return Answers.find();
    }
  });
  Template.home.helpers({
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
  Template.home.events({
    "submit .new": function (event) {
    	event.preventDefault();
    	var m='m';
    	var l='l';
		var mstat = {};
		mstat['D']=0;
		mstat['I']=0;
		mstat['S']=0;
    	mstat['C']=0;
    	mstat['B']=0;
		var lstat = {};
		lstat['D']=0;
		lstat['I']=0;
		lstat['S']=0;
    	lstat['C']=0;
    	lstat['B']=0;    	
    	res= new Array();
        for (i = 1; i < 3; i++) { 
    		//console.log(getRadioValue(m+i));
    		var mval=getRadioValue(m+i);
    		var lval=getRadioValue(l+i);
    		mstat[mval]=mstat[mval]+1;
    		lstat[lval]=lstat[lval]+1;
    		res.push({m:mval,l:lval});
		}
		var cstat={};
		cstat['D']=mstat['D']-lstat['D'];
		cstat['I']=mstat['I']-lstat['I'];
		cstat['S']=mstat['S']-lstat['S'];
		cstat['C']=mstat['C']-lstat['C'];
        var nama = event.target.nama.value;
        Answers.insert({
        nama: nama,
        res:res,
        mstat:mstat,
        lstat:lstat,
        cstat:cstat
      });
      Session.set('counter', Session.get('counter') + 1);
    }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
                 // if there are no polls available
        if (Questions.find().count() === 0) {
                 
                 // create sample polls
                 var samplePolls = [
                                    {
                                    num: 1,
                                    item: [
                                           { idm:"m1",mflag:"S",text: "Mudah bergaul",idl:"l1",lflag:"S" },
                                           { idm:"m1",mflag:"I",text: "Percaya",idl:"l1",lflag:"I"},
                                           { idm:"m1",mflag:"D",text: "Petualang",idl:"l1",lflag:"D"},
                                           { idm:"m1",mflag:"C",text: "Toleransi",idl:"l1",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 2,
                                    item: [
                                           { idm:"m2",mflag:"D",text: "Hasil",idl:"l2",lflag:"D" },
                                           { idm:"m2",mflag:"C",text: "Benar",idl:"l2",lflag:"C"},
                                           { idm:"m2",mflag:"B",text: "Senang",idl:"l2",lflag:"I"},
                                           { idm:"m2",mflag:"B",text: "Bersama",idl:"l2",lflag:"S"}
                                           ]
                                    }
                                    ];
                 
                 // loop over each sample poll and insert into database
                 _.each(samplePolls, function(poll) {
                        Questions.insert(poll);
                        });
        }
                 
  });
}

