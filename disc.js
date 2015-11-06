Questions = new Mongo.Collection("questions");
Answers = new Mongo.Collection("answers");
Router.route('/', function () {
  this.render('home');
});
Router.route('/admin', function () {
  this.render('admin');
});
Router.route('/chart/:_ms/:_ls/:_cs', function () {
  this.render('chart');
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
Template.chart.rendered = function(){
var resm = Router.current().params._ms.split(",");
var resl = Router.current().params._ls.split(",");
var resc = Router.current().params._cs.split(",");
var mdx = 50;
var mdy = {};
var mix = 95;
var miy = {};
var msx = 135;
var msy = {};
var mcx = 180;
var mcy = {};
mdy['24']=55;
mdy['23']=55;
mdy['23']=55;
mdy['21']=55;
mdy['20']=70;
mdy['19']=70;
mdy['18']=70;
mdy['17']=70;
mdy['16']=70;
mdy['15']=85;
mdy['14']=145;
mdy['13']=160;
mdy['12']=180;
mdy['11']=194;
mdy['10']=208;
mdy['9']=235;
mdy['8']=280;
mdy['7']=295;
mdy['6']=325;
mdy['5']=355;
mdy['4']=370;
mdy['3']=400;
mdy['2']=480;
mdy['1']=480;
mdy['0']=535;

miy['24']=55;
miy['23']=55;
miy['22']=55;
miy['21']=55;
miy['20']=55;
miy['19']=55;
miy['18']=70;
miy['17']=70;
miy['16']=70;
miy['15']=70;
miy['14']=70;
miy['13']=70;
miy['12']=70;
miy['11']=70;
miy['10']=95;
miy['9']=95;
miy['8']=130;
miy['7']=145;
miy['6']=194;
miy['5']=208;
miy['4']=280;
miy['3']=355;
miy['2']=400;
miy['1']=465;
miy['0']=565;

msy['24']=55;
msy['23']=55;
msy['22']=55;
msy['21']=55;
msy['20']=55;
msy['19']=85;
msy['18']=85;
msy['17']=85;
msy['16']=85;
msy['15']=85;
msy['14']=85;
msy['13']=130;
msy['12']=130;
msy['11']=160;
msy['10']=160;
msy['9']=180;
msy['8']=208;
msy['7']=220;
msy['6']=280;
msy['5']=295;
msy['4']=340;
msy['3']=370;
msy['2']=430;
msy['1']=465;
msy['0']=510;

mcy['24']=55;
mcy['23']=55;
mcy['22']=55;
mcy['21']=55;
mcy['20']=55;
mcy['19']=55;
mcy['18']=55;
mcy['17']=55;
mcy['16']=70;
mcy['15']=70;
mcy['14']=70;
mcy['13']=70;
mcy['12']=85;
mcy['11']=85;
mcy['10']=115;
mcy['9']=115;
mcy['8']=130;
mcy['7']=145;
mcy['6']=208;
mcy['5']=235;
mcy['4']=280;
mcy['3']=370;
mcy['2']=430;
mcy['1']=465;
mcy['0']=535;

    var canvas = $("#canvas1");
    var ctx = canvas[0].getContext('2d');
ctx.beginPath();  
ctx.strokeStyle = "red";  
ctx.lineWidth = "2";
ctx.moveTo(mdx,mdy[resm[0]]);
ctx.lineTo(mix,miy[resm[1]]);
ctx.lineTo(msx,msy[resm[2]]);
ctx.lineTo(mcx,mcy[resm[3]]);
ctx.stroke();
// Red rectangle
ctx.beginPath();
ctx.font="14px Georgia";
ctx.fillText("Graph 1 MOST : Mask, Public Self",10,15);
ctx.lineWidth = "1";
ctx.strokeStyle = "black";
ctx.rect(40, 20, 40, 20);  
ctx.fillText("D",55,35);
ctx.rect(83, 20, 40, 20);  
ctx.fillText("I",100,35);
ctx.rect(126, 20, 40, 20);  
ctx.fillText("S",142,35);
ctx.rect(169, 20, 40, 20);  
ctx.fillText("C",182,35);
ctx.rect(40, 42, 40, 550); 
ctx.rect(83, 42, 40, 550); 
ctx.rect(126, 42, 40, 550); 
ctx.rect(169, 42, 40, 550); 
ctx.moveTo(40,310);
ctx.lineTo(210,310);

ctx.fillText("21",mdx,mdy['21']);
ctx.fillText("16",mdx,mdy['16']);
ctx.fillText("15",mdx,mdy['15']);
ctx.fillText("19",mix,miy['19']);
ctx.fillText("11",mix,miy['11']);
ctx.fillText("9",mix,miy['9']);
ctx.fillText("20",msx,msy['20']);
ctx.fillText("14",msx,msy['14']);
ctx.fillText("17",mcx,mcy['17']);
ctx.fillText("13",mcx,mcy['13']);
ctx.fillText("11",mcx,mcy['11']);

ctx.fillText("14",mdx,mdy['14']);
ctx.fillText("13",mdx,mdy['13']);
ctx.fillText("8",mix,miy['8']);
ctx.fillText("7",mix,miy['7']);
ctx.fillText("12",msx,msy['12']);
ctx.fillText("10",msx,msy['10']);
ctx.fillText("9",mcx,mcy['9']);
ctx.fillText("8",mcx,mcy['8']);
ctx.fillText("7",mcx,mcy['7']);

ctx.fillText("12",mdx,mdy['12']);
ctx.fillText("11",mdx,mdy['11']);
ctx.fillText("10",mdx,mdy['10']);
ctx.fillText("9",mdx,mdy['9']);
ctx.fillText("6",mix,miy['6']);
ctx.fillText("5",mix,miy['5']);
ctx.fillText("9",msx,msy['9']);
ctx.fillText("8",msx,msy['8']);
ctx.fillText("7",msx,msy['7']);
ctx.fillText("6",mcx,mcy['6']);
ctx.fillText("5",mcx,mcy['5']);

ctx.fillText("8",mdx,mdy['8']);
ctx.fillText("7",mdx,mdy['7']);
ctx.fillText("4",mix,miy['4']);
ctx.fillText("6",msx,msy['6']);
ctx.fillText("5",msx,msy['5']);
ctx.fillText("4",mcx,mcy['4']);

ctx.fillText("6",mdx,mdy['6']);
ctx.fillText("5",mdx,mdy['5']);
ctx.fillText("4",mdx,mdy['4']);
ctx.fillText("3",mix,miy['3']);
ctx.fillText("4",msx,msy['4']);
ctx.fillText("3",msx,msy['3']);
ctx.fillText("3",mcx,mcy['3']);

ctx.fillText("3",mdx,mdy['3']);
ctx.fillText("2",mix,miy['2']);
ctx.fillText("2",msx,msy['2']);
ctx.fillText("2",mcx,mcy['2']);

ctx.fillText("1",mdx,mdy['1']);
ctx.fillText("1",mix,miy['1']);
ctx.fillText("1",msx,msy['1']);
ctx.fillText("0",msx,msy['0']);
ctx.fillText("1",mcx,mcy['1']);

ctx.fillText("0",mdx,mdy['0']);
ctx.fillText("0",mix,miy['0']);
ctx.fillText("0",mcx,mcy['0']);

ctx.stroke();

ctx.beginPath();
ctx.font="18px Georgia";
ctx.fillText("8",215,58);
ctx.fillText("6",215,115);
ctx.fillText("4",215,185);
ctx.fillText("2",215,255);
ctx.fillText("0",215,320);
ctx.fillText("-2",215,390);
ctx.fillText("-4",215,465);
ctx.fillText("-6",215,540);
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([2,3]);
ctx.moveTo(40,100);
ctx.lineTo(210,100);
ctx.moveTo(40,170);
ctx.lineTo(210,170);
ctx.moveTo(40,240);
ctx.lineTo(210,240);
ctx.moveTo(40,380);
ctx.lineTo(210,380);
ctx.moveTo(40,450);
ctx.lineTo(210,450);
ctx.moveTo(40,520);
ctx.lineTo(210,520);
ctx.stroke();
}
  // This code only runs on the client
  Session.setDefault('counter', 0);
    Template.admin.helpers({
    answers: function () {
      return Answers.find();
    }
  });
  Template.home.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  this.subscribe("questions");
});
  Template.admin.onCreated(function () {
  // Use this.subscribe inside onCreated callback
  this.subscribe("anwers");
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
        var email=event.target.email.value;
        Answers.insert({
        nama: nama,
        email:email,
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
                                           { rm:"m11",rl:"l11",idm:"m1",mflag:"S",text: "Mudah bergaul, ramah, mudah setuju",idl:"l1",lflag:"S" },
                                           { rm:"m12",rl:"l12",idm:"m1",mflag:"I",text: "Mempercayai, percaya pada orang lain",idl:"l1",lflag:"I"},
                                           { rm:"m13",rl:"l13",idm:"m1",mflag:"B",text: "Petualang, suka mengambil resiko",idl:"l1",lflag:"D"},
                                           { rm:"m14",rl:"l14",idm:"m1",mflag:"C",text: "Penuh toleransi, menghormati orang lain",idl:"l1",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 2,
                                    item: [
                                           { rm:"m21",rl:"l21",idm:"m2",mflag:"D",text: "Yang penting adalah hasil",idl:"l2",lflag:"D" },
                                           { rm:"m22",rl:"l22",idm:"m2",mflag:"C",text: "Kerjakan dengan benar, ketepatan sangat penting",idl:"l2",lflag:"C"},
                                           { rm:"m23",rl:"l23",idm:"m2",mflag:"B",text: "Buat agar menyenangkan",idl:"l2",lflag:"I"},
                                           { rm:"m24",rl:"l24",idm:"m2",mflag:"B",text: "Kerjakan bersama-sama",idl:"l2",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 3,
                                    item: [
                                           { rm:"m31",rl:"l31",idm:"m3",mflag:"B",text: "Pendidikan, kebudayaan",idl:"l3",lflag:"C" },
                                           { rm:"m32",rl:"l32",idm:"m3",mflag:"D",text: "Prestasi, penghargaan",idl:"l3",lflag:"D"},
                                           { rm:"m33",rl:"l33",idm:"m3",mflag:"S",text: "Keselamatan, keamanan",idl:"l3",lflag:"S"},
                                           { rm:"m34",rl:"l34",idm:"m3",mflag:"I",text: "Sosial, pertemuan kelompok",idl:"l3",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 4,
                                    item: [
                                           { rm:"m41",rl:"l41",idm:"m4",mflag:"C",text: "Lembut, tertutup",idl:"l4",lflag:"B" },
                                           { rm:"m42",rl:"l42",idm:"m4",mflag:"D",text: "Visionary, pandangan ke masa depan",idl:"l4",lflag:"D"},
                                           { rm:"m43",rl:"l43",idm:"m4",mflag:"B",text: "Pusat perhatian, suka bersosialisasi",idl:"l4",lflag:"I"},
                                           { rm:"m44",rl:"l44",idm:"m4",mflag:"S",text: "Pendamai, membawa ketenangan",idl:"l4",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 5,
                                    item: [
                                           { rm:"m51",rl:"l51",idm:"m5",mflag:"B",text: "Menahan diri, bisa hidup tanpa memiliki",idl:"l5",lflag:"C" },
                                           { rm:"m52",rl:"l52",idm:"m5",mflag:"D",text: "Membeli karena dorongan hasrat/impulse",idl:"l5",lflag:"D"},
                                           { rm:"m53",rl:"l53",idm:"m5",mflag:"S",text: "Akan menunggu, tanpa tekanan",idl:"l5",lflag:"S"},
                                           { rm:"m54",rl:"l54",idm:"m5",mflag:"I",text: "Akan membeli apa yang diinginkan",idl:"l5",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 6,
                                    item: [
                                           { rm:"m61",rl:"l61",idm:"m6",mflag:"D",text: "Mengambil kendali, bersikap langsung/direct",idl:"l6",lflag:"D" },
                                           { rm:"m62",rl:"l62",idm:"m6",mflag:"B",text: "Suka bergaul, antusias",idl:"l6",lflag:"I"},
                                           { rm:"m63",rl:"l63",idm:"m6",mflag:"B",text: "Mudah ditebak, konsisten",idl:"l6",lflag:"S"},
                                           { rm:"m64",rl:"l64",idm:"m6",mflag:"C",text: "Waspada, berhati-hati",idl:"l6",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 7,
                                    item: [
                                           { rm:"m71",rl:"l71",idm:"m7",mflag:"I",text: "Menyemangati orang lain",idl:"l7",lflag:"I" },
                                           { rm:"m72",rl:"l72",idm:"m7",mflag:"B",text: "Berusaha mencapai kesempurnaan",idl:"l7",lflag:"C"},
                                           { rm:"m73",rl:"l73",idm:"m7",mflag:"B",text: "Menjadi bagian dari tim/kelompok",idl:"l7",lflag:"S"},
                                           { rm:"m74",rl:"l74",idm:"m7",mflag:"C",text: "Ingin menetapkan goal/tujuan",idl:"l7",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 8,
                                    item: [
                                           { rm:"m81",rl:"l81",idm:"m8",mflag:"S",text: "Bersahabat, mudah bergaul",idl:"l8",lflag:"B" },
                                           { rm:"m82",rl:"l82",idm:"m8",mflag:"B",text: "Unik, bosan pada rutinitas",idl:"l8",lflag:"I"},
                                           { rm:"m83",rl:"l83",idm:"m8",mflag:"D",text: "Aktif melakukan perubahan",idl:"l8",lflag:"D"},
                                           { rm:"m84",rl:"l84",idm:"m8",mflag:"C",text: "Ingin segala sesuatu akurat dan pasti",idl:"l8",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 9,
                                    item: [
                                           { rm:"m91",rl:"l91",idm:"m9",mflag:"D",text: "Sulit dikalahkan/ditundukkan",idl:"l9",lflag:"D" },
                                           { rm:"m92",rl:"l92",idm:"m9",mflag:"S",text: "Melaksanakan sesuai perintah",idl:"l9",lflag:"B"},
                                           { rm:"m93",rl:"l93",idm:"m9",mflag:"I",text: "Bersemangat, riang",idl:"l9",lflag:"I"},
                                           { rm:"m94",rl:"l94",idm:"m9",mflag:"B",text: "Ingin keteraturan, rapi",idl:"l9",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 10,
                                    item: [
                                           { rm:"m101",rl:"l101",idm:"m10",mflag:"C",text: "Menjadi frustasi",idl:"l10",lflag:"C" },
                                           { rm:"m102",rl:"l102",idm:"m10",mflag:"S",text: "Memendam perasaan dalam hati",idl:"l10",lflag:"S"},
                                           { rm:"m103",rl:"l103",idm:"m10",mflag:"B",text: "Menyampaikan sudut pandang pribadi",idl:"l10",lflag:"I"},
                                           { rm:"m104",rl:"l104",idm:"m10",mflag:"D",text: "Berani menghadapi oposisi",idl:"l10",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 11,
                                    item: [
                                           { rm:"m111",rl:"l111",idm:"m11",mflag:"B",text: "Mengalah, tidak suka pertentangan",idl:"l11",lflag:"S" },
                                           { rm:"m112",rl:"l112",idm:"m11",mflag:"C",text: "Penuh dengan hal-hal kecil, detail",idl:"l11",lflag:"B"},
                                           { rm:"m113",rl:"l113",idm:"m11",mflag:"I",text: "Berubah pada menit-menit terakhir",idl:"l11",lflag:"I"},
                                           { rm:"m114",rl:"l114",idm:"m11",mflag:"D",text: "Mendesak/memaksa agak kasar",idl:"l11",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 12,
                                    item: [
                                           { rm:"m121",rl:"l121",idm:"m12",mflag:"D",text: "Saya akan pimpin mereka",idl:"l12",lflag:"B" },
                                           { rm:"m122",rl:"l122",idm:"m12",mflag:"S",text: "Saya akan ikut, mengikuti",idl:"l12",lflag:"S"},
                                           { rm:"m123",rl:"l123",idm:"m12",mflag:"I",text: "Saya akan pengaruhi, bujuk mereka",idl:"l12",lflag:"I"},
                                           { rm:"m124",rl:"l124",idm:"m12",mflag:"C",text: "Saya akan mendapatkan fakta-faktanya",idl:"l12",lflag:"B"}
                                           ]
                                    },
                                    {
                                    num: 13,
                                    item: [
                                           { rm:"m131",rl:"l131",idm:"m13",mflag:"I",text: "Hidup lincah banyak bicara",idl:"l13",lflag:"B" },
                                           { rm:"m132",rl:"l132",idm:"m13",mflag:"D",text: "Cepat, penuh keyakinan",idl:"l13",lflag:"D"},
                                           { rm:"m133",rl:"l133",idm:"m13",mflag:"S",text: "Berusaha menjaga keseimbangan",idl:"l13",lflag:"S"},
                                           { rm:"m134",rl:"l134",idm:"m13",mflag:"B",text: "Berusaha patuh pada peraturan",idl:"l13",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 14,
                                    item: [
                                           { rm:"m141",rl:"l141",idm:"m14",mflag:"D",text: "Ingin kemajuan/peningkatan",idl:"l14",lflag:"D" },
                                           { rm:"m142",rl:"l142",idm:"m14",mflag:"S",text: "Puas dengan keadaan, tenang/mudah puas",idl:"l14",lflag:"B"},
                                           { rm:"m143",rl:"l143",idm:"m14",mflag:"I",text: "Menunjukkan perasaan dengan terbuka",idl:"l14",lflag:"B"},
                                           { rm:"m144",rl:"l144",idm:"m14",mflag:"B",text: "Rendah hati, sederhana",idl:"l14",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 15,
                                    item: [
                                           { rm:"m151",rl:"l151",idm:"m15",mflag:"S",text: "Memikirkan orang lain dahulu",idl:"l15",lflag:"S" },
                                           { rm:"m152",rl:"l152",idm:"m15",mflag:"D",text: "Suka bersaing/kompetitif, suka tantangan",idl:"l15",lflag:"D"},
                                           { rm:"m153",rl:"l153",idm:"m15",mflag:"I",text: "Optimis, berpikir positif",idl:"l15",lflag:"C"},
                                           { rm:"m154",rl:"l154",idm:"m15",mflag:"B",text: "Sistematis, berpikir logis",idl:"l15",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 16,
                                    item: [
                                           { rm:"m161",rl:"l161",idm:"m16",mflag:"C",text: "Mengelola waktu dengan efisien",idl:"l16",lflag:"B" },
                                           { rm:"m162",rl:"l162",idm:"m16",mflag:"D",text: "Sering terburu-buru, merasa ditekan",idl:"l16",lflag:"D"},
                                           { rm:"m163",rl:"l163",idm:"m16",mflag:"I",text: "Hal-hal sosial adalah penting",idl:"l16",lflag:"I"},
                                           { rm:"m164",rl:"l164",idm:"m16",mflag:"S",text: "Suka menyelesaikan hal yang sudah dimulai",idl:"l16",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 17,
                                    item: [
                                           { rm:"m171",rl:"l171",idm:"m17",mflag:"C",text: "Tenang, pendiam, tertutup",idl:"l17",lflag:"C" },
                                           { rm:"m172",rl:"l172",idm:"m17",mflag:"I",text: "Gembira, bebas, riang",idl:"l17",lflag:"I"},
                                           { rm:"m173",rl:"l173",idm:"m17",mflag:"S",text: "Menyenangkan, baik hati",idl:"l17",lflag:"B"},
                                           { rm:"m174",rl:"l174",idm:"m17",mflag:"D",text: "Menyolok, berani",idl:"l17",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 18,
                                    item: [
                                           { rm:"m181",rl:"l181",idm:"m18",mflag:"S",text: "Menyenangkan orang lain, ramah, penurut",idl:"l18",lflag:"S" },
                                           { rm:"m182",rl:"l182",idm:"m18",mflag:"B",text: "Tertawa lepas, hidup",idl:"l18",lflag:"I"},
                                           { rm:"m183",rl:"l183",idm:"m18",mflag:"D",text: "Pemberani, tegas",idl:"l18",lflag:"D"},
                                           { rm:"m184",rl:"l184",idm:"m18",mflag:"C",text: "Pendiam, tertutup, tenang",idl:"l18",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 19,
                                    item: [
                                           { rm:"m191",rl:"l191",idm:"m19",mflag:"S",text: "Menolak perubahan yang mendadak",idl:"l19",lflag:"B" },
                                           { rm:"m192",rl:"l192",idm:"m19",mflag:"I",text: "Cenderung terlalu banyak berjanji",idl:"l19",lflag:"I"},
                                           { rm:"m193",rl:"l193",idm:"m19",mflag:"B",text: "Mundur apabila berada dibawah tekanan",idl:"l19",lflag:"C"},
                                           { rm:"m194",rl:"l194",idm:"m19",mflag:"B",text: "Tidak takut untuk berkelahi",idl:"l19",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 20,
                                    item: [
                                           { rm:"m201",rl:"l201",idm:"m20",mflag:"S",text: "Menyediakan waktu untuk orang lain",idl:"l20",lflag:"S" },
                                           { rm:"m202",rl:"l202",idm:"m20",mflag:"C",text: "Merencanakan masa depan, bersiap-siap",idl:"l20",lflag:"B"},
                                           { rm:"m203",rl:"l203",idm:"m20",mflag:"I",text: "Menuju petualangan baru",idl:"l20",lflag:"I"},
                                           { rm:"m204",rl:"l204",idm:"m20",mflag:"D",text: "Menerima penghargaan atas pencapaian target",idl:"l20",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 21,
                                    item: [
                                           { rm:"m211",rl:"l211",idm:"m21",mflag:"B",text: "Ingin wewenang, kekuasan lebih",idl:"l21",lflag:"D" },
                                           { rm:"m212",rl:"l212",idm:"m21",mflag:"I",text: "Ingin kesempatan baru",idl:"l21",lflag:"B"},
                                           { rm:"m213",rl:"l213",idm:"m21",mflag:"S",text: "Menghindari dari perselisihan,konfik apapun",idl:"l21",lflag:"S"},
                                           { rm:"m214",rl:"l214",idm:"m21",mflag:"B",text: "Ingin arahan yang jelas",idl:"l21",lflag:"C"}
                                           ]
                                    },
                                    {
                                    num: 22,
                                    item: [
                                           { rm:"m221",rl:"l221",idm:"m22",mflag:"I",text: "Penyemangat/pendukung yang baik",idl:"l22",lflag:"I" },
                                           { rm:"m222",rl:"l222",idm:"m22",mflag:"S",text: "Pendengar yang baik",idl:"l22",lflag:"S"},
                                           { rm:"m223",rl:"l223",idm:"m22",mflag:"C",text: "Penganalisa yang baik",idl:"l22",lflag:"C"},
                                           { rm:"m224",rl:"l224",idm:"m22",mflag:"D",text: "Pendelegasian yang baik/pandai membagi tugas",idl:"l22",lflag:"D"}
                                           ]
                                    },
                                    {
                                    num: 23,
                                    item: [
                                           { rm:"m231",rl:"l231",idm:"m23",mflag:"B",text: "Peraturan perlu diuji",idl:"l23",lflag:"D" },
                                           { rm:"m232",rl:"l232",idm:"m23",mflag:"C",text: "Peraturan membuat menjadi adil",idl:"l23",lflag:"B"},
                                           { rm:"m233",rl:"l233",idm:"m23",mflag:"I",text: "Peraturan membuat menjadi membosankan",idl:"l23",lflag:"I"},
                                           { rm:"m234",rl:"l234",idm:"m23",mflag:"S",text: "Peraturan membuat menjadi aman",idl:"l23",lflag:"S"}
                                           ]
                                    },
                                    {
                                    num: 24,
                                    item: [
                                           { rm:"m241",rl:"l241",idm:"m24",mflag:"B",text: "Dapat dipercaya dan diandalkan",idl:"l24",lflag:"S" },
                                           { rm:"m242",rl:"l242",idm:"m24",mflag:"I",text: "Kreatif, unik",idl:"l24",lflag:"I"},
                                           { rm:"m243",rl:"l243",idm:"m24",mflag:"D",text: "Berorientasi pada hasil/profit/untung",idl:"l24",lflag:"B"},
                                           { rm:"m244",rl:"l244",idm:"m24",mflag:"C",text: "Memegang teguh standar yang tinggi",idl:"l24",lflag:"B"}
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

