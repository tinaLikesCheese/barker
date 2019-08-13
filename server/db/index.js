var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/barker', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected')
});

var dogSchema = new mongoose.Schema({
    dogName: { 
      type: String, unique: true 
    },
    age: Number, 
    size: String,
    url: String,
    likes: [{
      type: String
    }],
    about: String,
})

var Dog = mongoose.model('Dog', dogSchema)


module.exports.save = (dog, callback) => {
  let doggo = new Dog ({
    dogName: dog.dogName,
    age: dog.age,
    size: dog.size,
    url: dog.url, 
    likes: dog.likes,
    about: dog.about,
  })
  doggo.save((err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, 'success');
    }
  })
};

module.exports.findAll = (callback) => {
  Dog.find((err, dogs) => {
    if (err) {
      callback(err);
    } else {
      callback(null, dogs);
    }
  })
}

module.exports.filter = (params, callback) => {
  console.log(params)
  exports.findAll((err, dogs) => {
    if (err) {
      callback (err);
    } else {
      let result = dogs.filter(dog => params.hasOwnProperty(dog.size))
      callback (null, result);
    }
  })  
}


// let Billy =
// {
//   dogName: 'Billy',
//   age: 5, 
//   size: 'Medium',
//   url: 'https://munch-gallery.s3-us-west-1.amazonaws.com/Billy.jpg',
//   likes: ['fetch', 'toys', 'roughhouse'],
//   about: 'Lorem ipsum dolor amet aesthetic ipsum velit commodo, cronut slow-carb fingerstache edison bulb ex kitsch qui sed. Austin esse ethical, thundercats reprehenderit laborum four dollar toast tattooed blue bottle velit gluten-free. Dolor succulents cornhole kombucha nisi cred chillwave church-key culpa. Hexagon minim narwhal sunt cray. Jianbing taiyaki laborum truffaut small batch et YOLO, williamsburg excepteur knausgaard sartorial tbh squid.'
// }

// save(Billy, (err, data) => console.log(data));



