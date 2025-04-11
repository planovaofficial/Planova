import React from "react";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <header className="flex items-center justify-between p-6 shadow-md">
        <h1 className="text-2xl font-bold">Planova</h1>
        <nav className="space-x-6">
          <a href="#" className="hover:text-yellow-600">Plans</a>
          <a href="#" className="hover:text-yellow-600">How It Works</a>
          <a href="#" className="hover:text-yellow-600">About</a>
          <a href="#" className="hover:text-yellow-600">Contact</a>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">Login</button>
        </nav>
      </header>

      <section className="text-center py-24 px-4 bg-gray-100">
        <h2 className="text-4xl font-extrabold mb-4">Design Smarter. Build Faster.</h2>
        <p className="text-lg mb-6">Explore 2D & 3D house plans with precision and ease.</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600">Browse Plans</button>
      </section>

      <section className="px-6 py-16">
        <h3 className="text-2xl font-bold mb-6">Top Plans</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((plan) => (
            <div key={plan} className="border rounded-lg p-4 shadow hover:shadow-lg">
              <div className="bg-gray-200 h-40 mb-4"></div>
              <h4 className="font-semibold text-lg">Plan {plan}</h4>
              <p className="text-sm text-gray-600">2D & 3D Layout</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <h3 className="text-2xl font-bold mb-6 text-center">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <div className="text-4xl mb-2">1</div>
            <p>Browse Plans</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">2</div>
            <p>Customize to Your Needs</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">3</div>
            <p>Download Instantly</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between">
          <p>&copy; 2025 Planova. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}