Router.route('contact', {
  path: '/contact',
  waitOn: function(){
  },
  onBeforeAction: function(){
    this.next()
    return mustBeLoggedIn({except: ['home']})
  },
  onAfterAction: function() {
  }
});
