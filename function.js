/*Ejercicio 
Consumir una API publica que les guste, utilizando el metodo fetch.
Luego, una vez obtenidos los datos, vamos a mostrarlos en el navegador(Pueden darle formato de card) */

let url = "https://rickandmortyapi.com/api/character"

async function mostrarData() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.results);
    data.results.forEach(element => {
        document.querySelector("#table").innerHTML +=
            `<tr>
            <td> ${element.name} </td>
            <td> ${element.species} </td>
            <td> ${element.id} </td>
        </tr>`
    });
}

mostrarData();