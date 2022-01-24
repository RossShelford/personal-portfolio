import nameLogo from '../../nameLogo.svg';

function NavBar() {
  return (
  <nav className="bg-cream w-full h-20 flex items-center drop-shadow-sm">
      <img src={nameLogo} alt="Ross Shelford" className="h-10 cursor-pointer "/>
      <div className="cursor-pointer hover:underline justify-end">
        WORK
        ABOUT
        CONTACT
      </div>
  </nav>
  );
}

export default NavBar;