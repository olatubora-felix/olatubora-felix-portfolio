import { SocialComp } from "./SocialComp";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Olawole Felix Olatubora. All
              rights reserved.
            </p>
          </div>
          <SocialComp />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
