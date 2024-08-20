import React, { useState } from 'react';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/login.png';

function Employeer() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const jobseekers = JSON.parse(localStorage.getItem('EmployeerList')) || [];
    const user = jobseekers.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate(`/employer-dashboard?email=${encodeURIComponent(user.email)}`);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const jobseekers = JSON.parse(localStorage.getItem('EmployeerList')) || [];
    const userExists = jobseekers.some(user => user.email === email);

    if (userExists) {
      alert('User already exists');
      return;
    }

    const newUser = { email, password };
    jobseekers.push(newUser);
    localStorage.setItem('EmployeerList', JSON.stringify(jobseekers));
    alert('Registration successful. Please log in.');
    setIsRegistering(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row h-screen p-6 lg:p-0">
        {/* Welcome Section */}
        <div className="flex-1 bg-slate-400 text-white p-8 lg:p-12 flex flex-col justify-center items-center rounded-lg">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center">Welcome to the Job Portal</h1>
          <p className="text-lg lg:text-xl mb-6 text-center">Find your dream job and advance your career with ease.</p>
          <img src={login} alt="Welcome" className="w-2/3 lg:w-1/2 max-w-xs lg:max-w-md" />
        </div>

        {/* Form Section */}
        <div className="flex-1 bg-gray-100 p-8 lg:p-12 flex flex-col justify-center items-center rounded-lg mt-6 lg:mt-0">
          <div className="bg-white shadow-md rounded-lg p-6 lg:p-8 w-full max-w-sm lg:max-w-md">
            <h2 className="text-xl lg:text-2xl font-bold mb-6 text-center">
              {isRegistering ? 'Register' : 'Login as Employer'}
            </h2>
            <form onSubmit={isRegistering ? handleRegister : handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-slate-500 text-white py-2 px-4 rounded-md shadow hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
              >
                {isRegistering ? 'Register' : 'Login'}
              </button>
              <p className="mt-4 text-center">
                {isRegistering ? (
                  <>
                    Already have an account? <button onClick={() => setIsRegistering(false)} className="text-slate-500">Login</button>
                  </>
                ) : (
                  <>
                    Don't have an account? <button onClick={() => setIsRegistering(true)} className="text-slate-500">Sign up</button>
                  </>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Employeer;
