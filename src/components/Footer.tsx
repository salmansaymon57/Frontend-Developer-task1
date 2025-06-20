const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-neon-green">DEVELOP.ME</h2>
          </div>
          <div className="text-5xl font-extrabold mb-6 md:mb-0">As you can</div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold">Say hello</h3>
              <p>HELLO@DEVELOP.ME.COM</p>
              <p>Call: +788549 4987 00</p>
              <p>+8845 0100 311</p>
            </div>
            <div>
              <h3 className="font-semibold">Menu</h3>
              <p>Home</p>
              <p>About</p>
              <p>Portfolio</p>
              <p>Blog</p>
            </div>
            <div>
              <h3 className="font-semibold">Social</h3>
              <p>Twitter</p>
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Behance</p>
              <p>Dribbble</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6 text-sm">
          <span>BESNIK</span>
          <span>© develop.me 2023 | PRIVACY - TERMS</span>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-500 text-xl flex space-x-4">
          <a href="https://twitter.com/williamrey" aria-label="Twitter">
            @williamrey
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <span className="sr-only">Instagram</span>
          </a>
          <a href="https://twitter.com" aria-label="Twitter">
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-green-500/10 to-black opacity-50 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
