// import React, { useContext, useState } from 'react';
// import { useFormik } from 'formik';
// import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { loginSchema } from '../assets/schemas/loginSchema';
// import { Link, Navigate, useNavigate } from 'react-router-dom';
// import AuthContext from '../context/authContext';
// import authAPI from '../api/authAPI';

// const Login = () => {
//   const [show, setShow] = useState(false);

//   const handleShow = () => setShow(!show);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();
//   const { auth, handleLogin } = useContext(AuthContext);

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         setError(null);
//         const response = await authAPI.login(values);
//         const { accessToken } = response.data;
//         localStorage.setItem('accessToken', accessToken);
//         await handleLogin();
//         navigate('/');
//       } catch (error) {
//         console.log(error);
//         setError(error.response.data.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//     validationSchema: loginSchema,
//   });

//   const {
//     handleSubmit,
//     handleChange,
//     values,
//     isValid,
//     errors,
//     handleBlur,
//     touched,
//   } = formik;
//   if (auth.isAuthenticated) {
//     return <Navigate to='/' />;
//   }

//   return (
//     <div className='flex items-center justify-center min-h-screen bg-gray-100'>
//       <div className='bg-white flex rounded-2xl shadow-2xl max-w-3xl p-5 items-center'>
//         {/* Left */}

//         <div className='md:w-1/2 px-8 md:px-16'>
//           <h2 className='font-bold text-2xl text-[#002D74]'>Login</h2>
//           <p className='text-xs mt-4 text-[#002D74]'>
//             If you are already a member, easily log in
//           </p>
//           <form
//             onSubmit={handleSubmit}
//             autoComplete='off'
//             className='flex flex-col gap-4'
//           >
//             <input
//               className={
//                 errors.email && touched.email
//                   ? 'p-2 mt-8 rounded-md border border-red-600'
//                   : 'p-2 mt-8 rounded-md border'
//               }
//               type='email'
//               name='email'
//               placeholder='Email'
//               id='email'
//               onChange={handleChange}
//               value={values.email}
//               onBlur={handleBlur}
//             />
//             {errors.email && touched.email && (
//               <p className='text-red-600 text-xs mt-[-12px]'>{errors.email}</p>
//             )}
//             <div className='relative'>
//               <input
//                 className={
//                   errors.password && touched.password
//                     ? 'p-2 rounded-md border w-full  border-red-600'
//                     : 'p-2 rounded-md border w-full '
//                 }
//                 type={show ? 'text' : 'password'}
//                 name='password'
//                 placeholder='Password'
//                 id='password'
//                 onChange={handleChange}
//                 value={values.password}
//                 onBlur={handleBlur}
//               />
//               <button
//                 onClick={handleShow}
//                 className=' absolute top-1/2 right-3 -translate-y-1/2'
//               >
//                 {show ? <BsEyeSlash /> : <BsEye />}
//               </button>
//             </div>
//             {errors.password && touched.password && (
//               <p className='text-red-600 text-xs mt-[-12px]'>
//                 {errors.password}
//               </p>
//             )}
//             <button
//               className='bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300'
//               type='submit'
//             >
//               Login
//             </button>
//           </form>
//           <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
//             <hr className='border-gray-400' />
//             <p className='text-center text-sm'>OR</p>
//             <hr className='border-gray-400' />
//           </div>
//           <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]'>
//             <svg
//               className='mr-3'
//               xmlns='http://www.w3.org/2000/svg'
//               viewBox='0 0 48 48'
//               width='25px'
//             >
//               <path
//                 fill='#FFC107'
//                 d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
//               />
//               <path
//                 fill='#FF3D00'
//                 d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
//               />
//               <path
//                 fill='#4CAF50'
//                 d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
//               />
//               <path
//                 fill='#1976D2'
//                 d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
//               />
//             </svg>
//             Login with Google
//           </button>
//           <div className='mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]'>
//             {/* <a href='#'>Forgot your password?</a> */}
//           </div>
//           <div className='mt-3 text-xs flex justify-between items-center text-[#002D74]'>
//             <p>Don't have an account?</p>
//             <Link to='/register'>
//               <button className='py-2 px-5 bg-white border rounded-md hover:scale-110 duration-300'>
//                 Register
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Right */}

