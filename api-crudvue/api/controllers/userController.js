const mongoose = require('mongoose');
const user = mongoose.model('user');


//Lista todos os Usuarios
exports.list_all_users = (req, res) => {
    user.find({}, (err, users) => {
    if (err) res.send(err);
    res.json(users);
  });
};

//Cria os Usuarios
exports.create_a_user = (req, res) => {
  const newUser = new user(req.body);    
  newUser.save((err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

//Lista o usuario pelo id
exports.read_a_user = (req, res) => {
    user.findById(req.params.userId, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

//Edita usuario pelo id
exports.update_a_user = (req, res) => {
  user.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

//Deleta o usuario pelo id
exports.delete_a_user = (req, res) => {
    user.deleteOne({ _id: req.params.userId }, err => {
    if (err) res.send(err);
    res.json({
      message: 'usuario excluída com sucesso',
     _id: req.params.userkId
    });
  });
};