function search(){
    let input = document.getElementById('seearchbar').value
    input = input.toLoweerCase()
    let x = document.getElementsByClassName('catalogo')

    for(i=0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].computedStyleMap.display = "none"
        }else{
            x[i].computedStyleMap.display = "list-item"
        }
    }
}