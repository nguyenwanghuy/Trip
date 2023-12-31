import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserModel from '../models/user.model.js';
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        message: 'Missing required keys',
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({
        message: 'Invalid credentials!',
      });
    }

    //check password
    const isMatchPassword = bcrypt.compare(password, existingUser.password);
    if (!isMatchPassword) {
      return res.status(401).json({
        message: 'Invalid credentials!',
      });
    }
    //token
    const jwtPayload = {
      id: existingUser.id,
      email: existingUser.email,
      password: existingUser.password,
    };
    const token = jwt.sign(jwtPayload, process.env.SECRET_KEY, {
      expiresIn: '1h',
    });
    res.json({
      accessToken: token,
      message: 'Login successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const register = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    if (!fullname || !email || !password) {
      return res.status(400).json({
        message: 'Missing required keys',
      });
    }
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({
        message: 'User has already exist',
      });
    }
    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    //create new user
    const newUser = new UserModel({
      fullname,
      email,
      password: hashPassword,
    });

    await newUser.save();
    res.status(200).json({
      message: 'Register new user successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
const getMe = async (req, res) => {
  const { id } = req.user;
  const currentUser = await UserModel.findById(id).select('-password');
  if (!currentUser) {
    res.status(401);
    throw new Error('user not found');
  }

  res.send({
    userInfo: currentUser,
    message: 'success',
  });
};

const AuthCtrl = {
  login,
  register,
  getMe,
};
export default AuthCtrl;
