export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1 className="text-5xl font-extrabold text-primary font-heading">
        Premium Travel Agency
      </h1>
      <p className="text-text-muted text-lg max-w-md text-center">
        Your trusted partner for Hajj, Umrah, and International Tours.
      </p>
      <button className="bg-gold hover:bg-gold-light text-white font-bold py-3 px-8 rounded-lg transition-colors">
        Book Now
      </button>
    </main>
  );
}