const MenuHead = ({ menuTitle, subTitle }) => {
  return (
    <>
      <div className="col-md-7 heading-section text-center ">
        <span className="subheading">{subTitle}</span>
        <h2 className="mb-4">{menuTitle}</h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
    </>
  );
};

export default MenuHead;
