import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-green-200/50 to-transparent backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold text-black">DEVELOP.ME</div>
        <div className="flex space-x-6">
          <a href="#home" className="text-black hover:text-green-600">
            Home
          </a>
          <a href="#about" className="text-black hover:text-green-600">
            About
          </a>
          <a href="#portfolio" className="text-black hover:text-green-600">
            Portfolio
          </a>
          <a href="#blog" className="text-black hover:text-green-600">
            Blog
          </a>
          <Button
            variant="secondary"
            className="ml-4 bg-blue-700 dark:bg-blue-950 hover:text-green-600"
          >
            Start Project
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
