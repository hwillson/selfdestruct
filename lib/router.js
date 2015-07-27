FlowRouter.route('/', {
  action: function (params, queryParams) {
    FlowLayout.render('commonLayout', {
      body: 'newMessage'
    });
  }
});

// TODO - temporary, for reference
FlowRouter.route('/static', {
  action: function (params, queryParams) {
    FlowLayout.render('staticLayout');
  }
});
