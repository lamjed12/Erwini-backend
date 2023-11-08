var Userdb = require("../model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.registration = async (req, res) => {
    console.log(req.body);
    // crypting pass
 
    try {
        let salt = await bcrypt.genSalt(10);

        req.body.password = await bcrypt.hash(req.body.password, salt);

        const user = new Userdb({
            name:req.body.name,
            email:req.body.email,
            status:req.body.status,
            role: req.body.role,
            password: req.body.password
        })
      
  
      //save historique in the database
  
      res.status(201).json(await user.save())
    }
    catch (error) {
      {
        res.status(400).json(error);
      };
    }
  }

  module.exports.signin = async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password ;
    // crypting pass
    try {
        let user = await Userdb.findOne({
          email
          });
          if (!user)
          return res.status(200).json({ message : "User Not Exist" });
           let bool = await bcrypt.compare(password, user.password);
           console.log(bool);

          if(!bool)
            return res.status(200).json({ message : 'Incorrect Password !' });
         //let token = jwt.sign({id: user._id, name: user.name, role: user.role}, process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1min'});
          res.status(200).json({ message : 'Login Success !!!',role: user.role});

    }
    catch (error) {
      {
        res.status(400).json(error);
      };
    }
  }