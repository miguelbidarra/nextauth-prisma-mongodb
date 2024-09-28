import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
interface FaqProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

const FAQ: React.FC<FaqProps> = ({ openFaq, toggleFaq }) => {
  const faqs = [
    {
      q: "How long can I rent the bike?",
      a: "You can rent a bike for 1 up to 6 months.",
    },
    {
      q: "What if the bike gets damaged?",
      a: "You need to return it in the similar conditions and with no major damages.",
    },
    {
      q: "How do I return the bike?",
      a: "You can return the bike by acessing your profile and choosing \"I want to return my bike\".",
    },
    {
      q: "What is the price of the rental?",
      a: "To rent a bike you will need to leave a deposit along with the rental fee. On the return of the bike you imediatly get your deposit back.",
    },
  ];

  return (
    <section className="bg-background py-20" id="faq">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Left - Section Heading */}
          <div className="md:w-1/3 flex flex-col justify-center items-center mb-12 md:mb-0 md:pr-8">
            <h1
              className="text-5xl text-text font-bold text-center"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              FAQ
            </h1>
            <div className="flex justify-center items-center h-full mt-4">
              <FaQuestionCircle size={100} className="text-accent" />
            </div>
          </div>

          {/* Right - FAQ List */}
          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-accent overflow-hidden"
              >
                <button
                  className="flex justify-between items-center w-full p-4 text-left font-semibold"
                  onClick={() => toggleFaq(index)}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  {faq.q}
                  {openFaq === index ? (
                    <FiChevronUp className="faq-icon" width={23} height={23} />
                  ) : (
                    <FiChevronDown className="faq-icon" width={23} height={23} />
                  )}
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === index ? "max-h-96" : "max-h-0"
                  }`}
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <div className="p-4 bg-gray-50">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
