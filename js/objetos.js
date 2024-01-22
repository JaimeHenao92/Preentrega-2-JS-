

function Producto(codigo, nombre, marca, precio, stock) {
    this.codigo = codigo
    this.nombre = nombre
    this.marca = marca
    this.precio = precio
    this.stock = stock
    this.descontarstock = function(unidades) {
        let StockActual = this.stock - unidades
        this.stock = StockActual
        return StockActual
        
    }
    
  
    
}

const producto1 = new Producto(1, "Alitas Finas Hiervas 800gr", "Bucanero", 17000, 10)

const producto2 = new Producto(2, "Alitas Picantes 800gr", "Bucanero", 17000, 10)

const producto3 = new Producto(3, "Alitas Bbq Grande 800gr", "Bucanero", 17000, 10)

const producto4 = new Producto(4, "Arepollo 5ud", "Pachito el Chef", 15000, 15)

const producto5 = new Producto(5, "Chuzo Bucanero x10", "Bucanero", 57000, 20)

const producto6 = new Producto(6, "Consomé 500gr", "Bucanero", 8000, 15)

const producto7 = new Producto(7, "Corazones 500gr", "Bucanero", 8000, 10)

const producto8 = new Producto(8, "Alas campesinas libra", "Bucanero", 6000, 60 )

const producto9 = new Producto(9, "Contramuslo Libra", "Bucanero", 7500, 70 )

const producto10 = new Producto(10, "Muslo Libra", "Bucanero", 7500, 55 )

const producto11 = new Producto(11, "Pechuga libra", "Bucanero", 9000, 120 )