//         <div className='md:block hidden w-1/2'>
//           <img
//             className='rounded-2xl'
//             src='https://e0.pxfuel.com/wallpapers/806/121/desktop-wallpaper-travel-with-air-balloons-iphone-7-lock-screen-iphone-7.jpg'
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import TextInput from '../components/TextInput';
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { apiRequest } from '../utils';
import { UserLogin } from '../redux/userSlice';

const Login = () => {
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleShow = () => setShow(!show);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await apiRequest({
        url: '/auth/login',
        data: data,
        method: 'POST',
      });
      if (res?.status === 'failed') {
        setErrMsg(res);
      } else {
        setErrMsg('');
        const newData = { token: res?.token, ...res.user };
        dispatch(UserLogin(newData));
        window.location.replace('/');
      }
      setIsSubmitting(false);
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-6/7 py-8 lg:py-0 flex bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* Left */}

        <div className='w-full lg:w-1/2 p-1 md:px-16 px-20  flex flex-col gap-2 justify-center '>
          <h2 className='font-bold text-2xl text-[#002D74]'>Login</h2>
          <p className='text-ascent-1 text-base font-semibold'>
            If you are already a member, easily log in
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name='email'
              placeholder='Email'
              label='Email Address'
              type='email'
              register={register('email', {
                required: 'Email Address is required!',
              })}
              styles='rounded-md border w-full'
              labelStyle='ml-2'
              error={errors.email ? errors.email.message : ''}
            />

            <div className='relative'>
              <TextInput
                name='password'
                placeholder='Password'
                label='Password'
                type={show ? 'text' : 'password'}
                register={register('password', {
                  required: 'Password is required!',
                })}
                styles='rounded-md border w-full'
                labelStyle='ml-2'
                error={errors.password ? errors.password.message : ''}
              />

              <button
                onClick={handleShow}
                className=' absolute top-[3.2rem] right-3 -translate-y-1/2 text-ascent-2'
              >
                {show ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
              </button>
            </div>

            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg?.status == 'failed'
                    ? 'text-[#f64949fe]'
                    : 'text-[#2ba150fe]'
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <button
                className='bg-[#002D74] w-full rounded-md text-white py-2 mt-5  hover:scale-105 duration-300'
                type='submit'
              >
                Login
              </button>
            )}
          </form>
          <div className='mt-6 grid grid-cols-3 items-center text-gray-400'>
            <hr className='border-ascent-2' />
            <p className='text-center text-sm text-ascent-2'>OR</p>
            <hr className='border-ascent-2' />
          </div>
          <button className='bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]'>
            <svg
              className='mr-3'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 48 48'
              width='25px'
            >
              <path
                fill='#FFC107'
                d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
              />
              <path
                fill='#FF3D00'
                d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
              />
              <path
                fill='#4CAF50'
                d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
              />
              <path
                fill='#1976D2'
                d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
              />
            </svg>
            Login with Google
          </button>
          <Link
            to='/reset-password'
            className='text-xs border-b border-ascent-2 py-4 '
          >
            <span className='text-ascent-2'>Forgot your password?</span>
          </Link>
          <div className='mt-3 text-xs flex justify-between items-center '>
            <p className='text-ascent-2'>Don't have an account?</p>
            <Link to='/register'>
              <button className='py-2 px-5 bg-white border rounded-md hover:scale-110 duration-300'>
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* Right */}

        <div className='md:block hidden w-1/2 h-full'>
          <img
            className='rounded-xl object-cover h-full w-full'
            src='https://e0.pxfuel.com/wallpapers/806/121/desktop-wallpaper-travel-with-air-balloons-iphone-7-lock-screen-iphone-7.jpg'
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
