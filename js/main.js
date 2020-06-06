const templateElement = document.getElementById('entry-template').innerHTML;
const template = Handlebars.compile(templateElement);

const context = {   
    title: 'Welcome to Musicon',
    body: 'Musicon is a budding musical storefront with a mission to share the joy of music. These magnificent auditory tools are designed with musical creators, like you, in mind. Hobbyists, beginners, and experts alike can appreciate the resplendent sounds supplied by each and every instrument we carry. Join us in delivering the euphoric vibrations of melodia to the citizens of the world!',
    informations: [
      {
        image: 'https://raw.githubusercontent.com/StyvenSoft/Colmar-Academy/master/images/information-orientation.jpg',
        name: 'Orientation date',
        description: 'Tue 10/11 & Wed 10/12: 8am - 3pm'
      },
      {
        image: 'https://raw.githubusercontent.com/StyvenSoft/Colmar-Academy/master/images/information-campus.jpg',
        name: 'Our campus',
        description: 'Find which campus in close by you'
      },
      {
        image: 'https://raw.githubusercontent.com/StyvenSoft/Colmar-Academy/master/images/information-guest-lecture.jpg',
        name: 'Our guest lecture',
        description: 'Join and keynote with Oliver Sack about music and medical treatment'
      }
    ]
}

const compiledHtml = template(context);

document.getElementById('information').innerHTML = compiledHtml;