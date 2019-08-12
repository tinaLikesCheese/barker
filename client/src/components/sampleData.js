



const imgArr = [
  'https://munch-gallery.s3-us-west-1.amazonaws.com/Billy.jpg',
  'https://munch-gallery.s3-us-west-1.amazonaws.com/Christian.jpg', 
  'https://munch-gallery.s3-us-west-1.amazonaws.com/Janice.jpg',
  'https://munch-gallery.s3-us-west-1.amazonaws.com/Joel.jpg'
];

// roughhouse:'',
// chase:'',
// fetch:'',
// toys:'',

const sampleData = [
  {
    name: 'Billy',
    age: 5, 
    size: 'Medium',
    url: 'https://munch-gallery.s3-us-west-1.amazonaws.com/Billy.jpg',
    likes: {
      fetch: true, 
      toys: true,
      roughhouse: true,
    },
    about: 'Lorem ipsum dolor amet aesthetic ipsum velit commodo, cronut slow-carb fingerstache edison bulb ex kitsch qui sed. Austin esse ethical, thundercats reprehenderit laborum four dollar toast tattooed blue bottle velit gluten-free. Dolor succulents cornhole kombucha nisi cred chillwave church-key culpa. Hexagon minim narwhal sunt cray. Jianbing taiyaki laborum truffaut small batch et YOLO, williamsburg excepteur knausgaard sartorial tbh squid.'
  }, 
  {
    name: 'Christian',
    age: 3, 
    size: 'Medium',
    url: 'https://munch-gallery.s3-us-west-1.amazonaws.com/Christian.jpg',
    likes: {
      fetch: true, 
      toys: true,
    },
    about: 'Lorem ipsum dolor amet aesthetic ipsum velit commodo, cronut slow-carb fingerstache edison bulb ex kitsch qui sed. Austin esse ethical, thundercats reprehenderit laborum four dollar toast tattooed blue bottle velit gluten-free. Dolor succulents cornhole kombucha nisi cred chillwave church-key culpa. Hexagon minim narwhal sunt cray. Jianbing taiyaki laborum truffaut small batch et YOLO, williamsburg excepteur knausgaard sartorial tbh squid.'
  },
  {
    name: 'Janice',
    age: 8, 
    size: 'Small',
    url: 'https://munch-gallery.s3-us-west-1.amazonaws.com/Janice.jpg',
    likes: {
      chase: true, 
      toys: true,
    },
    about: 'Lorem ipsum dolor amet aesthetic ipsum velit commodo, cronut slow-carb fingerstache edison bulb ex kitsch qui sed. Austin esse ethical, thundercats reprehenderit laborum four dollar toast tattooed blue bottle velit gluten-free. Dolor succulents cornhole kombucha nisi cred chillwave church-key culpa. Hexagon minim narwhal sunt cray. Jianbing taiyaki laborum truffaut small batch et YOLO, williamsburg excepteur knausgaard sartorial tbh squid.'
  },
  {
    name: 'Joel',
    age: 6, 
    size: 'Small',
    url: 'https://munch-gallery.s3-us-west-1.amazonaws.com/Joel.jpg',
    likes: {
      chase: true, 
      roughhouse: true,
    },
    about: 'Lorem ipsum dolor amet aesthetic ipsum velit commodo, cronut slow-carb fingerstache edison bulb ex kitsch qui sed. Austin esse ethical, thundercats reprehenderit laborum four dollar toast tattooed blue bottle velit gluten-free. Dolor succulents cornhole kombucha nisi cred chillwave church-key culpa. Hexagon minim narwhal sunt cray. Jianbing taiyaki laborum truffaut small batch et YOLO, williamsburg excepteur knausgaard sartorial tbh squid.'
  }, 
]

export default sampleData;