import Counter from "./components/Counter"
import ProductCard from "./components/ProductCard"
const Home = () => {

  const products = [{
    img:"https://m.media-amazon.com/images/I/61RJn0ofUsL._SX522_.jpg",
    price:"2236",
    rating:"4.7",
    discount:"63",
    availiability :"yes"
  },{
    img:"https://m.media-amazon.com/images/I/61RJn0ofUsL._SX522_.jpg",
    price:"1244",
    rating:"4.5",
    discount:"45",
    availiability:"out-of-stock",
  },{
    img:"https://m.media-amazon.com/images/I/41z4NndSF5L._SY445_SX342_QL70_FMwebp_.jpg",
    price:"9102",
    rating:"4.44",
    discount:"98",
    availiability:"out-of-stock",

  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 2652",
  rating:"4.12",
  discount:"70",
  availiability:"yes",

  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  },{img:"https://m.media-amazon.com/images/I/31Vy1fL1MsL._SY445_SX342_QL70_FMwebp_.jpg",
  price:" 1258",
  rating:"3.8",
  discount:"33",
  availiability:"yes",
  }

  ]
  return (//A function should return JSX(javascript xml)
  <>
  
  
<div className="product-list">
 <span>
<ProductCard {...products[0]}/>
<ProductCard {...products[2]}/>
<ProductCard {...products[3]}/>
<ProductCard {...products[4]}/>
<ProductCard {...products[5]}/>
<ProductCard {...products[6]}/>
<ProductCard {...products[7]}/>
<ProductCard {...products[8]}/>
<ProductCard {...products[9]}/>
<ProductCard {...products[10]}/>
<ProductCard {...products[11]}/>
<ProductCard {...products[12]}/>
<ProductCard {...products[13]}/>
</span>
</div>

      
    
    <Counter/>
    </>
  )
}
export default Home