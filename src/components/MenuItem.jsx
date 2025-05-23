function MenuItem({ id, title, catagory, price, img, desc }) {
  return (
    <article className="menuu-ıtem">
      <img src={img} alt="" className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">{price}$</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
}

export default MenuItem;
