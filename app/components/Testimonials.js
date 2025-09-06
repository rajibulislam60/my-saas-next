const testimonials = [
  { name: "Alice", text: "Amazing service, my business grew 2x faster!" },
  { name: "Bob", text: "Simple and powerful SaaS solution." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Customers Say
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg">
            <p className="text-gray-600 italic">{t.text}</p>
            <p className="mt-4 font-semibold">- {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
