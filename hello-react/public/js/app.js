"use strict";

// 1.Yöntem => React - CDN (eksik araçlar) - Babel
// 2.Yöntem => create-react-app
var root = ReactDOM.createRoot(document.getElementById("root"));
var products = [{
  id: 1,
  name: "Iphone 15 Pro MAX",
  price: 50000
}, {
  id: 2,
  name: "Iphone 13 ",
  price: 30000
}, {
  id: 3,
  name: "Iphone 11",
  price: 20000
}];
var selectedProducts = [];
function selectProduct(event, p_name) {
  console.log(event.target, p_name);
  if (!selectedProducts.includes(p_name)) {
    selectedProducts.push(p_name);
  }
  renderPage();
}
function saveProduct(event) {
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
function renderPage() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    id: "header"
  }, "TechStore"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveProduct
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "p_name"
  }), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "p_price"
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Add")), /*#__PURE__*/React.createElement("h2", null, "Added Products: ", selectedProducts.length), /*#__PURE__*/React.createElement("p", null, "Product List:"), products.map(function (product, index) {
    return /*#__PURE__*/React.createElement("div", {
      className: "product-details",
      key: index
    }, /*#__PURE__*/React.createElement("h2", null, product.name), product.price, /*#__PURE__*/React.createElement("button", {
      type: "button",
      id: index,
      onClick: function onClick(event) {
        return selectProduct(event, product.name);
      }
    }, "Select "));
  }));
  root.render(template);
}
renderPage();
