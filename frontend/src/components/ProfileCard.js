import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfileCard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div>
      <div className='w-full bg-primary felx flex-col items-center shadow-sm rounded-xl px-6 py-4'>
        <div className='w-full flex items-center justify-between border-b pb-5 border-[#66666645]'>
          <Link to='/me' className='flex gap-2'>
            <img
              className='w-14 h-14 object-cover rounded-full'
              src={
                user?.profileUrl ??
                'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
              }
            />
            <div className='flex flex-col justify-center'>
              <p className='tex-lg font-medium text-ascent-1'>
                {user.firstName} {user.lastName}
              </p>
              <span className='text-ascent-2'>User's ocupation</span>
            </div>
          </Link>
        </div>
        {/* <div className='w-full flex flex-col gap-2 py-4 border-b border-[#66666645]'>
          <p className='text-xl text-ascent-1 font-semibold'>Friends</p>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileCard;
