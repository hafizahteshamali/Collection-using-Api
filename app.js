let allproduct = document.getElementById("allproduct");
let box = document.getElementById("box");
let mensproduct = document.getElementById("mensproduct");
let jeweleryproduct = document.getElementById('jeweleryproduct');
let electronicsproduct = document.getElementById('electronicsproduct');
let womensProduct = document.getElementById('womensProduct');
let loader = document.getElementById('loader');
let Error = document.getElementById('error');


const AllProduct = () => {
  loader.classList.add('loader');
  box.innerHTML = "";
  fetch("https://fakestoreapi.com/products")
    .then((resp) => {
      return resp.json();
    })

    .then((data) => {
      loader.classList.remove('loader');
      data.forEach((element) => {
        box.innerHTML += `<div id="Column" class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
            <div class="card" style="width: 17rem; margin:auto">
  <div class="img-wrapper">
  <img src="${element.image}" class="card-img-top" alt="...">
  <span>${element.category}</span></div>
  <div class="card-body">
    <div class="card-title-wrapper">
    <h6 class="card-title">${element.title.slice(0, 20)}...</h6>
    <span>${element.price}$</span>
    </div>
    <p class="card-text">${element.description.slice(0, 70)}...</p>
    <a href="#" class="btn btn-primary w-100">Go in Details</a>
  </div>
</div>
        </div>`;
      });
    })

    .catch((error) => {
      box.innerHTML = `<div class="Error">API Not Found!!</div>`;
      setTimeout(()=>{
        box.innerHTML = "";
      }, 2000)
    });
};

allproduct.addEventListener("click", AllProduct);

const MenscategorizedProduct = () => {
  box.innerHTML = "";
  fetch('https://fakestoreapi.com/products')
    .then((resp) => {
      return resp.json()
    })

    .then((data) => {
      let productCategory = data.filter((product) => {
        return product.category === "men's clothing";
      });

      productCategory.forEach((element) => {
        box.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
      <div class="card" style="width: 17rem; margin:auto">
    <div class="img-wrapper">
    <img src="${element.image}" class="card-img-top" alt="...">
    <span>${element.category}</span></div>
    <div class="card-body">
      <div class="card-title-wrapper">
      <h6 class="card-title">${element.title.slice(0, 20)}...</h6>
      <span>${element.price}$</span>
      </div>
      <p class="card-text">${element.description.slice(0, 70)}...</p>
      <a href="#" class="btn btn-primary w-100">Go somewhere</a>
    </div>
  </div>
          </div>`;
      });
    })

    .catch((error) => {
      box.innerHTML = `<div class="Error">API Not Found!!</div>`;
      setTimeout(()=>{
        box.innerHTML = "";
      }, 2000)
    });
}

mensproduct.addEventListener("click", MenscategorizedProduct);




const jewelerycategorizedProduct = () => {
  box.innerHTML = "";
  fetch('https://fakestoreapi.com/products')
    .then((resp) => {
      return resp.json()
    })

    .then((data) => {
      let productCategory = data.filter((product) => {
        return product.category === "jewelery";
      });

      productCategory.forEach((element) => {
        box.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
      <div class="card" style="width: 17rem; margin:auto">
    <div class="img-wrapper">
    <img src="${element.image}" class="card-img-top" alt="...">
    <span>${element.category}</span></div>
    <div class="card-body">
      <div class="card-title-wrapper">
      <h6 class="card-title">${element.title.slice(0, 20)}...</h6>
      <span>${element.price}$</span>
      </div>
      <p class="card-text">${element.description.slice(0, 70)}...</p>
      <a href="#" class="btn btn-primary w-100">Go somewhere</a>
    </div>
  </div>
          </div>`;
      });
    })

    .catch((error) => {
      box.innerHTML = `<div class="Error">API Not Found!!</div>`;
      setTimeout(()=>{
        box.innerHTML = "";
      }, 2000)
    });
}

jeweleryproduct.addEventListener('click', jewelerycategorizedProduct);




const electronicCategorizedProduct = () => {
  box.innerHTML = "";
  fetch('https://fakestoreapi.com/products')
    .then((resp) => {
      return resp.json()
    })

    .then((data) => {
      let productCategory = data.filter((product) => {
        return product.category === "electronics";
      });

      productCategory.forEach((element) => {
        box.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
      <div class="card" style="width: 17rem; margin:auto">
    <div class="img-wrapper">
    <img src="${element.image}" class="card-img-top" alt="...">
    <span>${element.category}</span></div>
    <div class="card-body">
      <div class="card-title-wrapper">
      <h6 class="card-title">${element.title.slice(0, 20)}...</h6>
      <span>${element.price}$</span>
      </div>
      <p class="card-text">${element.description.slice(0, 70)}...</p>
      <a href="#" class="btn btn-primary w-100">Go somewhere</a>
    </div>
  </div>
          </div>`;
      });
    })

    .catch((error) => {
      box.innerHTML = `<div class="Error">API Not Found!!</div>`;
      setTimeout(()=>{
        box.innerHTML = "";
      }, 2000)
    });
}

electronicsproduct.addEventListener('click', electronicCategorizedProduct);



const womensCategorizedProduct = () => {
  box.innerHTML = "";
  fetch('https://fakestoreapi.com/products')
    .then((resp) => {
      return resp.json()
    })

    .then((data) => {
      let productCategory = data.filter((product) => {
        return product.category === "women's clothing";
      });

      productCategory.forEach((element) => {
        box.innerHTML += `<div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 my-2">
      <div class="card" style="width: 17rem; margin:auto">
    <div class="img-wrapper">
    <img src="${element.image}" class="card-img-top" alt="...">
    <span>${element.category}</span></div>
    <div class="card-body">
      <div class="card-title-wrapper">
      <h6 class="card-title">${element.title.slice(0, 20)}...</h6>
      <span>${element.price}$</span>
      </div>
      <p class="card-text">${element.description.slice(0, 70)}...</p>
      <a href="#" class="btn btn-primary w-100">Go somewhere</a>
    </div>
  </div>
          </div>`;
      });
    })

    .catch((error) => {
      box.innerHTML = `<div class="Error">API Not Found!!</div>`;
      setTimeout(()=>{
        box.innerHTML = "";
      }, 2000)
    });
}


womensProduct.addEventListener('click', womensCategorizedProduct);