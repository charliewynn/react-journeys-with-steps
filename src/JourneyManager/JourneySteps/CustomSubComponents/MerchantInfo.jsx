import { useState } from "react";

function MerchantInfo({ title, updateParent }) {
  const [date, setDate] = useState("");
  const [contactMethod, setContactMethod] = useState("");

  const doUpdateParent = () => {
    const isValid = date.length > 0 && contactMethod.length > 0;
    const data = { date: date, contactMethod: contactMethod };
    console.log("Isval", isValid);
    updateParent({ data: data, valid: isValid });
  };
  const handleInput = (e) => {
    const val = e.target.value;
    setDate(val);
    doUpdateParent();
  };
  const handleInput2 = (e) => {
    const val = e.target.value;
    setContactMethod(val);
    doUpdateParent();
  };

  return (
    <div className="MerchantInfo">
      <div>{title}</div>
      <input type="text" onChange={handleInput} />
      <input type="text" onChange={handleInput2} />
      <hr></hr>
      {date}
      <hr></hr>
      {contactMethod}
    </div>
  );
}

export default MerchantInfo;
