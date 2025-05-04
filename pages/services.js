import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";
import Image from "next/image";

const Services = () => {
  const [inViewport, setInViewport] = useState(false);

  const handleScroll = () => {
    const elements = document.getElementsByClassName("counterUp");
    if (elements.length > 0) {
      const element = elements[0];
      const rect = element.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport && !inViewport) {
        setInViewport(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Services
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Home
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Our Services
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center text-gray-400">
                <span>Web Development</span>
              </li>
            </ul>
          </div>
        </section>
        <section className="pt-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/placeholders/img-6.jpg"
                  alt="Monst"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                <div className="max-w-md-2">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                      data-wow-delay=".9s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      We Provide Excellent <br />
                      <span className="text-blue-500">Custom Software </span>
                      services
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    Creating tailored software solutions to meet specific client
                    needs, including integration with existing systems and
                    development of custom modules.
                  </p>

                  <div className="flex flex-wrap">
                    <div
                      className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Web design UX/UI
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          We create beautiful, user-friendly websites with a
                          focus on intuitive design and seamless experiences.
                          Our solutions ensure your site is both visually
                          appealing & highly functional across all devices.
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Software Consulting and Strategy
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          We provide expert guidance on software projects, from
                          technology selection to strategic planning, ensuring
                          effective solutions that align with your business
                          goals.
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Software Maintenance & Support
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          We offer comprehensive maintenance and support to keep
                          your software running smoothly, including bug fixes,
                          performance enhancements, and ongoing technical
                          assistance.
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Software Testing and Quality Assurance
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          We rigorously test and validate our software to ensure
                          it meets the highest standards of quality. Our process
                          includes comprehensive testing and quality assurance
                          to identify and resolve issues, delivering reliable
                          and efficient solutions for your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-4">
            <Image
                
                  src="https://images.unsplash.com/photo-1728044849291-69f90d443aea?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 
                  alt="Team"
                  width={400}
                  height={150}
                  className="rounded-md shadow-md"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
            {/* <img
              src="/assets/imgs/placeholders/img-20.jpg"
              alt="Photo"
              className="rounded-md shadow-md max-w-full h-auto"
              style={{ maxWidth: "83%", height: "auto" }}
            />
            <img
              src="/assets/imgs/placeholders/img-20.jpg"
              alt="Photo"
              className="rounded-md shadow-md max-w-full h-auto"
              style={{ maxWidth: "83%", height: "auto" }}
            /> */}
          </div>
          {/* <div
            className="w-full lg:w-1/2 flex justify-center"
            // style={{ marginBottom: "20px" }}
          >
            <img
              src="/assets/imgs/placeholders/img-20.jpg"
              alt="Photo"
              className="rounded-md shadow-md max-w-full h-auto"
              // width={600}
              // height={400}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div> */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
{/*  */}
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  At Enresoft, we deliver innovative software solutions to meet today’s business challenges. Our services range from custom software development to digital consulting, supporting projects that streamline operations and drive growth.
</p>
<br />

<h3 className="text-xl font-bold font-heading mb-2">Custom Software Development</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  We build robust, scalable software solutions that simplify operations and fuel growth. Our services include:
</p>
<ul className="list-inside text-blueGray-400 leading-relaxed mt-4 custom-list">
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>End-to-End Project Management:</strong> From concept to support.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>System Integration:</strong> Enhance performance by connecting your systems.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>User-Friendly Design:</strong> Intuitive interfaces for better engagement.</li>
</ul>
<br />
<h3 className="text-xl font-bold font-heading mb-2">Digital Consulting & Technology Integration</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  Our consulting services help you leverage modern technology for smart, data-driven decisions:
</p>
<ul className="list-inside text-blueGray-400 leading-relaxed mt-4 custom-list">
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Optimize Operations:</strong> Boost efficiency and reduce costs.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Enhance Decision-Making:</strong> Use data insights for growth strategies.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Future-Proof Your Business:</strong> Implement adaptable solutions.</li>
</ul>
<br />
<h3 className="text-xl font-bold font-heading mb-2">Specialized Project Solutions</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  We offer industry-specific solutions, such as:
</p>
<br />
<h3 className="text-xl font-bold font-heading mb-2">Enretag – Warehouse Solution</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  A platform for e-commerce sellers, Enretag streamlines warehouse operations with:
</p>
<ul className="list-inside text-blueGray-400 leading-relaxed mt-4 custom-list">
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Inventory Management:</strong> Real-time tracking and asset valuation.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Automated Invoicing:</strong> Automatic invoice generation to save time.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Palletization Guidance:</strong> Expert advice on storage optimization.</li>
</ul>
<br />
<h3 className="text-xl font-bold font-heading mb-2">Enreship – Shipping Integration</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  Tailored for e-commerce sellers, Enreship simplifies shipping with:
</p>
<ul className="list-inside text-blueGray-400 leading-relaxed mt-4 custom-list">
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Sales and Stock Monitoring:</strong> Stay updated on product sales and inventory.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Automated Shipping Labels:</strong> Time-saving auto label generation.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Carrier Integration & Tracking:</strong> Real-time shipment tracking with customers notified.</li>
</ul>
<br />
<h3 className="text-xl font-bold font-heading mb-2">Weddy – The Wedding Event App</h3>
<br />
<p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  Weddy offers an interactive wedding experience with:
</p>
<ul className="list-inside text-blueGray-400 leading-relaxed mt-4 custom-list">
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Event Creation & RSVP:</strong> Easy event creation and guest confirmations.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Real-Time Communication:</strong> In-app messaging and live streaming.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Gifting Options:</strong> Facilitating monetary contributions and gift selection.</li>
  <li><strong style={{ color: 'rgb(96, 165, 250)' }}>Media Sharing:</strong> Share photos and videos in real-time with guests.</li>
</ul>
<br />


            
            
            
          </div>
        </div>
        {/*  */}

        <section className="pb-4">
          <div className="container">
            <div className="flex flex-wrap justify-between pt-8 pb-16 px-3">
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".4s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    {inViewport && <CounterUp end={10} duration={5} />}
                  </span>
                  <span className="sm:text-2xl font-bold font-heading"> </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Completed Projects
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".6s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">% </span>
                  <span className="sm:text-2xl font-bold font-heading count">
                    {inViewport && <CounterUp end={100} duration={10} />}
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Happy Customers
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn"
                data-wow-delay=".8s"
              >
                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <div className="sm:py-2 ml-2 sm:ml-6">
                  <span className="sm:text-2xl font-bold font-heading">+ </span>
                  <span className="sm:text-2xl font-bold font-heading count counterUp">
                    {inViewport && <CounterUp end={7} duration={10} />}
                  </span>
                  <p className="text-xs sm:text-base text-blueGray-400">
                    Research Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                  data-wow-delay=".9s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".3s"
                >
                  We will <span className="text-blue-500">be glad</span> to hear
                  from you!
                </h2>
              </div>
              <div>
                <form>
                  <div
                    className="mb-4 text-sm wow animate__animated animate__fadeIn"
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
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <input
                      className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                      type="email"
                      placeholder="name@example.com"
                    />
                  </div>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <textarea
                      className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                      placeholder="Message..."
                    ></textarea>
                  </div>
                  <div
                    className="mb-4 wow animate__animated animate__fadeIn"
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
                    className="flex justify-between items-center wow animate__animated animate__fadeIn"
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

export default Services;
