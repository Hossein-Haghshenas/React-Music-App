import CenterMenu from "./CenterMenu";

function Header() {
  const btnStyle = "border-[2px] rounded-[10px] border-[#232a4e] px-[25px]";
  return (
    <header className="header flex bg-[#081720] items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]">
      {/* Logo */}
      <img
        className="logo w-[42px] h-[42px]"
        src={require("../image/MuzicLogo.png")}
        alt="logo"
      />
      {/* side menu */}
      <CenterMenu />
      {/* login section */}
      <section className="header-btns">
        <button className={`mr-[35px] hover:bg-[#232a4e] ${btnStyle}`}>
          Log in
        </button>
        <button className={`mr-[35px] bg-[#232a4e] ${btnStyle}`}>
          Sign up
        </button>
      </section>
    </header>
  );
}

export default Header;
