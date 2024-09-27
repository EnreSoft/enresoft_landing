import React from "react";
import Layout from "../components/layout/Layout";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
            style={{ zIndex: "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div class="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                    <div class="flex flex-wrap">
                      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                class="h-6 w-6 text-blue-500"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="ml-6 grow">
                            <p class="mb-2 font-bold text-blue-500">Phone</p>
                            <p class="text-neutral-500 ">Sedat Dilmac</p>
                            <p class="text-neutral-500 ">+1 234-567-89</p>
                          </div>
                        </div>
                      </div>
                      <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                        <div class="flex items-start">
                          <div class="shrink-0">
                            <div class="inline-block rounded-md bg-teal-400-100 p-4 text-teal-700">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="h-6 w-6 text-blue-500"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                                  fill="#080341"
                                />
                              </svg>
                            </div>
                          </div>
                          <div class="ml-6 grow">
                            <p class="mb-2 font-bold text-blue-500">Email</p>
                            <p class="text-neutral-500 ">
                              contact@enresoft.com
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/team.svg"
                    alt="Monst"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".s"
                >
                  We will <span className="text-blue-500">be glad</span> to hear
                  from you!
                </h2>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <span className="mr-4 font-semibold">Departament:</span>
                    <label className="mr-4">
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="1"
                      />
                      <span>Support</span>
                    </label>
                    <label>
                      <input
                        className="mr-1"
                        type="radio"
                        name="department"
                        value="2"
                      />
                      <span>Sales</span>
                    </label>
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div
                    className="mb-4 wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <label className="flex px-2 bg-blueGray-50 rounded">
                      <input
                        className="hidden"
                        type="file"
                        name="Choose file"
                      />
                      <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer">
                        {" "}
                        Browse
                      </span>
                    </label>
                  </div>
                  <div
                    className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
