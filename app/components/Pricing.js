const plans = [
  { name: "Basic", price: "$19/mo", features: ["1 Project", "Email Support"] },
  {
    name: "Pro",
    price: "$49/mo",
    features: ["5 Projects", "Priority Support"],
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited", "24/7 Support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <div key={i} className="p-6 bg-white shadow rounded-lg text-center">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-2xl font-bold my-4">{p.price}</p>
            <ul className="text-gray-600 mb-6">
              {p.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
