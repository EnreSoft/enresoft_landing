import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";
import Image from "next/image";

const About = () => {
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

  const aboutText = (
    <>
      <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
        Dedicated to <span className="text-blue-500">Innovation</span> and your
        success
      </h2>
      <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
        We are <strong className="text-blue-500">Enresoft</strong>
      </p>
      <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
        At Enresoft, we are dedicated to transforming ideas into innovative
        software solutions. With a focus on custom software development, web
        design, and UX/UI excellence, we craft solutions that are both
        functional and visually compelling. Our team of experts brings a wealth
        of experience and a commitment to quality, ensuring that every project
        we undertake not only meets but exceeds expectations.
      </p>
      <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
        Founded on the principles of integrity, creativity, and customer
        satisfaction, Enresoft is your trusted partner in navigating the digital
        landscape. We work closely with our clients to understand their unique
        needs and deliver tailored solutions that drive success. Whether you're
        looking to develop a custom application, enhance your online presence,
        or ensure your software's performance, we have the expertise and passion
        to help you achieve your goals.
      </p>
      <div className="text-center lg:text-left mt-6">
        <Link href="/services" legacyBehavior>
          <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
            Our Services
          </a>
        </Link>
        <Link href="#how-we-work" legacyBehavior>
          <a
            className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
            data-wow-delay=".3s"
          >
            How We Work?
          </a>
        </Link>
      </div>
    </>
  );

  const ourStoryText = (
    <div
      className="mt-8 lg:mt-0 wow animate__animatedanimated animate__fadeIn"
      data-wow-delay=".5s"
    >
      <h3 className="text-2xl font-bold font-heading mb-2">Our Story</h3>
      <p className="text-blueGray-400 leading-relaxed text-sm">
        We are Enresoft—a company born from friendship, shared dreams, and a
        drive for innovation. Four friends, Ismail, Tolga, Furkan, and Sedat,
        who graduated from the same school, came together to create something
        meaningful. Our journey began when Ismail launched a warehouse service
        for e-commerce sellers. Inspired by his success, Tolga expanded the idea
        and invited Furkan to join the venture. Later, Tolga brought Sedat on
        board to develop a custom software solution that streamlined our
        operations. This success sparked a bigger vision. Today, Enresoft is a
        young, dynamic software company focused on creating practical solutions
        and offering expert consulting services. We are proud of our roots and
        excited for the future as we turn challenges into opportunities.
      </p>
    </div>
  );

  return (
    <>
      <Layout>
        <section className="relative -mt-24 pt-24">
          <div className="container">
            <div className="flex flex-wrap lg:flex-nowrap items-start -mx-3">
              {/* Our Story and Photo-left */}
              <div className="w-full lg:w-1/2 px-3 mb-12 lg:mb-0">
                <div className="flex justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/team.svg"
                    alt="Monst Top Left"
                  />
                </div>
                <div className="mt-8">{ourStoryText}</div>
              </div>

              
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12 lg:pl-16">{aboutText}</div>
              </div>
            </div>
            {/*  */}

<div className="flex flex-col lg:flex-row items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
 
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
    <Image
      //src="https://img.freepik.com/darmowe-wektory/gradientowe-dynamiczne-niebieskie-linie-tla_23-2148995756.jpg?semt=ais_hybrid&w=740"
      src="https://media.istockphoto.com/id/1466741325/pl/zdj%C4%99cie/elementy-uk%C5%82adanki-3d-uk%C5%82adanka-%C5%82%C4%85cz%C4%85ca-koncepcja-biznesowa-praca-zespo%C5%82owa.jpg?s=612x612&w=0&k=20&c=29CCdtodbeE8GaFGea49j46Yqp2Q9ojDD6dErTQ2XvI="
     
      alt="Team"
      width={400}
      height={150}
      className="rounded-md shadow-md"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
  </div>

  
  <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn" data-wow-delay=".2s">
      Our team's strength comes from its diverse industry background—from logistics and retail to finance and healthcare. This experience allows us to create innovative, custom solutions tailored to your business needs.
    </p>

    <div className="text-blueGray-400 leading-relaxed mt-4 space-y-4">
      <p>
        <strong style={{ color: 'rgb(96, 165, 250)' }}>Industry Diversity:</strong> We bring unique perspectives to solve challenges creatively.
      </p>
      <p>
        <strong style={{ color: 'rgb(96, 165, 250)' }}>Deep Expertise:</strong> Our team blends strategic thinking with hands-on execution.
      </p>
      <p>
        <strong style={{ color: 'rgb(96, 165, 250)' }}>Collaborative Innovation:</strong> Diverse minds. Smarter solutions. Better outcomes.
      </p>
    </div>
  </div>
</div>

            
            {/* <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-20 py-12 border-t border-blueGray-100">
              
              <div
                className="w-full lg:w-1/2 flex justify-center"
                
              >
                <img
                  src="/assets/imgs/placeholders/img-16.jpg"
                  alt="Photo"
                  className="rounded-md shadow-md max-w-full h-auto"
                  // width={600}
                  // height={400}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                 <Image
        src="https://img.freepik.com/darmowe-wektory/gradientowe-dynamiczne-niebieskie-linie-tla_23-2148995756.jpg?semt=ais_hybrid&w=740"
        alt="Img"
        width={600}
        height={400}
        style={{ maxWidth: "100%", height: "auto" }}
      />
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left px-4">
                <p
                  className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn"
                  data-wow-delay=".2s"
                >
                  Our strength lies in our people. Our team is composed of
                  professionals who have gained valuable experience across a
                  wide range of industries—from logistics and retail to finance
                  and healthcare. This diverse background allows us to
                  understand the unique challenges and opportunities in every
                  sector and to deliver customized solutions that truly meet
                  your business needs.
                </p>
                <ul className="list-disc list-inside text-blueGray-400 leading-relaxed mt-4">
                  <div className="text-blueGray-400 leading-relaxed mt-4 space-y-4">
                    <p>
                      <strong>Broad Industry Experience:</strong> Each team
                      member brings a unique perspective, enabling us to address
                      challenges with innovative, tailored solutions.
                    </p>
                    <p>
                      <strong>Deep Expertise:</strong> From operational know-how
                      to advanced technical skills, our multidisciplinary team
                      is equipped to tackle complex problems.
                    </p>
                    <p>
                      <strong>Collaborative Innovation:</strong> Our varied
                      experiences foster creative thinking and collaborative
                      problem-solving, keeping us ahead of industry trends.
                    </p>
                  </div>
                  
                </ul>
              </div>
            </div> */}
          </div>
        </section>
      </Layout>
    </>
  );
};
export default About;
