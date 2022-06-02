const productList = [
    { id: 1, name: "Product A", img: "", time: 30, type: "snack" },
    { id: 1, name: "Product B", img: "", time: 60, type: "fish" },
];
const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
];
import { render } from "./common";
import { categories, productList } from "./data";

function showData(data, key) {
    // kiểm tra
    if (!Array.isArray(data) || data.length == 0) return false;
    // xử lý
    let result = "";
    if (key == "product") {
        for (let i = 0; i < data.length; i++) {
            result += `<h2><a href="./detail.html?id=${data[i].id}">${data[i].name}</a></h2>`;
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            result += `<div><h2><a href="./product.html?id=${data[i].id}">${data[i].name}</a></h2></div>`;
        }
    }
    // trả về kết quả
    return result;
}

function render(idElement, content) {
    document.getElementById(idElement).innerHTML = content;
}
render("product", showData(productList, "product"));
render("category", showData(categories, "category"));