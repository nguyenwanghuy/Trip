
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import UserModel from '../models/user.model.js';

cloudinary.config({
  cloud_name: 'dxsyy0ocl',
  api_key: '719715235574389',
  api_secret: 'ICZrIwcuhpQr24efU2DZ6CjAEIQ',
});
const uploadAvatar = async (req, res) => {
 try {
  const { id } = req.user
 
  //add file
  const file = req.file
  //upload file to cloudinary server
  const result = await cloudinary.uploader.upload(file.path, {
    resource_type: 'auto',
    folder: 'Trip',
  })
//remove temporary folder
fs.unlinkSync(file.path)

  const avatarUrl = result && result.secure_url;
  // url-mongo 
  const updateUser = await UserModel.findOneAndUpdate(
    { _id: id },
    {
      avatar: avatarUrl
    },
    {
      new:true,
    }
  ).select("-password")
  return res.json({
    message: 'Uploading avatar successfully',
    data:updateUser
  })
 } catch (error) {
  res.status(500).send(error)
 }
}


const UserCtrl = {
  uploadAvatar
}

export default UserCtrl;