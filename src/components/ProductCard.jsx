

const ProductCard= (props) => {


  return (
    <div className="product-card">
        <img className="product-img" src={props.img}/>
        <div className="product-price">{props.price}</div>
        <div className="product-rating">{props.rating}</div>
        <div>
            <span className="discount">{props.discount}</span>
            <span className="availiability">{props.availiability}</span>
        </div>
    </div>
    
  )
}

export default ProductCard