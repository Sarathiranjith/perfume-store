import one from "../asserts/images/one.jpg"
import three from "../asserts/images/three.jpg"
import two from "../asserts/images/two.jpg"

function Product()
{
  return(
    <div class="products">
    
    <div class="box">
       
                <img src={one}></img>
                <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>    
    </div>
         
    
    <div class="box">
        <img src={two} alt="villain"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p> 
    </div>
    <div class="box">
        <img src={three} alt="Designs Club"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
    </div>

    
    
</div>
  )
}

export default Product