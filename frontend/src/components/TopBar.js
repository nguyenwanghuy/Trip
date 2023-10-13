import React from 'react';
import { Link } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { user } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { SetTheme } from '../redux/theme';
import TextInput from './TextInput';
import { useForm } from 'react-hook-form';
import { UserLogout } from '../redux/userSlice';

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleTheme = () => {
    const themeValue = theme === 'light' ? 'dark' : 'light';

    dispatch(SetTheme(themeValue));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSearch = async (data) => {};
  return (
    <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary'>
      <Link to='/' className='flex gap-2 items-center'>
        <div className='p-1 md:p-2 bg-[#065ad8] rounded text-white'>TS</div>
        <span className='text-xl md:text-2xl text-[#065ad8] font-semibold'>
          TripSocial
        </span>
      </Link>

      {/* <div className='hidden md:flex items-center justify-center '>
        <div className='relative hidden md:flex items-center justify-center'>
          <input
            className=' w-[18rem] h-[3rem] lg:w-[38rem] rounded-xl py-3 border '
            type='text'
            name='search'
            placeholder='   Search...'
            id='search'
          />
          <button className=' absolute top-1/2 right-3 -translate-y-1/2 text-2xl  p-3'>
            <CiSearch />
          </button>
        </div>
      </div> */}

      <form
        className='relative hidden md:flex items-center justify-center '
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder='Search...'
          styles='w-[18rem] lg:w-[38rem] h-full mt-[-0.5rem] rounded-xl py-3'
          register={register('search')}
        />
        <button
          className=' absolute top-1/2 right-3 -translate-y-1/2 text-2xl p-3'
          type='submit'
        >
          <CiSearch />
        </button>
      </form>

      <div className='flex gap-4 items-center text-ascent-1 text-md '>
        <button onClick={() => handleTheme()}>
          {theme ? 'dark' : 'light'}
        </button>
        <div className='hidden lg:flex'>
          <IoMdNotificationsOutline />
        </div>
        <button onClick={() => dispatch(UserLogout())} className='border p-2'>
          Log out
        </button>
      </div>
      <div className='flex items-center justify-between gap-3'>
        <img
          className='w-12 h-12 object-cover rounded-full'
          src={
            user?.profileUrl ??
            'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
          }
        />
        <span className='text-ascent-1'>
          {user.firstName} {user.lastName}
        </span>
      </div>
    </div>
  );
};

export default TopBar;
