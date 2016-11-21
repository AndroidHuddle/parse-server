Parse.Cloud.define('sendToUser', function(req, res) {
  var query = new Parse.Query(Parse.Installation);
  query.equalTo('user', 'badhri');

  Parse.Push.send({
    where: query,
    data: {
      alert: 'Test',
      badge: 1,
      sound: 'default'
    }
  }, {
    success: function() {
      console.log('##### PUSH OK');
    },
    error: function(error) {
      console.log('##### PUSH ERROR');
    },
    useMasterKey: true
  });
});
