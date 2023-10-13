import React, { useContext, useState } from 'react';
import TopBar from '../components/TopBar';
import userAPI from '../api/userAPI';
import AuthContext from '../context/authContext';
import ProfileHeaderCard from '../components/ProfileHeaderCard';
import NoProfile from '../assets/NoProfile.jpg';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  // const { posts } = useSelector((state) => state.posts);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [loading, setLoading] = useState(null);
  // const {
  //   auth: { user },
  //   fetchCurrentUser,
  // } = useContext(AuthContext);

  // const handleUpload = async () => {
  //   if (!selectedFile) return;

  //   try {
  //     setLoading(true);
  //     const formData = new FormData();
  //     formData.append('avatar', selectedFile);

  //     // Make the API request to upload the file
  //     await userAPI.uploadAvatar(formData);
  //     await fetchCurrentUser();
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const handleFileChange = (e) => {
  //   const file = e.target.files[0];
  //   setSelectedFile(file);
  // };

  return (
    <div>
      <div className='home w-full px-0 lg:px-10 pb-20 2xl:px-20 bg-bgColor  h-screen overflow-hidden'>
        <TopBar />

        <div className='w-full rounded-lg h-[35rem] mt-5 flex flex-col justify-between items-center lg:gap-4 pb-10 bg-primary relative'>
          <div className='w-full h-3/4 '>
            <img
              src='https://img.freepik.com/free-photo/old-black-background-grunge-texture-dark-wallpaper-blackboard-chalkboard-room-wall_1258-28312.jpg'
              className='w-full h-full rounded-t-lg object-cover'
            />
          </div>
          <div className='w-48 h-48 absolute bottom-20 left-1/2 transform -translate-x-1/2 rounded-full'>
            <img
              src={user?.profileUrl}
              className='w-full h-full rounded-full border-[5px] border-ascent-3 object-cover'
            />
          </div>
          <div className='font-bold text-2xl text-ascent-1'>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

{
  /* <div>
        {loading && <p>Upload avatar in progress...</p>}
        <input type='file' onChange={handleFileChange} accept='image/*' />
        <button onClick={handleUpload}>Upload avatar</button>
        <div>
          <img
            style={{ width: '200px', height: 'auto', objectFit: 'cover' }}
            alt='avatar'
            src={user?.avatar || ''}
          />
        </div>
      </div> */
}
