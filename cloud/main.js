Parse.Cloud.define('sendToUser', function(req, res) {
  var query = new Parse.Query(Parse.Installation);
  query.equalTo('user', 'badhri');

  Parse.Push.send({
    where: query,
    data: {
      alert: 'Test',
      sound: 'default',
      title: "The Shining"
    }
  }, {
    success: function() {
      console.log('##### PUSH OK');
      res.success('Hi');
    },
    error: function(error) {
      console.log('##### PUSH ERROR');
      res.success('fail' + error);
    },
    useMasterKey: true
  });
});

Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
