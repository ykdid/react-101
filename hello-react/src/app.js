// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app
var root = ReactDOM.createRoot(document.getElementById("root"));

var products = [
    {   
        id: 1,
        name : "Iphone 15 Pro MAX",
        price : 50000
        
    },
    {
        id: 2,
        name : "Iphone 13 ",
        price : 30000
    },
    {
        id: 3,
        name : "Iphone 11",
        price : 20000
    }
]
var selectedProducts = [];


function selectProduct(event , p_name){
    console.log(event.target , p_name);
    if(!selectedProducts.includes(p_name)){
        selectedProducts.push(p_name)
    }
    renderPage();

} 

function saveProduct(event){
    event.preventDefault();
    var p_name = event.target.elements.p_name.value;
    var p_price = event.target.elements.p_price.value;
    var product = {
        name: p_name,
        price: p_price
    };
    products.push(product);
    renderPage();

}


function renderPage(){
    var template = 
    <div>
        <h1 id="header">TechStore</h1>
        <form onSubmit={saveProduct}>
            <input type="text" name="p_name"/>
            <input type="text" name="p_price" />
            <button type="submit">Add</button>
        </form>
        <h2>Added Products: {selectedProducts.length}</h2>
        <p>Product List:</p>
        {
            products.map((product,index) =>(
                <div className="product-details" key={index}>
               
                {  <h2>{product.name}</h2>}
                {product.price}
                <button type="button" id={index} onClick={(event) => selectProduct(event, product.name)}>Select </button>
                
        </div>
            ))
        }
        
        
    </div>; 

    root.render(template);

}

renderPage();




