// src/components/Testimonials.tsx

type Testimonial = {
  id: number;
  name: string;
  review: string;
  image: string;
  role: string;
};

const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ramesh Verma",
      review:
        "A small but well-stocked store! I found all the basic electrical items I needed for my home repairs at affordable prices.",
      image: "https://randomuser.me/api/portraits/men/12.jpg",
      role: "Customer",
    },
    {
      id: 2,
      name: "Sumanth Rao",
      review:
        "They have all the necessary gas-related accessories. Perfect for a middle-class family's daily needs. Very satisfied with the service.",
      image: "https://randomuser.me/api/portraits/men/58.jpg",
      role: "Local Resident",
    },
    {
      id: 3,
      name: "Lakshmi Devi",
      review:
        "I appreciate their friendly service and useful suggestions. Got my kitchen gas repair done quickly and safely.",
      image: "https://randomuser.me/api/portraits/women/57.jpg",
      role: "Home Maker",
    },
    {
      id: 4,
      name: "Satish Kumar",
      review:
        "Even though it’s a small shop, it has everything from plugs to switches. Reliable place for quick electrical purchases.",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      role: "Neighbourhood Electrician",
    },
    {
      id: 5,
      name: "Geeta Reddy",
      review:
        "They understand the needs of families like ours. Great place for daily-use electrical and gas solutions. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/38.jpg",
      role: "Customer",
    },
  ];
  

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          Customers Reviews
        </h2>
        <div className="overflow-x-auto py-4 testimonials-ul">
          <div className="flex gap-8 w-max px-4">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-2xl p-6 shadow-lg flex-shrink-0 w-72"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 mx-auto rounded-full mb-4 border-2 border-blue-500"
                />
                <p className="text-gray-600 italic">"{t.review}"</p>
                <h4 className="mt-4 text-lg font-semibold text-gray-800">
                  {t.name}
                </h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
