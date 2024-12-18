function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Connecting local artisans with art lovers while preserving and
              celebrating India's rich cultural heritage.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">
                  Cultural Map
                </a>
              </li>
              <li>
                <a href="/marketplace" className="text-gray-300 hover:text-white">
                  Marketplace
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: support@culturalmarketplace.com<br />
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;