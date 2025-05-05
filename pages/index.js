import { useEffect, useState } from 'react'
import CounterUp from "../components/elements/Counterup"
import TextEffect from "../components/elements/TextEffect"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import Image from "next/image";

function Home() {
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
                <section className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    Your Vision <br />
                                    Our Codes <span className="text-blue-500">Enresoft</span>
                                </h2>
                                <div className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn d-inline">
                                    We are <strong className="text-blue-500">Enresoft</strong>, a Custom {" "}
                                    <div className="typewrite d-inline text-brand">
                                        <TextEffect text1="Tailored solutions." text2="Software Development company." />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <a className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2" href="#key-features">
                                    Key Features
                                </a>
                                <a className="btn-white wow animate__animated animate__fadeIn hover-up-2" data-wow-delay=".3s" href="#how-we-work">
                                    How We Work?
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                        <img src="/assets/imgs/elements/pattern.png" alt="Monst" />
                        <div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
                            <img className="jump rounded wow animate__animated animate__fadeIn" src="/assets/imgs/placeholders/dashboard.png" alt="Monst" />
                        </div>
                    </div>
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap justify-between pt-8 pb-16">
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count counterUp">
                                    {inViewport && <CounterUp end={950} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Annual Partner</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count counterUp">
                                    {inViewport && <CounterUp end={58} duration={10} />}
                                    </span>
                                    <span className="sm:text-2xl font-bold font-heading"> k </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Completed Projects</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count counterUp">
                                    {inViewport && <CounterUp end={500} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Happy Customers</p>
                                </div>
                            </div>
                            <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".8s">
                                <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="sm:py-2 ml-2 sm:ml-6">
                                    <span className="sm:text-2xl font-bold font-heading">+ </span>
                                    <span className="sm:text-2xl font-bold font-heading count counterUp">
                                    {inViewport && <CounterUp end={300} duration={10} />}
                                    </span>
                                    <p className="text-xs sm:text-base text-blueGray-400">Research Work</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden" id="key-features">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose us
                                        </span>
                                        <h2 className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            Key Features
                                        </h2>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Tailored Solutions</h3>
                                            <p className="text-blueGray-400 leading-loose">Custom software solutions designed to meet specific business needs and objectives.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Innovative Design</h3>
                                            <p className="text-blueGray-400 leading-loose">Creative design services that enhance user experience and interface.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        <div className="w-8 mr-5 text-blue-500">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="mb-2 text-xl font-semibold font-heading">Expert Development</h3>
                                            <p className="text-blueGray-400 leading-loose">Professional software development with a focus on cutting-edge technologies and best practices.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <img className="jump relative mx-auto rounded-xl w-2/3 z-10" src="/assets/imgs/customs/key-features.jpg" alt="Enresoft" />
                                    <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="/assets/imgs/elements/blob-tear.svg" alt="Monst" />
                                    <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="/assets/imgs/elements/blob-tear.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
{/*  */}
<section className="py-20 bg-blueGray-50" id="projects">
          <div className="container px-4 mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-6 font-bold font-heading wow animate__animated animate__fadeIn">
                Our <span className="text-blue-500">Vision</span>
              </h2>
            </div>
          </div>
        </section>
        {/* Vision */}
        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              {/* Photo (<img> ) */}
              <div
                className="w-full lg:w-1/2 flex justify-center"
                // style={{ marginBottom: "20px" }}
              >
               <Image
                       src="https://images.unsplash.com/photo-1462556791646-c201b8241a94?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       alt="Img"
                       style={{ maxWidth: "75%", height: "auto" }}
                       width={600}
                       height={400}
                     />
                {/* <img
                  src="/assets/imgs/placeholders/vision.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "75%", height: "auto" }}
                /> */}
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h3
                  className="text-xl font-bold font-heading mb-2"
                //   style={{ color: 'rgb(96, 165, 250)' }}
                  // style={blueColor}
                >
                  Our Vision
                </h3>
                <br/>
                <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  We want to change the way businesses work by using technology
                  that makes tasks simpler and more efficient. Our vision is to
                  be a trusted leader in software and technology, delivering
                  solutions for a wide range of industries such as logistics,
                  healthcare, finance, retail, education, manufacturing, and
                  entertainment.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Mission */}
        <section className="py-20 bg-blueGray-50" id="projects">
          <div className="container px-4 mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-6 font-bold font-heading wow animate__animated animate__fadeIn">
                Our <span className="text-blue-500">Mission</span>
              </h2>
            </div>
          </div>
        </section>
        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              {/*  */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h3
                  className="text-xl font-bold font-heading mb-2"
                  // style={blueColor}
                >
                  Our Mission
                </h3>
                <br/>
                <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                    Our mission is to help businesses and startups succeed by providing reliable, easy-to-use software and digital solutions. We are dedicated to: Simple Innovation through modern technologies, Teamwork and Partnership with clients and our team, Quality Work focused on real results, and Exploring New Ideas to drive progress across industries.
                  {/* Our mission is to help businesses and startups succeed by
                  providing reliable, easy-to-use software and digital
                  solutions. We are dedicated to:
                  <br />
                  <strong>Simple Innovation:</strong> Building practical
                  software and tools using modern technology like data science
                  and machine learning.
                  <br />
                  <strong>Teamwork and Partnership:</strong> Working closely
                  with our clients and our team of over 20 professionals to
                  create solutions that truly meet their needs.
                  <br />
                  <strong>Quality Work:</strong> Ensuring that every project is
                  crafted with care, accuracy, and a focus on real results.
                  <br />
                  <strong>Exploring New Ideas:</strong> Constantly seeking new
                  opportunities and supporting innovative projects that drive
                  progress in many industries.
                  <br />
                  <br />
                  At Enresoft, we believe in turning ideas into solutions that
                  help businesses grow and succeed. */}
                </p>
              </div>
              <div
                className="w-full lg:w-1/2 flex justify-center"
                // style={{ marginBottom: "20px" }}
              >
                {/* <img
                  src="/assets/imgs/placeholders/img-17.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "100%", height: "auto" }}
                /> */}
                <Image
                       src="https://media.istockphoto.com/id/2165600019/pl/zdj%C4%99cie/%C5%BC%C3%B3%C5%82ta-kula-w-niebieskim-labiryncie.jpg?s=1024x1024&w=is&k=20&c=IasuWXii10ySX9-611Q6AQsUT8kVK3secA7yq7OkzRk="
                       alt="Img"
                       style={{ maxWidth: "100%", height: "auto" }}
                       width={600}
                       height={400}
                     />
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/*  */}
        <section className="py-20 bg-blueGray-50" id="projects">
          <div className="container px-4 mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-6 font-bold font-heading wow animate__animated animate__fadeIn">
                Our <span className="text-blue-500">Projects</span>
              </h2>
            </div>
          </div>
        </section>

        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row  lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              {/* Photo (<img> ) */}
              <div
                className="w-full lg:w-1/2 flex justify-center"
                // style={{ marginBottom: "20px" }}
              >
                {/* <div>
                  <img
                    src="/assets/imgs/placeholders/img-16.jpg"
                    alt="Photo"
                    className="rounded-md shadow-md max-w-full h-auto"
                    // width={600}
                    // height={400}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div> */}

                {/* <img
                  src="/assets/imgs/placeholders/warehouse.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "75%", height: "auto" }}
                /> */}

                <Image
                       src="https://media.istockphoto.com/id/515783472/pl/zdj%C4%99cie/w%C3%B3zek-wid%C5%82owy-i-magazyn.jpg?s=1024x1024&w=is&k=20&c=QoTpJlrORVSm_gw1kpR6s3mt4OqkxbE3TxbA7ERDek0="
                       alt="Img"
                       style={{ maxWidth: "100%", height: "auto" }}
                       width={600}
                       height={400}
                     />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h3
                 className="text-xl font-bold font-heading mb-2"
  //style={{ color: 'rgb(96, 165, 250)' }}
                
                  // style={blueColor}
                >
                  Enretag – The Comprehensive Warehouse Management Solution
                </h3>
                <br/>
                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  <p className="text-blueGray-400 leading-relaxed">
    Enretag is a powerful all-in-one warehouse management system built for
    e-commerce sellers. It simplifies operations, reduces costs, and helps
    you scale efficiently with smart features and automation.
  </p>
  <br />
  <h4 className="text-lg font-semibold font-heading mb-2"  
  style={{ color: 'rgb(96, 165, 250)' }}>
    Key Features:
    
  </h4>
<br/>
  {/* Custom styles for blue triangle bullets */}
  <style jsx>{`
    .custom-list li {
      position: relative;
      padding-left: 1.5rem;
    }
    .custom-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid #3B82F6; /* Tailwind blue-500 */
    }
  `}</style>

  <ul className="custom-list space-y-2 text-blueGray-400 leading-relaxed">
    <li>Real-Time Inventory Management</li>
    <li>Advanced Asset Tracking & Valuation</li>
    <li>Automated Invoicing</li>
    <li>Expert Palletization Support</li>
    <li>Smart Dashboard & Reporting</li>
  </ul>
  <br/>

  <p className="text-blueGray-400 leading-relaxed mt-4">
    With Enretag, boost your warehouse efficiency, minimize errors, and
    focus on growing your business.
  </p>
</div>

                {/* <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  Enretag is our all-in-one warehouse management system designed
                  specifically for e-commerce sellers. By streamlining every
                  facet of warehouse operations, Enretag empowers businesses to
                  optimize their inventory management, asset tracking, and
                  overall operational efficiency. With a suite of powerful
                  features, this solution addresses the complex challenges of
                  modern warehousing and logistics.
                </p>
                <br />
                <h4 className="text-lg font-semibold font-heading mb-2">
                  Key Features & Benefits:
                </h4>
                <ul className="list-none space-y-2 text-blueGray-400 leading-relaxed">
                  <li>Real-Time Inventory Management</li>
                  <li>Detailed Asset Tracking & Valuation</li>
                  <li>Automated Invoicing Process</li>
                  <li>Expert Palletization Guidance</li>
                  <li>Intuitive Dashboard & Advanced Reporting</li>
                </ul>
                <p className="text-blueGray-400 leading-relaxed mt-4">
                  Enretag is engineered to streamline your supply chain, reduce
                  operational costs, and boost productivity. By integrating this
                  solution into your business, you can focus on scaling your
                  operations while maintaining a high standard of accuracy and
                  efficiency in your warehousing processes.
                </p> */}
              </div>
            </div>
          </div>
        </section>
        {/* Enreship */}
        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              {/* Tekst (przeniesiony na początek) */}
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h3
                 className="text-xl font-bold font-heading mb-2"
//   style={{ color: 'rgb(96, 165, 250)' }}
                //   className="text-xl font-bold font-heading mb-2"
                  // style={blueColor}
                >
                  Enreship – The Robust Shipping and Order Integration Platform
                </h3>
                <br/>
                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  <p className="text-blueGray-400 leading-relaxed">
    Enreship is a smart shipping integration platform built for e-commerce
    sellers. It connects your storefronts to shipping carriers, making order
    fulfillment fast, reliable, and effortless.
  </p>
  <br />
  <h4 className="text-lg font-semibold font-heading mb-2" style={{ color: 'rgb(96, 165, 250)' }}>
    Key Features:
    
  </h4>
<br/>
  {/* Custom styles for blue triangle bullets */}
  <style jsx>{`
    .custom-list li {
      position: relative;
      padding-left: 1.5rem;
    }
    .custom-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid #3B82F6; /* Tailwind blue-500 */
    }
  `}</style>

  <ul className="custom-list space-y-2 text-blueGray-400 leading-relaxed">
    <li>Real-Time Sales & Inventory Monitoring</li>
    <li>Automated Shipping Label Creation</li>
    <li>Live Carrier Integration & Tracking</li>
    <li>Streamlined Order Fulfillment</li>
  </ul>
  <br/>

  <p className="text-blueGray-400 leading-relaxed mt-4">
    Enreship simplifies your logistics, reduces manual work, and lets you
    focus on scaling your business and delighting customers.
  </p>
</div>

                {/* <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  Enreship is an advanced integration platform crafted for
                  e-commerce sellers who need to simplify and enhance their
                  shipping and order fulfillment processes. Recognizing the
                  intricacies of modern logistics, Enreship bridges the gap
                  between online storefronts and shipping carriers, ensuring
                  that every order is processed and delivered with precision.
                </p>
                <br />
                <h4 className="text-lg font-semibold font-heading mb-2">
                  Key Features & Benefits:
                </h4>
                <ul className="list-none list-inside text-blueGray-400 leading-relaxed">
                  <li>Comprehensive Sales and Stock Monitoring</li>
                  <li>Automated Shipping Label Generation</li>
                  <li>Seamless Carrier Integration & Real-Time Tracking</li>
                  <li>Enhanced Order Fulfillment</li>
                </ul>
                <p className="text-blueGray-400 leading-relaxed mt-4">
                  Enreship is designed to take the complexity out of logistics,
                  enabling you to concentrate on growing your business and
                  nurturing customer relationships. With its robust features and
                  seamless integration capabilities, Enreship transforms your
                  shipping operations into a streamlined, efficient process that
                  scales with your business needs.
                </p> */}
              </div>
              <div
                className="w-full lg:w-1/2 flex justify-center"
                // style={{ marginBottom: "20px" }}
              >
                <Image
                       src="https://plus.unsplash.com/premium_photo-1744376824164-ca90487c574d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       alt="Img"
                       style={{ maxWidth: "100%", height: "auto" }}
                       width={500}
                       height={250}
                     />
                {/* <img
                  src="/assets/imgs/placeholders/img-19.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "100%", height: "auto" }}
                /> */}
              </div>
            </div>
          </div>
        </section>
        {/*  weddy*/}
        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row lg:items-start lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              {/* Photo (<img> ) */}
              <div
                className="w-full lg:w-1/2 flex justify-center lg:flex-grow"
                // style={{ marginBottom: "20px" }}
              >
                {/* <div>
                  <img
                    src="/assets/imgs/placeholders/img-16.jpg"
                    alt="Photo"
                    className="rounded-md shadow-md max-w-full h-auto"
                    // width={600}
                    // height={400}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                </div> */}

                {/* <img
                  src="/assets/imgs/placeholders/img-18.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "100%", height: "auto" }}
                /> */}
                <Image
                       src="https://media.istockphoto.com/id/2122218565/pl/zdj%C4%99cie/sk%C5%82adana-kartka-w-pobli%C5%BCu-jasnoniebieskiej-tiulowej-tkaniny-i-kremowych-kwiat%C3%B3w-na-talerzu.jpg?s=612x612&w=0&k=20&c=5EVPyb9tlrYaBTQ-brxDZ-gPAzUEUIy6x_PB5ton4vo="
                       alt="Img"
                       style={{ maxWidth: "100%", height: "auto" }}
                       width={600}
                       height={400}
                     />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <h3
                 className="text-xl font-bold font-heading mb-2"
//   style={{ color: 'rgb(96, 165, 250)' }}
                //   className="text-xl font-bold font-heading mb-2"
                  // style={blueColor}
                >
                  Weddy – The Ultimate Wedding Event App
                </h3>
                <br/>
                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".2s">
  <p className="text-blueGray-400 leading-relaxed">
    Weddy is a digital wedding platform that blends tradition with
    technology, making it easier to plan, celebrate, and share your special
    day in real time.
  </p>
  <br />
  <h4 className="text-lg font-semibold font-heading mb-2" style={{ color: 'rgb(96, 165, 250)' }}>
    Key Features:
    <br/>
  </h4>
  <br/>

 
  <style jsx>{`
    .custom-list li {
      position: relative;
      padding-left: 1.5rem;
    }
    .custom-list li::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid #3B82F6; /* Tailwind blue-500 */
    }
  `}</style>

  <ul className="custom-list space-y-2 text-blueGray-400 leading-relaxed">
    <li>Easy Event Setup & Instant RSVP Tracking</li>
    <li>Real-Time Messaging & Guest Interaction</li>
    <li>High-Quality Live Streaming for Remote Guests</li>
    <li>Smart Gifting with Registry & Cash Options</li>
    <li>Live Photo & Video Sharing for Lasting Memories</li>
  </ul>
  <br/>

  <p className="text-blueGray-400 leading-relaxed mt-4">
    Weddy enhances every step of the wedding journey — from invitations to
    unforgettable digital memories — making your celebration more connected,
    inclusive, and memorable.
  </p>
</div>

                {/* <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  Weddy is an interactive digital platform that revolutionizes
                  the way weddings are planned, celebrated, and remembered. By
                  merging traditional wedding elements with modern technology,
                  Weddy creates a dynamic space where hosts and guests can
                  connect, communicate, and share the joy of the celebration in
                  real time.
                </p>
                <br />
                <h4 className="text-lg font-semibold font-heading mb-2">
                  Key Features & Benefits:
                </h4>
                <ul className="list-none space-y-2 text-blueGray-400 leading-relaxed">
                  <li>
                    <strong>
                      Effortless Event Creation & RSVP Management:
                    </strong>{" "}
                    Planning a wedding has never been easier. Hosts can quickly
                    create a detailed event profile on Weddy, complete with
                    venue details, date, and time. A unique invitation link is
                    generated and shared with guests, allowing them to confirm
                    their attendance instantly. This streamlined RSVP process
                    helps you keep track of your guest list and plan
                    accordingly.
                  </li>
                  <li>
                    <strong>Real-Time Communication Hub:</strong> Weddy fosters
                    an engaging environment by enabling guests to interact
                    through in-app messaging, comments, and discussion threads.
                    Whether sharing excitement or coordinating details, this
                    real-time communication tool ensures that everyone remains
                    connected and informed throughout the event.
                  </li>
                  <li>
                    <strong>Live Streaming Capabilities:</strong> For friends
                    and family who cannot attend in person, Weddy offers a
                    high-quality live streaming feature. This ensures that all
                    loved ones, regardless of their physical location, can
                    witness the celebration as it unfolds, making your wedding a
                    truly inclusive event.
                  </li>
                  <li>
                    <strong>Flexible Gifting Options:</strong> The app
                    integrates versatile gifting features, including options for
                    monetary contributions and curated gift registries. This
                    allows guests to choose the perfect gift according to the
                    couple’s preferences, simplifying the process of gift
                    selection and ensuring that each contribution is meaningful.
                  </li>
                  <li>
                    <strong>Interactive Media Sharing:</strong> Capture every
                    memorable moment and share it instantly with your guests.
                    Weddy’s media sharing feature allows photos and videos to be
                    uploaded in real time, creating a digital scrapbook that all
                    attendees can view, comment on, and cherish long after the
                    event is over.
                  </li>
                </ul>
                <br />
                <p className="text-blueGray-400 leading-relaxed mt-4">
                  Weddy transforms the traditional wedding experience by
                  combining digital innovation with the timeless charm of
                  personal celebrations. This app not only simplifies event
                  planning and guest management but also enhances the overall
                  experience by fostering real-time connections and creating a
                  lasting digital memory of your special day.
                </p> */}
              </div>
            </div>
          </div>
        </section>
{/*  */}
                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                            <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                                    <span>We are</span>
                                    <span className="text-blue-500"> awesome team</span>
                                    <br />
                                    <span>for your business dream</span>
                                </h2>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">We are a talented and dedicated team committed to turning your business dreams into reality. With our expertise in creative design and custom software development, we partner with you to bring your vision to life and drive your success.</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">1</div>
                                    <img className="h-45 mx-auto my-4 rounded-lg" src="https://plus.unsplash.com/premium_photo-1726704033144-224d8de7edf9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project Initialization</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Project initiation ensures that you lay a strong foundation for a new project in your company our team.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <div className="p-12 bg-white shadow rounded">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">2</div>
                                    <img className="h-45 mx-auto my-4 rounded-lg" src="https://plus.unsplash.com/premium_photo-1726704163434-fd7dca570bd3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBsYW5uaW5nfGVufDB8MHwyfHx8MQ%3D%3D" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project planning</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">A project plan is essential to keep everything related to the project organized, methodical, and on track.</p>
                                </div>
                            </div>
                            <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                                <div className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                                    <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">3</div>
                                    <img className="h-45 mx-auto my-4 rounded-lg" src="https://plus.unsplash.com/premium_photo-1726736739591-0d78cc09844d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b3JnYW5pemF0aW9ufGVufDB8MHwyfHx8MQ%3D%3D" alt="Monst" />
                                    <h3 className="mb-2 font-bold font-heading text-xl">Project organization</h3>
                                    <p className="text-sm text-blueGray-400 leading-relaxed">Moving forward you will be able to keep yourself and your team on track, and address challenges early.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        Simple Solution for <span className="text-blue-500">Complex</span> Connections
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>Start saving time today and</span>
                                <span className="text-blue-500"> choose </span>
                                <span>your best plan</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                                Best for freelance developers who need to save their time
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/startup.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Startup</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">$45.99</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>3 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>1 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>10 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center text-white bg-blue-500 rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/agency.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Agency</h3>
                                    <span className="text-4xl font-bold font-heading">$65.99</span>
                                    <p className="mt-2 mb-8">user per month</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>6 Emails</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>4 Datebases</span>
                                            </li>
                                            <li className="flex items-center mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex items-center">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>35 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-blue-500 font-semibold leading-none bg-white hover:bg-blueGray-50 rounded" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs font-semibold leading-none border border-blue-400 hover:border-blue-400 rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-6">
                                <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".6s">
                                    <img className="h-20 mb-6 mx-auto" src="/assets/imgs/icons/enterprise.svg" alt="Monst" />
                                    <h3 className="mb-2 text-4xl font-bold font-heading">Enterprise</h3>
                                    <span className="text-4xl text-blue-500 font-bold font-heading">$85.99</span>
                                    <p className="mt-2 mb-8 text-blueGray-400">user per month</p>
                                    <div className="flex flex-col items-center mb-8">
                                        <ul className="text-blueGray-400">
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>12 Emails</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>8 Datebases</span>
                                            </li>
                                            <li className="flex mb-3">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>Unlimited Domains</span>
                                            </li>
                                            <li className="flex">
                                                <svg className="w-6 h-6 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                <span>50 GB Storage</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <a className="block sm:inline-block py-4 px-6 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" href="#">
                                            Start Free Trial
                                        </a>
                                        <a className="block sm:inline-block py-4 px-6 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded" href="#">
                                            Purchase
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <section className="pt-20">
                <div className="container text-center">
                    <div className="max-w-lg mx-auto mb-12">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            Our Awesome <br />
                            <span className="text-blue-500">Creative</span> Team Member
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Sedat Dilmac</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO, Co Founders</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Ismail Guldu</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Business Analyst</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Tolga Dincel</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Business Analyst</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Reha Salmaner</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Back-end Developer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Abdullah Koclar</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Front-end Developer</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 pb-8 overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-wrap mb-24">
                        <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                            <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src="/assets/imgs/placeholders/img-1.png" alt="Monst" />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                            <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                            <h2 className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">Enresoft transformed our business with their tailored software solutions and creative design. Their expertise and professionalism were exceptional. Highly recommended!</h2>
                            <p className="mb-1 text-lg">
                                <strong className="text-blue-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Alice Bradley</strong>
                            </p>
                            <p className="text-gray-500 text-xs wow animate__animated animate__fadeIn" data-wow-delay=".5s">CEO, Co Founders</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pb-20">
                <div className="container">
                    <div className="max-w-2xl lg:max-w-3xl mx-auto">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Get in touch!</h2>
                            <p className="text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">We will be glad to hear from you</p>
                        </div>
                        <div className="flex flex-wrap -mx-3 text-center">
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Phone</span>
                                    <p>+1 (469) 560-3160</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">E-mail</span>
                                    <p>contact@enresoft.com</p>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <div className="leading-relaxed">
                                    <span className="text-sm text-blueGray-400">Address</span>
                                    <p>11567 E Broadview Dr</p>
                                    <p>Colorado(CO), 80117</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <form>
                                <div className="mb-4 text-sm wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                    <span className="mr-4 font-semibold">Departament:</span>
                                    <label className="mr-4">
                                        <input className="mr-1" type="radio" name="department" value="1" />
                                        <span>Support</span>
                                    </label>
                                    <label>
                                        <input className="mr-1" type="radio" name="department" value="2" />
                                        <span>Sales</span>
                                    </label>
                                </div>
                                <div className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                        </div>
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                        </div>
                                        <div className="mb-4">
                                            <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                        </div>
                                        <div>
                                            <label className="flex px-2 bg-blueGray-50 rounded">
                                                <input className="hidden" type="file" name="Choose file" />
                                                <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-1/2 px-3">
                                        <textarea className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <label>
                                        <input className="mr-1" type="checkbox" name="terms" value="1" />
                                        <span className="text-sm font-semibold">I agree to terms and conditions.</span>
                                    </label>
                                    <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
                {/* <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                    <span>Subscribe now to</span>
                                    <span className="text-blue-500"> Our Newsletter </span>
                                    <span>and get the Coupon code.</span>
                                </h2>
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    All your information is completely confidential
                                </p>
                                <div className="p-4 bg-white rounded-lg flex flex-wrap max-w-md mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <div className="flex w-full md:w-2/3 px-3 mb-3 md:mb-0 md:mr-6 bg-blueGray-100 rounded">
                                        <svg className="h-6 w-6 my-auto text-blueGray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <input className="w-full pl-3 py-4 text-xs text-blueGray-400 font-semibold leading-none bg-blueGray-100 outline-none" type="text" placeholder="Type your e-mail" />
                                    </div>
                                    <button className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                        Sign Up
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    );
}
export default Home