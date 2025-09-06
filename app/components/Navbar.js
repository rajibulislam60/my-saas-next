export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow">
      <div className="text-xl font-bold text-indigo-600">MySaaS</div>
      <ul className="hidden md:flex gap-6 text-gray-700">
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md">
        Sign Up
      </button>
    </nav>
  );
}
