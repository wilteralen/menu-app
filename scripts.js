const SHEET_ID = "1SY8CrCyX_yNpdURlXxWup_pQWJ59X9vnOGlN0yE2aow";

const ACCESS_TOKEN =
  "ya29.A0AVA9y1s92zHK1z5VDfnNOniFq9l-O7zXjcnqjy41IY_SpXw8oI-IBbj8AoD23_n5zZM16R77VtgMQpdD3ypsbIuwzDgWH_l_ZbLNeOtTKX5iHCq2cuh7V-gPC09fV-hAZlJxXUk3Zs2CxGTQuohqWfn6Urj6aCgYKATASATASFQE65dr8y7vf7mUfgGE5UgzcQD8URA0163";

fetch(
  // Obtenemos los datos de la planilla, de la hoja hojaMenu, columnas A y B desde la segunda fila
  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaMenu!A2:B`,
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  }
//esperamos el response
).then(function (response) {
    //esperamos el json del response para poder utilizarlo
    response.json().then(function (data) {
      const values = data.values;
  
      // Obtenemos el elemento del dom
      const lista = document.getElementById("lista-menu");
  
      for (var i = 0; i < values.length; i++) {
  
          // Div que va a contener los datos del producto
          const producto = document.createElement("div");
          producto.className =  "menu-item";
  
          // El número de producto
          const itemIndice = document.createElement("span");
          itemIndice.className = "item indice";
          itemIndice.innerHTML = i + 1;
  
          // Nombre del producto
          const itemProducto = document.createElement("span");
          itemProducto.className = "item producto";
          itemProducto.innerHTML = values[i][0]; 
  
          // Precio
          const itemPrecio = document.createElement("span");
          itemPrecio.className = "item precio";
          itemPrecio.innerHTML = values[i][1];
  
          // Div que contiene el número de producto (itemIndex)
          const divIndice = document.createElement("div");
          divIndice.className = "index-item";
          divIndice.appendChild(itemIndice);
  
          // Agregamos todos los elementos al div de producto
          producto.appendChild(divIndice);
          producto.appendChild(itemProducto);
          producto.appendChild(itemPrecio);
  
          // Agregamos el producto a la lista
          lista.appendChild(producto);
       }
    });
  });
  