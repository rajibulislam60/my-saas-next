const faqs = [
  { q: "How does it work?", a: "Just sign up and start using the features." },
  { q: "Is there a free trial?", a: "Yes, 7-day free trial included." },
];

export default function Faq() {
  return (
    <section id="faq" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">FAQs</h2>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i} className="p-4 bg-white shadow rounded-lg">
            <h3 className="font-semibold mb-2">{f.q}</h3>
            <p className="text-gray-600">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
