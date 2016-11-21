Parse.Cloud.define('sendToUser', function(req, res) {
  var params = req.params;

  var message = "New friend request";
  var userid = "badhri";
  var titleString = "Parse";
  var query = new Parse.Query(Parse.Installation);
  query.equalTo('user', 'badhri');

  Parse.Push.send({
    where: query,
    data: {
      alert: 'New friend request',
      sound: 'default',
      title: 'Parse'
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

Parse.Cloud.define('sendToChannel', function(req, res) {
  Parse.Push.send({
    channels: ['abcd'],
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
