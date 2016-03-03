Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

// default route
Router.route('/', {name: 'postsList'});

// post show route
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

// use not found page for all routes
Router.onBeforeAction('dataNotFound', {only: 'postPage'});