import { useForm} from 'react-hook-form';

const Form = ( ) => {
    const { register, handleSubmit, formState: { errors}} = useForm();

    const submitForm = (data) => {
        console.log(data);
    }
    return (
    <>
        <div className="w-2/3 px-10 py-20 bg-white rounded-xl border-2 border-black">
        
            <h1 className="text-3xl font-semibold text-center">Login Form</h1>
            <p className="font-medium text-lg text-gray-500 mt-4 text-center">Enter Your Details To Login.</p>
            <form onSubmit={handleSubmit(submitForm)} className="mt-16">
                <label className="text-lg font-medium">Email</label>
                <input 
                    type="text"
                    className="w-full border-2 bg-transparent border-gray-400 rounded-xl p-2 mt-1"
                    placeholder='Email Address'
                    {...register('email', {required: true})}
                />
                <label className='text-lg font-medium mt-4'>Password</label>
                <input
                    type="password"
                    className='w-full border-2 bg-transparent border-gray-400 rounded-xl p-2 mt-1'
                    placeholder='Password'
                    {...register('password', {required: true})}
                />
                <div>
                    {errors.email && <span className='p4 bg-red-200 text-lg font-bold'>Email is required</span>}
                    {errors.password && <span className='p4 bg-red-200 text-lg font-bold'>Password is required</span>}
                </div>
                <div className='mt-2 flex justify-between items-center text-xl'>
                    <div>
                        <input type="checkbox" id='showpass' />
                        <label htmlFor="showpass" className='ml-2 '>Show Password</label>
                    </div>
                    <button type="submit" className="bg-transparent text-blue-400 font-bold py-2 px-4 rounded-xl text-xl">Forgot Password</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-3'>
                    <button type="submit" className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full rounded-xl p-3 mt-4 border-2 bg-indigo-500 border-gray-400 font-bold text-lg text-white'>Sign in</button>
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all w-full rounded-xl p-3 mt-4 border-2 bg-green-400 border-gray-400 font-bold text-lg text-white">Sign In With Google</button>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <p className='font-bold'>Don&apos;t have An Account?</p>
                    <button className='text-violet-500 font-base ml-2'>Sign Up</button>
                </div>
            </form>
        </div>
    </>);
}

export default Form;