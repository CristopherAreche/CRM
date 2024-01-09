import { useState } from "react";
import Faq from "../shared/Faq";

const faqs = [
  {
    question: "What is CRM software?",
    answer:
      "CRM stands for Customer Relationship Management software. It is a powerful tool that helps businesses organize and manage their relationship with customers from a centralized and user-friendly platform. By tracking salespeople and creating a comprehensive database with customer activity, companies can understand where each customer stands in the purchasing process.",
    dropKey: "first_faq",
  },
  {
    question: "How much does the CRM system cost?",
    answer:
      "You can use the CRM for free for 7 days with no limitations on functionalities, users, or customer data. After the trial period, you can access the service for $99 USD per month.",
    dropKey: "second_faq",
  },
  {
    question: "Is the CRM system suitable for my company?",
    answer:
      "Whether you have a small or large business, the CRM platform meets your needs. Regardless of your company's size, we provide features for marketing automation and dynamic workflow.",
    dropKey: "third_faq",
  },
  {
    question: "Is the CRM system accessible on all mobile devices?",
    answer:
      "Yes! Our CRM system is available on all web devices in the market, allowing you to make the most of this tool. This is a special advantage when compared to other examples of CRM software.",
    dropKey: "four_faq",
  },
];

const FAQ = () => {
  const [dropState, setDropState] = useState([
    { id: "first_faq", isOpen: false },
    { id: "second_faq", isOpen: false },
    { id: "third_faq", isOpen: false },
    { id: "four_faq", isOpen: false },
  ]);

  const handleToggleDrop = (id) => {
    setDropState(
      dropState.map((faq) => {
        if (faq.id === id) {
          return { ...faq, isOpen: !faq.isOpen };
        } else {
          return faq;
        }
      })
    );
  };

  return (
    <section
      name="faq"
      className="h-screen flex-col gap-y-4 justify-center items-center flex "
    >
      <main className=" pt-16 flex flex-col gap-y-6">
        <h3 className="text-4xl  text-center font-extrabold text-white">
          Frequently Asked Questions
        </h3>
        {faqs.map((f) => (
          <Faq
            key={f.dropKey}
            question={f.question}
            answer={f.answer}
            onDrop={() => handleToggleDrop(f.dropKey)}
            isDrop={dropState.find((faq) => faq.id === f.dropKey)}
          />
        ))}
      </main>
    </section>
  );
};

export default FAQ;
