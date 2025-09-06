const features = [
  { title: "Fast Performance", desc: "Optimized code for best results." },
  { title: "Secure Data", desc: "Top-notch security built in." },
  { title: "24/7 Support", desc: "We are always here to help you." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
