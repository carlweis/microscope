Template.newPost.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      createdAt: new Date(),
      likes: 0
    };
    post._id = Posts.insert(post);
    Router.go('postPage', post);
  }
});