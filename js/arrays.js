const ProductosCongelados = ["Alitas Finas Hiervas 800gr", "Alitas Picantes 800gr", "Alitas Bbq Grande 800gr", "Arepollo 5ud", "Chuzo Bucanero x10", "Consomé 500gr", "Corazones 500gr"]

const ProductosRefrigerados = ["Alas Campesinas", "Contramuslo", "Muslo", "Pechuga"]

function AgregarProducto() {
    let nuevoproducto = prompt("Ingresa el producto nuevo:")

    if (nuevoproducto !== ""){
        ProductosCongelados.push(nuevoproducto)
        console.table(ProductosCongelados)
    }
    else {
        console.warn ("Revisa si es un producto nuevo")

    }
}


