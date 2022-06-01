const CenterMenu = () => {
  const itemStyle = "mr-[3rem] hover:cursor-pointer";

  return (
    <section className="menu flex">
      <ul className="flex w-[100%] justify-between">
        <li className={itemStyle}>Home</li>
        <li className={itemStyle}>About</li>
        <li className={itemStyle}>Preformer</li>
        <li className={itemStyle}>Event Shedule</li>
      </ul>
    </section>
  );
};

export default CenterMenu;
