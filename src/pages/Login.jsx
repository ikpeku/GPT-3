import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SigninWithGoogle } from "../utils/firebse";
import { LoginInWithEmailAndPassword } from "../utils/firebse";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(true);

  const LoginupSchema = Yup.object().shape({
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const initialValues = {
    email: '',
    password: '',
  }

  const handleSubmit = async(values, other) => {
    // console.log(e);
    // console.log("Others: ", other);
    const {email, password} = values
    const res = await LoginInWithEmailAndPassword(email, password)

    console.log(" response: ",res);
    
    other.resetForm()

  };

  return (
    <div>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl text-white">
              Get started today!
            </h1>

            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>

          <Formik onSubmit={handleSubmit} validationSchema={LoginupSchema} initialValues={initialValues}>
            {
              (formik) => {
                return (
                  <Form>
                  <div  className="mx-auto mt-8 mb-0 max-w-md space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
    
                    <div className="relative">
                      <Field
                        type="email"
                        name="email"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter email"
                      />
                      <ErrorMessage name="email">
                        {
                          (error) => <p className="text-[red]">{error}</p>
                        }
    
                      </ErrorMessage>
    
                      {/* <span className="absolute inset-y-0 right-4 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span> */}
                    </div>
                  </div>
    
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <div className="relative">
                      <Field
                      name="password"
                        type={showPassword ? "password" : "text"}
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Enter password"
                      />
    
                      <span className="absolute inset-y-0 right-4 inline-flex items-center">
                        <svg
                          onClick={() => setShowPassword((prev) => !prev)}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                      <ErrorMessage name="password">
                        {
                          (error) => <p className="text-[red]">{error}</p>
                        }
    
                      </ErrorMessage>
                    </div>
                  </div>
    
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      No account?
                      <Link to="/signup" className="underline">
                        Sign up
                      </Link>
                    </p>
    
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="ml-3 inline-block rounded-lg bg-[#FF4820] px-5 py-3 text-sm font-medium text-white"

                    >
                      Log in
                    </button>
                  </div>
    
                  <hr />
                  <h3 className="text-white text-center capitalize">OR</h3>
                  <button
                    type="button"
                    onClick={SigninWithGoogle}
                    className="w-full text-white bg-[#FF4820] px-3 py-5 rounded-lg"
                  >
                    Log In with Google
                  </button>
                  </div>
                </Form>
                )
              }
            }

          </Formik>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt="Welcome"
            src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};
