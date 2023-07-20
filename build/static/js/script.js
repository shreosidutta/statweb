// fetch("./static/json/products.json")
// .then(function(response){
//    return response.json();
// })
// .then(function(products){
//    let placeholder = document.querySelector("#data-output");
//    let out = "";
//    for(let product of products){
//       out += `
//               <a class="lightbox" href="${product.image}"><img src="${product.image}" class="card-img-top"></a>

//               <div class="card-body">
//                 <p>${product.desc}</p>
//                 <div class="d-flex justify-content-between align-items-center">
//                   <div class="btn-group">
//                     <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
//                     <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
//                   </div>
//                   <small class="text-muted">9 mins</small>
//                 </div>
//               </div>
//       `;
//    }
 
//    placeholder.innerHTML = out;
// });