const Footer = () => {
  return (
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
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
            </div>
          </div>
          <div className="legal-links">
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <div className="flex flex-col space-y-2">
              <a href="/privacy" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
