import './App.css'
const App = () => {

  return (
    <>
      <div className="min-h-screen flex flex-col">
      {/* Header & Navigation */}
      <header className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl font-bold text-red-600">Pizza Express</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-red-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-red-600">About</a>
            <a href="/menu" className="text-gray-700 hover:text-red-600">Menu</a>
            <a href="/contact" className="text-gray-700 hover:text-red-600">Contact</a>
            <a href="/login" className="text-gray-700 hover:text-red-600">Login</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('./hero.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-8">Customize Your Perfect Pizza!</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Handcrafted with love, topped with premium ingredients
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
              Order Now
            </button>
            <button className="bg-transparent text-white px-8 py-3 rounded-full border-2 border-white hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>
      {/* Popular Pizzas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Most Popular Pizzas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Margherita Special</h3>
                <p className="text-gray-600 mb-4">Fresh tomatoes, mozzarella, basil, and our secret sauce</p>
                <span className="text-red-600 font-bold">₹299</span>
              </div>
            </div>
            {/* Add more pizza cards here */}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose Pizza Express?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Custom Pizza Builder</h3>
              <p className="text-gray-600">Create your perfect pizza with our interactive builder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Real-time Tracking</h3>
              <p className="text-gray-600">Track your order from kitchen to delivery</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Payments</h3>
              <p className="text-gray-600">Safe and easy payments via Razorpay</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Inventory Management</h3>
              <p className="text-gray-600">Efficient admin controls for inventory</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <div className="flex text-yellow-400">★★★★★</div>
                </div>
              </div>
              <p className="text-gray-600">"Best pizza I've ever had! The custom builder is amazing."</p>
            </div>
            {/* Add more testimonials here */}
          </div>
        </div>
      </section>
      {/* Download App Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Get Our Mobile App</h2>
              <p className="text-xl mb-6">Order faster, track better, earn rewards!</p>
              <div className="flex space-x-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <span>Download on App Store</span>
                </button>
                <button className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
                  <span>Get it on Google Play</span>
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-full h-[400px] bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="contact-info">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300">Email: info@pizzaexpress.com</p>
              <p className="text-gray-300">Phone: (555) 123-4567</p>
            </div>
            <div className="social-links">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
              </div>
            </div>
            <div className="legal-links">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <div className="flex flex-col space-y-2">
                <a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a>
                <a href="/terms" className="text-gray-300 hover:text-white">Terms & Conditions</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default App
