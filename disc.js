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
        for (i = 1; i < 25; i++) {
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
                                    },
                                    {
                                    num: 12,
                                    item: [
                                           { idm:"m12",mflag:"D",text: "Saya akan pimpin mereka",idl:"l12",lflag:"B" },
                                           { idm:"m12",mflag:"S",text: "Saya akan ikut, mengikuti",idl:"l12",lflag:"S"},
                                           { idm:"m12",mflag:"I",text: "Saya akan pengaruhi, bujuk mereka",idl:"l12",lflag:"I"},
                                           { idm:"m12",mflag:"C",text: "Saya akan mendapatkan fakta-faktanya",idl:"l12",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 13,
                                    item: [
                                           { idm:"m13",mflag:"I",text: "Hidup lincah banyak bicara",idl:"l13",lflag:"B" },
                                           { idm:"m13",mflag:"D",text: "Cepat, penuh keyakinan",idl:"l13",lflag:"D"},
                                           { idm:"m13",mflag:"S",text: "Berusaha menjaga keseimbangan",idl:"l13",lflag:"S"},
                                           { idm:"m13",mflag:"B",text: "Berusaha patuh pada peraturan",idl:"l13",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 14,
                                    item: [
                                           { idm:"m14",mflag:"D",text: "Ingin kemajuan/peningkatan",idl:"l14",lflag:"D" },
                                           { idm:"m14",mflag:"S",text: "Puas dengan keadaan, tenang/mudah puas",idl:"l14",lflag:"B"},
                                           { idm:"m14",mflag:"I",text: "Menunjukkan perasaan dengan terbuka",idl:"l14",lflag:"B"},
                                           { idm:"m14",mflag:"B",text: "Rendah hati, sederhana",idl:"l14",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 15,
                                    item: [
                                           { idm:"m15",mflag:"S",text: "Memikirkan orang lain dahulu",idl:"l15",lflag:"S" },
                                           { idm:"m15",mflag:"D",text: "Suka bersaing/kompetitif, suka tantangan",idl:"l15",lflag:"D"},
                                           { idm:"m15",mflag:"I",text: "Optimis, berpikir positif",idl:"l15",lflag:"C"},
                                           { idm:"m15",mflag:"B",text: "Sistematis, berpikir logis",idl:"l15",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 16,
                                    item: [
                                           { idm:"m16",mflag:"C",text: "Mengelola waktu dengan efisien",idl:"l16",lflag:"B" },
                                           { idm:"m16",mflag:"D",text: "Sering terburu-buru, merasa ditekan",idl:"l16",lflag:"D"},
                                           { idm:"m16",mflag:"I",text: "Hal-hal sosial adalah penting",idl:"l16",lflag:"I"},
                                           { idm:"m16",mflag:"S",text: "Suka menyelesaikan hal yang sudah dimulai",idl:"l16",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 17,
                                    item: [
                                           { idm:"m17",mflag:"C",text: "Tenang, pendiam, tertutup",idl:"l17",lflag:"C" },
                                           { idm:"m17",mflag:"I",text: "Gembira, bebas, riang",idl:"l17",lflag:"I"},
                                           { idm:"m17",mflag:"S",text: "Menyenangkan, baik hati",idl:"l17",lflag:"B"},
                                           { idm:"m17",mflag:"D",text: "Menyolok, berani",idl:"l17",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 18,
                                    item: [
                                           { idm:"m18",mflag:"S",text: "Menyenangkan orang lain, ramah, penurut",idl:"l18",lflag:"S" },
                                           { idm:"m18",mflag:"B",text: "Tertawa lepas, hidup",idl:"l18",lflag:"I"},
                                           { idm:"m18",mflag:"D",text: "Pemberani, tegas",idl:"l18",lflag:"D"},
                                           { idm:"m18",mflag:"C",text: "Pendiam, tertutup, tenang",idl:"l18",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 19,
                                    item: [
                                           { idm:"m19",mflag:"S",text: "Menolak perubahan yang mendadak",idl:"l19",lflag:"B" },
                                           { idm:"m19",mflag:"I",text: "Cenderung terlalu banyak berjanji",idl:"l19",lflag:"I"},
                                           { idm:"m19",mflag:"B",text: "Mundur apabila berada dibawah tekanan",idl:"l19",lflag:"C"},
                                           { idm:"m19",mflag:"B",text: "Tidak takut untuk berkelahi",idl:"l19",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 20,
                                    item: [
                                           { idm:"m20",mflag:"S",text: "Menyediakan waktu untuk orang lain",idl:"l20",lflag:"S" },
                                           { idm:"m20",mflag:"C",text: "Merencanakan masa depan, bersiap-siap",idl:"l20",lflag:"B"},
                                           { idm:"m20",mflag:"I",text: "Menuju petualangan baru",idl:"l20",lflag:"I"},
                                           { idm:"m20",mflag:"D",text: "Menerima penghargaan atas pencapaian target",idl:"l20",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 21,
                                    item: [
                                           { idm:"m21",mflag:"B",text: "Ingin wewenang, kekuasan lebih",idl:"l21",lflag:"D" },
                                           { idm:"m21",mflag:"I",text: "Ingin kesempatan baru",idl:"l21",lflag:"B"},
                                           { idm:"m21",mflag:"S",text: "Menghindari dari perselisihan,konfik apapun",idl:"l21",lflag:"S"},
                                           { idm:"m21",mflag:"B",text: "Ingin arahan yang jelas",idl:"l21",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 22,
                                    item: [
                                           { idm:"m22",mflag:"I",text: "Penyemangat/pendukung yang baik",idl:"l22",lflag:"I" },
                                           { idm:"m22",mflag:"S",text: "Pendengar yang baik",idl:"l22",lflag:"S"},
                                           { idm:"m22",mflag:"C",text: "Penganalisa yang baik",idl:"l22",lflag:"C"},
                                           { idm:"m22",mflag:"D",text: "Pendelegasian yang baik/pandai membagi tugas",idl:"l22",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 23,
                                    item: [
                                           { idm:"m23",mflag:"B",text: "Peraturan perlu diuji",idl:"l23",lflag:"D" },
                                           { idm:"m23",mflag:"C",text: "Peraturan membuat menjadi adil",idl:"l23",lflag:"B"},
                                           { idm:"m23",mflag:"I",text: "Peraturan membuat menjadi membosankan",idl:"l23",lflag:"I"},
                                           { idm:"m23",mflag:"S",text: "Peraturan membuat menjadi aman",idl:"l23",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 24,
                                    item: [
                                           { idm:"m24",mflag:"B",text: "Dapat dipercaya dan diandalkan",idl:"l24",lflag:"S" },
                                           { idm:"m24",mflag:"I",text: "Kreatif, unik",idl:"l24",lflag:"I"},
                                           { idm:"m24",mflag:"D",text: "Berorientasi pada hasil/profit/untung",idl:"l24",lflag:"B"},
                                           { idm:"m24",mflag:"C",text: "Memegang teguh standar yang tinggi",idl:"l24",lflag:"B"}
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

