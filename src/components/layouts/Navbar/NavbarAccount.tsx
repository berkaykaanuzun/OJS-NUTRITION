

const NavbarAccount = () => {
  return (
    <div className="flex justify-end w-full h-12 ps-4 gap-3">
      <div className="flex justify-center items-center gap-2 border-2 px-2 border-themeColor rounded-md">
        <img className="pe-4" src="/navbar-users-icon.svg" alt="" />
        <span>HESAP</span>
        <img src="/navbar-dropdown-arrow.svg" alt="" />
      </div>

      <button className="flex justify-center items-center gap-2  border-2 px-12 text-white bg-themeColor rounded-md">
        <img src="/navbar-basket-icon.svg" alt="" />
        SEPET
      </button>
    </div>
  );
};

export default NavbarAccount;
