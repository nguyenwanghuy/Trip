// import React, { useContext, useState } from 'react';
// import { useFormik } from 'formik';
// import { BsEye, BsEyeSlash } from 'react-icons/bs';
// import { registerSchema } from '../assets/schemas/registerSchema';
// import { Navigate, useNavigate } from 'react-router-dom';
// import AuthContext from '../context/authContext';
// import authAPI from '../api/authAPI';

// const Register = () => {
//   const [show, setShow] = useState(false);
//   const [confirmShow, setConfirmShow] = useState(false);

//   const handleShow = () => setShow(!show);
//   const handleConfirmShow = () => setConfirmShow(!confirmShow);

//   const { auth, handleLogin } = useContext(AuthContext);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       fullname: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     },
//     onSubmit: async (values) => {
//       try {
//         setLoading(true);
//         setError(null);
//         await authAPI.register(values);
//         navigate('/login');
//       } catch (error) {
//         setError(error.response.data.message);
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   const {
//     handleSubmit,
//     handleChange,
//     isValid,
//     values,
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
//         <div className='md:block hidden w-1/2'>
//           <img
//             className='rounded-2xl'
//             src='https://e0.pxfuel.com/wallpapers/806/121/desktop-wallpaper-travel-with-air-balloons-iphone-7-lock-screen-iphone-7.jpg'
//           />
//         </div>

//         {/* Right */}

//         <div className='md:w-1/2 px-8 md:px-16 '>
//           <h2 className='font-bold text-2xl text-[#002D74]'>Register</h2>
//           <p className='text-xs mt-4 text-[#002D74]'>
//             Create your account. It’s free and only take a minute
//           </p>
//           <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//             <input
//               className={
//                 errors.fullname && touched.fullname
//                   ? 'p-2 mt-8 rounded-md border border-red-600'
//                   : 'p-2 mt-8 rounded-md border'
//               }
//               type='text'
//               name='fullname'
//               placeholder='Fullname'
//               id='fullname'
//               onChange={handleChange}
//               value={values.fullname}
//               onBlur={handleBlur}
//             />
//             {errors.fullname && touched.fullname && (
//               <p className='text-red-600 text-xs mt-[-12px]'>
//                 {errors.fullname}
//               </p>
//             )}
//             <input
//               className={
//                 errors.email && touched.email
//                   ? 'p-2  rounded-md border border-red-600'
//                   : 'p-2  rounded-md border'
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
//             <div className='relative'>
//               <input
//                 className={
//                   errors.confirmPassword && touched.confirmPassword
//                     ? 'p-2 rounded-md border w-full  border-red-600'
//                     : 'p-2 rounded-md border w-full '
//                 }
//                 type={show ? 'text' : 'password'}
//                 name='confirmPassword'
//                 placeholder='Confirm password'
//                 id='confirmPassword'
//                 onChange={handleChange}
//                 value={values.confirmPassword}
//                 onBlur={handleBlur}
//               />
//               <button
//                 onClick={handleConfirmShow}
//                 className=' absolute top-1/2 right-3 -translate-y-1/2'
//               >
//                 {confirmShow ? <BsEyeSlash /> : <BsEye />}
//               </button>
//             </div>
//             {errors.confirmPassword && touched.confirmPassword && (
//               <p className='text-red-600 text-xs mt-[-12px]'>
//                 {errors.confirmPassword}
//               </p>
//             )}
//             <button
//               className='bg-[#002D74] rounded-md text-white py-2 hover:scale-105 duration-300'
//               type='submit'
//             >
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import AuthContext from '../context/authContext';
import authAPI from '../api/authAPI';
import TextInput from '../components/TextInput';
import Loading from '../components/Loading';

const Register = () => {
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleShow = () => setShow(!show);
  const handleConfirmShow = () => setConfirmShow(!confirmShow);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    // setIsSubmitting(true);
    // try {
    //   const res = await apiRequest({
    //     url: '/auth/login',
    //     data: data,
    //     method: 'POST',
    //   });
    //   if (res?.status === 'failed') {
    //     setErrMsg(res);
    //   } else {
    //     setErrMsg('');
    //     const newData = { token: res?.token, ...res.user };
    //     dispatch(UserLogin(newData));
    //     window.location.replace('/');
    //   }
    //   setIsSubmitting(false);
    // } catch (error) {
    //   console.log(error);
    //   setIsSubmitting(false);
    // }
  };

  return (
    <div className='bg-bgColor w-full h-[100vh] flex items-center justify-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-6/7 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* Left */}

        <div className='w-full lg:w-1/2 p-1 md:px-16 px-20  flex flex-col gap-2 justify-center '>
          <h2 className='font-bold text-2xl text-[#002D74]'>Register</h2>
          <p className='text-ascent-1 text-base font-semibold'>
            Create your account. It’s free and only take a minute
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              name='fullname'
              placeholder='Fullname'
              label='Fullname'
              type='text'
              register={register('fullname', {
                required: 'Fullname is required!',
              })}
              styles='rounded-md border w-full'
              labelStyle='ml-2'
              error={errors.fullname ? errors.fullname.message : ''}
            />
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

            <div className='w-full flex flex-col lg:flex-row gap-1 md:gap-2'>
              <div className='relative lg:w-[11.3rem] xl:w-[15.3rem]'>
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
                  className=' absolute top-[3.6rem] right-3 -translate-y-1/2 text-ascent-2'
                >
                  {show ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                </button>
              </div>

              <div className='relative lg:w-[11.3rem] xl:w-[15.3rem]'>
                <TextInput
                  name='confirm password'
                  placeholder='Confirm Password'
                  label='Confirm Password'
                  type={confirmShow ? 'text' : 'password'}
                  register={register('confirmPassword', {
                    validate: (value) => {
                      const { password } = getValues();
                      if (password != value) {
                        return 'Password does not match';
                      }
                    },
                    required: 'Password is required!',
                  })}
                  styles='rounded-md border w-full'
                  labelStyle='ml-2 '
                  error={
                    (errors.confirmPassword &&
                    errors.confirmPassword.type === 'validate'
                      ? errors.confirmPassword.message
                      : '') ||
                    (errors.confirmPassword
                      ? errors.confirmPassword.message
                      : '')
                  }
                />

                <button
                  onClick={handleConfirmShow}
                  className=' absolute top-[3.6rem] right-3 -translate-y-1/2 text-ascent-2'
                >
                  {confirmShow ? <BsEyeSlash size={20} /> : <BsEye size={20} />}
                </button>
              </div>
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
                Register
              </button>
            )}

            <div
              className='mt-5 text-xs flex justify-between items-center text-[#002D74] border-t border-ascent-2 
            pt-3'
            >
              <p className='text-ascent-2'>Already have an account?</p>
              <Link to='/login'>
                <button className='py-2 px-5 bg-white border rounded-md hover:scale-110 duration-300'>
                  Login
                </button>
              </Link>
            </div>
          </form>
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

export default Register;
