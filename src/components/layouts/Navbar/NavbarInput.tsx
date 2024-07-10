

const NavbarInput = () => {
  return (
    <div className="w-full border-2 border-themeColor rounded-md">
      <input
        className="p-4 w-800 h-11 rounded-md"
        placeholder="Aradığınız ürünü yazınız"
        type="text"
      />
      <button className="w-200 h-12 bg-themeColor text-white ">Ara</button>
    </div>
  );
};

export default NavbarInput;
