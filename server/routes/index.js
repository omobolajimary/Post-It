const usertodosController = require('../controllers').user;
const messageController = require('../controllers').message;
const grouptodosController = require('../controllers').group;
const groupUserController = require('../controllers').groupUserController;
module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Post It',
  }));

  router.post('/api/user', userController.create);
  app.get('/api/user', userController.list);
  app.get('/api/user/:userId', userController.retrieve);
  app.put('/api/user/:userId', userController.update);
  app.delete('/api/user/:userId', userController.destroy);

  app.post('/api/user/:userId/messages', messageController.create);
  app.put('/api/user/:userId/items/:messageId', messageController.update);
  app.delete(
    '/api/user/:userId/message/:messageId', userController.destroy
  );

  router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});
  app.all('/api/user/:userId/messages', (req, res) =>
    res.status(405).send({
      message: 'Method Not Allowed',
  }));
};