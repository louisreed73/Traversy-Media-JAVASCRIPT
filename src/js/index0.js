

var list=document.querySelectorAll("li");


function cambio(li) {
    [...li].forEach(item=>console.log(item.className))
};

cambio(list)

