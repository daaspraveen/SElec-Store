import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Phone, Clock, Award, Zap, Wind, ShieldCheck, Fan, Coffee, Flame, CookingPot } from 'lucide-react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import Testimonials from '../../components/Testimonials';

const ServiceCard = ({ icon: Icon, img_url, title, description, details }: { icon: any, img_url: string, title: string, description: string, details: string[] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`p-3 border flex flex-col max-sm:w-80 m-auto relative rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-x-105 hover:scale-y-105 ${isExpanded ? 'bg-blue-50' : 'bg-white'}`}
        >
            <img src={img_url} alt={title} loading="eager" className="w-full max-sm:w-56 max-sm:self-center max-md:w-52 max-w-48 m-auto h-15 aspect-square object-cover object-center-center" />
            <h3 className="text-xl font-semibold flex justify-start align-middle mt-2 mb-2 p -2"><Icon className={`h-8 w-8 inline-block mr-2 text-blue-600 transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`} />
                {title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            <button type='button' onClick={() => setIsExpanded(!isExpanded)} className='self-end text-sm text-blue-600 border-b-2 cursor-pointer border-blue-700'>View {isExpanded ? "Less" : "More"}</button>
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96  z-10' : 'max-h-0 '}`}>
                <ul className="space-y-2 text-gray-600">
                    {details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                            {detail}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

const Home = () => {

    const navigateTo = useNavigate()

    const repairServices = [
        {
            icon: Fan,
            img_url: "https://img.freepik.com/free-photo/modern-round-desk-fan-with-simple-background_23-2150808047.jpg?t=st=1744299878~exp=1744303478~hmac=ae059c63e393889e90f40d13d35d10eeff27584498018a062061768a948e2cd9&w=740",
            title: "Fan Repairs",
            description: "Expert repair for all types of fans",
            details: [
                "Table fan motor rewinding and bearing replacement",
                "Ceiling fan capacitor and regulator repair",
                "Blade balancing and noise reduction",
                "Complete fan restoration services",
                "Emergency same-day fan repair service"
            ]
        },
        {
            icon: Coffee,
            img_url: "https://img.freepik.com/premium-photo/household-kitchen-appliances-table-kitchen_926199-3832242.jpg?uid=R90047571&ga=GA1.1.264832575.1739626543&w=740",
            title: "Kitchen Appliances",
            description: "Mixers, grinders & more",
            details: [
                "Mixer-grinder jar repair and blade sharpening",
                "Motor repair and replacement",
                "Bearing and bush replacement",
                "Speed control unit repair",
                "Complete appliance overhaul"
            ]
        },
        {
            icon: Flame,
            img_url: "https://www.huddersfieldgas.co.uk/wp-content/uploads/2019/03/71kRF0Cg5CL._SL1500_-1.jpg",
            title: "Gas Equipment",
            description: "All gas-related repairs",
            details: [
                "Gas stove burner cleaning and repair",
                "Gas leak detection and fixing",
                "Regulator replacement and calibration",
                "Pipeline inspection and maintenance",
                "Safety system installation"
            ]
        },
        {
            icon: Zap,
            img_url: "https://th.bing.com/th/id/OIP.cNYcVqb8jF1POLqywPb4LAHaHa?pid=ImgDet&w=208&h=208&c=7&dpr=1.5",
            title: "Heating Solutions",
            description: "Heaters & thermal equipment",
            details: [
                "Electric heater element replacement",
                "Thermostat calibration",
                "Safety cut-off system repair",
                "Complete heater restoration",
                "Energy efficiency optimization"
            ]
        },
        {
            icon: CookingPot,
            img_url: "https://th.bing.com/th/id/OIP.TD5iyMWtdPDvQP67ytAXrQHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7",
            title: "Rice Cookers & Cookers",
            description: "All types of cookers",
            details: [
                "Heating element replacement",
                "Thermostat and sensor repair",
                "Control panel repair",
                "Steam valve maintenance",
                "Complete cooker restoration"
            ]
        },
        {
            icon: Wind,
            img_url: "https://clipground.com/images/cooler-png-10.png",
            title: "Cooling Equipment",
            description: "Coolers & cooling solutions",
            details: [
                "Water pump repair and replacement",
                "Cooling pad maintenance",
                "Motor repair and optimization",
                "Water distribution system repair",
                "Complete cooler servicing"
            ]
        }
    ];

    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <div className="relative bg-blue-700 pt-24 banner">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">
                Your Trusted Partner for Home Electronics & Gas Tools
              </h2>
              <p className="text-xl mb-8">10 Years of Excellence in Service</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="#services"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 features-cards-ul">
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  10 Years Experience
                </h3>
                <p className="text-gray-600">
                  Trusted by thousands of customers
                </p>
              </div>
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <ShieldCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Quality Guaranteed
                </h3>
                <p className="text-gray-600">Premium products and services</p>
              </div>
              <div className="text-center p-6 transform hover:scale-105 transition-transform duration-300">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Same Day Service</h3>
                <p className="text-gray-600">Quick and reliable support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div id="products" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Products
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://img.freepik.com/premium-photo/kitchen-appliances-blender-coffee-machine-pressure-cooker-pot-slow-juicer-white_641503-173831.jpg?uid=R90047571&ga=GA1.1.264832575.1739626543&semt=ais_hybrid&w=740"
                  alt="Home Electronics"
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Home Electronics
                  </h3>
                  <p className="text-gray-600">
                    Latest appliances for your home
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://img.freepik.com/premium-vector/portable-gas-stove-burner-vector-isolated-illustration_1324823-15435.jpg?uid=R90047571&ga=GA1.1.264832575.1739626543&w=740"
                  alt="Gas Tools"
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Gas Tools</h3>
                  <p className="text-gray-600">Professional-grade equipment</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://img.freepik.com/premium-vector/bunch-electronics-including-one-that-has-green-light-it_1123160-11189.jpg?uid=R90047571&ga=GA1.1.264832575.1739626543&semt=ais_hybrid&w=740"
                  alt="Smart Devices"
                  className="w-full h-48 object-contain"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Smart Devices</h3>
                  <p className="text-gray-600">Connected home solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Games Section */}
        <section className="bg-blue-50 py-12 px-4 text-center games-section">
          <h2 className="text-3xl font-bold mb-4 text-gray-50">
            Play Fun Games
          </h2>
          <p className="text-gray-50 mb-6">
            Explore our collection of interactive and entertaining games.
            Sharpen your memory, have fun, and challenge yourself!
          </p>
          <button
            type="button"
            onClick={() => navigateTo("/games")}
            className="bg-gray-900 text-gray-100 px-6 py-3 rounded-lg hover:bg-gray-950 hover:scale-105 transition"
          >
            Browse Games
          </button>
        </section>

        {/* Services Section */}
        <div id="services" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Repair Services
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repairServices.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <div id="contact" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <div className="flex items-center justify-center space-x-4 mb-6 hover:scale-105 transition-transform duration-300">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-lg">1-800-SONY-HEG</span>
              </div>
              <div className="flex items-center justify-center space-x-4 hover:scale-105 transition-transform duration-300">
                <Zap className="h-6 w-6 text-blue-600" />
                <span className="text-lg">Same Day Service Available</span>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.464464860823!2d78.42593233509184!3d17.3821956360622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97cf78e03bcf%3A0x2071bea8961bf74b!2sSONY%20Electronics%20and%20Gas%20Services!5e0!3m2!1sen!2sin!4v1744371571258!5m2!1sen!2sin"
                width="600"
                height="450"
                className="map border-none m-auto"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
}

export default Home;