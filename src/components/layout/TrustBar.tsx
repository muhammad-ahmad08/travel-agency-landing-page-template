const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "2,100+", label: "Happy Pilgrims" },
  { value: "96%", label: "Visa Success Rate" },
  { value: "24/7", label: "Customer Support" },
];

export default function TrustBar() {
  return (
    <section className="bg-primary-dark text-white py-12">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-3xl md:text-4xl font-heading font-extrabold text-gold mb-1">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-gray-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}