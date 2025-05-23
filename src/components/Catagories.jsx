function Catagories({ catagories, filterCatagory }) {
  return (
    <div className="btn-container">
      {catagories.map((catagory) => {
        return (
          <button
            type="button"
            className="btn"
            onClick={() => {
              filterCatagory(catagory);
            }}
          >
            {catagory}
          </button>
        );
      })}
    </div>
  );
}

export default Catagories;
