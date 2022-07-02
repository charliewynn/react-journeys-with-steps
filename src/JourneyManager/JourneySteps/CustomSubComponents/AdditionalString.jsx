function AdditionalString({ title, updateParent }) {
  const handleInput = (e) => {
    const val = e.target.value;
    console.log("val", val);
    updateParent({
      valid: val.length > 0,
      data: val,
    });
  };

  return (
    <div className="AdditionalString">
      <div>{title}</div>
      <input type="text" onChange={handleInput} />
    </div>
  );
}

export default AdditionalString;
