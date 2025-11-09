import { Github } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="container mx-auto py-40 min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Form */}
      <div className="flex-1 flex flex-col max-w-3xl justify-center px-8 md:px-20 py-12 bg-base-100">
        <h1 className="text-3xl font-bold mb-2">Create your account</h1>
        <p className="text-gray-500 mb-6">
          Let’s get started with your 30 days free trial
        </p>

        <div className="grid grid-cols-2 gap-4">
          {/* Google Sign-In */}
          <button className="btn w-full mb-4 flex items-center gap-2 justify-center">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Login with Google
          </button>


          {/* Google Sign-In */}
          <button className="btn w-full mb-4 flex items-center gap-2 justify-center">
            <Github></Github>
            Login with Github
          </button>

        </div>

        <div className="divider text-center text-gray-400 text-sm mb-6">OR</div>

        {/* Signup Form */}
        <form className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text font-medium">Name*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Email*</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-medium">Password*</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <input type="checkbox" className="checkbox checkbox-sm" />
            <p className="text-sm text-gray-500">
              I agree to all <a href="#" className="text-primary">Terms</a>,{" "}
              <a href="#" className="text-primary">Privacy Policy</a> and Fees.
            </p>
          </div>

          <button type="submit" className="btn btn-neutral w-full mt-4">
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <Link to='/login' className="text-primary font-medium">Log in</Link>
        </p>
      </div>

      {/* Right Section - Image + Info */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=800&q=80"
            alt="Modern interior"
            className="w-full h-full object-cover rounded-l-[50px] md:rounded-l-[80px]"
          />
        </div>

        <div className="relative z-10 bg-black/40 text-white rounded-3xl p-8 m-6 backdrop-blur-sm max-w-md">
          <h2 className="text-2xl font-bold mb-3">
            Discovering the Best Homes for Your Lifestyle
          </h2>
          <p className="text-sm text-gray-200 mb-6">
            Our mission is to help you find elegant, modern, and affordable homes
            designed for comfort and sophistication.
          </p>

          <div className="flex items-center gap-4">
            <div className="badge badge-outline border-white text-white px-3 py-2">
              🏠 100% Verified Listings
            </div>
            <div className="badge badge-outline border-white text-white px-3 py-2">
              🚚 Free consultation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
