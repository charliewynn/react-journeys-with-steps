function AdditionalString({ title, updateParent }) {
  const handleInput = (e) => {
    const val = e.target.value;
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
