console.log("Number of categories: ", document.querySelectorAll('#categories > li').length);
console.log(document.querySelectorAll('.item > h2').forEach(item => { console.log("Category: ", item.textContent), console.log("Elements: ", item.nextElementSibling.children.length) }));