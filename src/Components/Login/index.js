const Login = () => {

    const showPassword = (e) => {
        const passwordField = document.getElementById('password');

        e.target.checked ? passwordField.type = "text" : passwordField.type = "password";
    }

    const submitForm = (e) => {
        e.preventDefault();
    }

    return (
        <div className="h-screen flex justify-center items-center"> 
            <form onSubmit={submitForm} className="p-16 rounded-3xl shadow-md flex flex-col justify-center items-center">
                <h1 className="font-[Roboto] mb-10 font-bold text-4xl">Login</h1>

                <label htmlFor="userName" className="font-[Roboto] text-sm uppercase self-start mb-1">Username</label>  
                <input required type="text" id="userName" placeholder="Username" className="border-slate-700 border-[1px] rounded-[4px] p-1 mb-5"/>

                <label htmlFor="password" className="font-[Roboto] text-sm uppercase self-start mb-1">Password</label>
                <input required type="password" id="password" placeholder="Password" className="border-slate-700 border-[1px] rounded-[4px] p-1"/>

                <div className="self-start flex items-center mt-2">
                    <input type="checkbox" id="showPassword" onChange={showPassword} />
                    <label htmlFor="showPassword" className="pl-2">Show Password</label>
                </div>

                <button type="submit" className="mt-4 flex justify-center items-center bg-blue-500 text-white rounded-lg w-full max-w-[150px] font-[Roboto] p-0.5">Login</button>
            </form>
        </div>
    )
}

export default Login