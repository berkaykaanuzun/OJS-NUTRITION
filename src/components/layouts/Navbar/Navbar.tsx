import { Account, Band, Input, Logo } from ".";




function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="columns-3 h-20 flex justify-between items-center">
          <Logo />
          <Input />
          <Account />
        </div>
      </div>
      <Band />
    </nav>
  );
}

export default Navbar;
