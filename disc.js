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
        for (i = 1; i < 12; i++) {
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
        cstat:cstat,
        createdAt: new Date()
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
                                           { idm:"m1",mflag:"S",text: "Mudah bergaul, ramah, mudah setuju",idl:"l1",lflag:"S" },
                                           { idm:"m1",mflag:"I",text: "Mempercayai, percaya pada orang lain",idl:"l1",lflag:"I"},
                                           { idm:"m1",mflag:"B",text: "Petualang, suka mengambil resiko",idl:"l1",lflag:"D"},
                                           { idm:"m1",mflag:"C",text: "Penuh toleransi, menghormati orang lain",idl:"l1",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 2,
                                    item: [
                                           { idm:"m2",mflag:"D",text: "Yang penting adalah hasil",idl:"l2",lflag:"D" },
                                           { idm:"m2",mflag:"C",text: "Kerjakan dengan benar, ketepatan sangat penting",idl:"l2",lflag:"C"},
                                           { idm:"m2",mflag:"B",text: "Buat agar menyenangkan",idl:"l2",lflag:"I"},
                                           { idm:"m2",mflag:"B",text: "Kerjakan bersama-sama",idl:"l2",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 3,
                                    item: [
                                           { idm:"m3",mflag:"B",text: "Pendidikan, kebudayaan",idl:"l3",lflag:"C" },
                                           { idm:"m3",mflag:"D",text: "Prestasi, penghargaan",idl:"l3",lflag:"D"},
                                           { idm:"m3",mflag:"S",text: "Keselamatan, keamanan",idl:"l3",lflag:"S"},
                                           { idm:"m3",mflag:"I",text: "Sosial, pertemuan kelompok",idl:"l3",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 4,
                                    item: [
                                           { idm:"m4",mflag:"C",text: "Lembut, tertutup",idl:"l4",lflag:"B" },
                                           { idm:"m4",mflag:"D",text: "Visionary, pandangan ke masa depan",idl:"l4",lflag:"D"},
                                           { idm:"m4",mflag:"B",text: "Pusat perhatian, suka bersosialisasi",idl:"l4",lflag:"I"},
                                           { idm:"m4",mflag:"S",text: "Pendamai, membawa ketenangan",idl:"l4",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 5,
                                    item: [
                                           { idm:"m5",mflag:"B",text: "Menahan diri, bisa hidup tanpa memiliki",idl:"l5",lflag:"C" },
                                           { idm:"m5",mflag:"D",text: "Membeli karena dorongan hasrat/impulse",idl:"l5",lflag:"D"},
                                           { idm:"m5",mflag:"S",text: "Akan menunggu, tanpa tekanan",idl:"l5",lflag:"S"},
                                           { idm:"m5",mflag:"I",text: "Akan membeli apa yang diinginkan",idl:"l5",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 6,
                                    item: [
                                           { idm:"m6",mflag:"D",text: "Mengambil kendali, bersikap langsung/direct",idl:"l6",lflag:"D" },
                                           { idm:"m6",mflag:"B",text: "Suka bergaul, antusias",idl:"l6",lflag:"I"},
                                           { idm:"m6",mflag:"B",text: "Mudah ditebak, konsisten",idl:"l6",lflag:"S"},
                                           { idm:"m6",mflag:"C",text: "Waspada, berhati-hati",idl:"l6",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 7,
                                    item: [
                                           { idm:"m7",mflag:"I",text: "Menyemangati orang lain",idl:"l7",lflag:"I" },
                                           { idm:"m7",mflag:"B",text: "Berusaha mencapai kesempurnaan",idl:"l7",lflag:"C"},
                                           { idm:"m7",mflag:"B",text: "Menjadi bagian dari tim/kelompok",idl:"l7",lflag:"S"},
                                           { idm:"m7",mflag:"C",text: "Ingin menetapkan goal/tujuan",idl:"l7",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 8,
                                    item: [
                                           { idm:"m8",mflag:"S",text: "Bersahabat, mudah bergaul",idl:"l8",lflag:"B" },
                                           { idm:"m8",mflag:"B",text: "Unik, bosan pada rutinitas",idl:"l8",lflag:"I"},
                                           { idm:"m8",mflag:"D",text: "Aktif melakukan perubahan",idl:"l8",lflag:"D"},
                                           { idm:"m8",mflag:"C",text: "Ingin segala sesuatu akurat dan pasti",idl:"l8",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 9,
                                    item: [
                                           { idm:"m9",mflag:"D",text: "Sulit dikalahkan/ditundukkan",idl:"l9",lflag:"D" },
                                           { idm:"m9",mflag:"S",text: "Melaksanakan sesuai perintah",idl:"l9",lflag:"B"},
                                           { idm:"m9",mflag:"I",text: "Bersemangat, riang",idl:"l9",lflag:"I"},
                                           { idm:"m9",mflag:"B",text: "Ingin keteraturan, rapi",idl:"l9",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 10,
                                    item: [
                                           { idm:"m10",mflag:"C",text: "Menjadi frustasi",idl:"l10",lflag:"C" },
                                           { idm:"m10",mflag:"S",text: "Memendam perasaan dalam hati",idl:"l10",lflag:"S"},
                                           { idm:"m10",mflag:"B",text: "Menyampaikan sudut pandang pribadi",idl:"l10",lflag:"I"},
                                           { idm:"m10",mflag:"D",text: "Berani menghadapi oposisi",idl:"l10",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 11,
                                    item: [
                                           { idm:"m11",mflag:"B",text: "Mengalah, tidak suka pertentangan",idl:"l11",lflag:"S" },
                                           { idm:"m11",mflag:"C",text: "Penuh dengan hal-hal kecil, detail",idl:"l11",lflag:"B"},
                                           { idm:"m11",mflag:"I",text: "Berubah pada menit-menit terakhir",idl:"l11",lflag:"I"},
                                           { idm:"m11",mflag:"D",text: "Mendesak/memaksa agak kasar",idl:"l11",lflag:"D"}
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

