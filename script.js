const buttonDesplegarMenu = document.querySelector(".menu-hamburguesa");
const menuMobile = document.querySelector(".menu-despegable-mobile")
const desplegarProduct = document.querySelector("#desplegar-product");
const desplegarCompany = document.querySelector("#desplegar-Company");
const desplegarConnect = document.querySelector("#desplegar-Connect");

const spanProduct = document.querySelectorAll(".span-Product"); //Al hacer All se guarda en un array, debemos hacer un forEach
const spanCompany = document.querySelectorAll(".span-Company");
const spanConnect = document.querySelectorAll(".span-Connect");



buttonDesplegarMenu.addEventListener("click",()=>{
    menuMobile.classList.toggle("visible");
})

desplegarProduct.addEventListener("click",()=>{
    spanProduct.forEach(elemento=>{
        elemento.classList.toggle("disabled");
    })
});
desplegarCompany.addEventListener("click",()=>{
    spanCompany.forEach(elemento=>{
        elemento.classList.toggle("disabled");
    })
});
desplegarConnect.addEventListener("click",()=>{
    spanConnect.forEach(elemento=>{
        elemento.classList.toggle("disabled");
    })
});

//Menu desktop 

const desplegarProductDesktop = document.querySelector("#desplegar-product-desktop");
const desplegarCompanyDesktop = document.querySelector("#desplegar-company-desktop");
const desplegarConnectDesktop = document.querySelector("#desplegar-connect-desktop");

const productDesktop = document.querySelector(".menu-product-desktop");
const companyDesktop = document.querySelector(".menu-company-desktop");
const connectDesktop = document.querySelector(".menu-connect-desktop");

desplegarProductDesktop.addEventListener("click",()=>{
    productDesktop.classList.toggle("visible");
});
desplegarCompanyDesktop.addEventListener("click",()=>{
    companyDesktop.classList.toggle("visible");
});
desplegarConnectDesktop.addEventListener("click",()=>{
    connectDesktop.classList.toggle("visible");
})
