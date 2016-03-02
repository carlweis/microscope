// seed the posts collection with initial data
if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Introducing Telescope',
    url: 'http://sachagreif.com/introducing-telescope/',
    createdAt: new Date(),
    likes: 15
  });

  Posts.insert({
    title: 'Meteor',
    url: 'http://meteor.com',
    createdAt: new Date(),
    likes: 185
  });

  Posts.insert({
    title: 'The Meteor Book',
    url: 'http://themeteorbook.com',
    createdAt: new Date(),
    likes: 52
  });
}