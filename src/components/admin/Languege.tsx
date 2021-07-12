const Languege = () => {
  return (
    <div>
      <input type="radio" value="en" name="language" defaultChecked /> English
      <input type="radio" value="zh-hk" name="language" /> Persian
      <div className="navigationButtonsLeft"></div>
    </div>
  );
};

export default Languege;
