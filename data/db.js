var mongoose = require('mongoose');
var mongoPath = 'mongodb://localhost/regionoil';
var standardOpt = { server: { poolSize: 10 }};

mongoose.connect(mongoPath,standardOpt);

var usersDB = new mongoose.Schema({
    name: String,
    password: String,
    gender:String,
    facebookId: String,
    vkId: String,
    twitterId: String,
    second_name: String,
    date_ofBirth: Date,
    place_ofBirth: String,
    languages_able: [],
    banned: Boolean,
    date_ofRegister: {type: Date, default: Date.now},
    email: {type: String, unique: true},
    about: String,
    skype: String,
    phone: String,
    ava: String,
    rating: Number,
    facebook: String,
    vk: String,
    twitter: String,
    destination:String,
//After register
    type_arrival: String,//(club, guide, traveller, citizen ...)
    type_company: [],//[familly guy, alone, team ...]
    friends: [],
    photos: [],//{name: who took, photo: url}
    videos: [],//{name: who took, video: url}
    complaints: []//{name: who created, msg: body}
})

//Delete one document if time is come
/*userDB.index({ date_ofRegister: 1 }, { expireAfterSeconds : 5 });*/

exports.userDBModel = mongoose.model('user',usersDB);

var msgsDB = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    body: String,
    from: String,
    to: String,
    photos: [],//{name: who took, photo: url}
    videos: []//{name: who took, video: url}
})

var msgsDBModel = mongoose.model('msg',msgsDB);

var eventsDB = new mongoose.Schema({
    title: String,
    banned: Boolean,
    date_created: {type: Date, default: Date.now},
    date_exec: Date,
    about: String,
    team: [],//[who created this event]
    posted_by: String,//(id of the user)
    party: [],//[who have entered this event]
    photos: [],//{name: who took, photo: url}
    videos: [],//{name: who took, video: url}
    complaints: [],//{name: who created, msg: body}
    comments: []//{name: who commented, msg: body, date: when was created}

})
//Every event exists in DB for a year not longer
eventsDB.index({ date_created: 1 }, { expireAfterSeconds : 60*60*24*365 });

exports.eventsDBModel = mongoose.model('event',eventsDB);

var postsDB = new mongoose.Schema({
    title: String,
    banned: Boolean,
    date_created: {type: Date, default: Date.now},
    date_exec: Date,
    rating: Number,
    about: String,
    team:[],//[who created this event]
    posted_by:String,//[who posted this event]
    party:[],//[who've joined this event]
    comments: [],//{name: who commented, msg: body, date: when was created},
    photos: [],//{name: who took, photo: url}
    videos: [],//{name: who took, video: url}
    complaints: []//{name: who created, msg: body}
})

//Every post exists in DB for a 5 year not longer
postsDB.index({ date_created: 1 }, { expireAfterSeconds : 60*60*24*365*5 });

exports.postsDBModel = mongoose.model('post',postsDB);

var middlersDB = new mongoose.Schema({
    title: String,
    banned: Boolean,
    date_created: {type: Date, default: Date.now},
    date_exec: Date,
    rating: Number,
    about: String,
    team:[],//[who created this event]
    posted_by:String,//[who posted this event]
    party:[],//[who've joined this event]
    comments: [],//{name: who commented, msg: body, date: when was created},
    photos: [],//{name: who took, photo: url}
    videos: [],//{name: who took, video: url}
    complaints: []//{name: who created, msg: body}
})

//Every middler exists in DB for a year not longer
middlersDB.index({ date_created: 1 }, { expireAfterSeconds : 60*60*24*365 });

exports.middlersDBModel = mongoose.model('middler',middlersDB);





