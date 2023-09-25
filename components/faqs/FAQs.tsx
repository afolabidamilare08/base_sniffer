'use client'
import React, { useEffect } from 'react';
import faqs from './data';
import FAQ from './FAQ';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./faqs.css";

const FAQs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <section id="faqs">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some questions I usually get. Click to toggle the answer. If
        any more question contact me directly from the contact section!
      </p>
      <div className="container faqs__container" data-aos="fade-in">
        {faqs.map(faq => (
          <FAQ key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  );
};

export default FAQs;
