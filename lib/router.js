Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return Meteor.subscribe('posts');
  }
});

// posts index route
Router.route('/', {name: 'postsList'});

// account routes
Router.route('/signup', {name: 'register'});
Router.route('/signin', {name: 'login'});

// post show route
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() {
    return Posts.findOne(this.params._id);
  }
});

// new post route
Router.route('/post/new', {name: 'newPost'});

// use not found page for all routes
Router.onBeforeAction('dataNotFound', {only: 'postPage'});