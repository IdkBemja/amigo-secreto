// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friendlist = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let regex = /^[a-zA-Z\s]+$/;

    if (!input.value.trim()) {
        return alert("Debes añadir un amigo.");
    }

    if (!regex.test(input.value)) {
        return alert("El nombre del amigo solo puede contener letras y espacios.");
    }

    if (friendlist.includes(input.value)) {
        return alert("¡Ya existe un amigo con este nombre!");
    }

    friendlist.push(input.value);
    console.log(`Se ha añadido a la lista el amigo: ${input.value}`);

    var lista_amigos = document.getElementById('listaAmigos');
    
    var nuevoAmigo = document.createElement("li");
    nuevoAmigo.textContent = input.value;

    lista_amigos.appendChild(nuevoAmigo);

    input.value = '';
}

function FriendListClear(){
    friendlist = [];
    console.log("¡Se ha restablecido la lista de amigos!.");
}

function sortearAmigo() {

    if (friendlist.length <= 1) {
        return alert("¡Debes Añadir al menos 2 amigos para sortear!.");
    }

    let IndiceAmigoElegido = Math.floor(Math.random() * friendlist.length);
    let AmigoElegido = friendlist[IndiceAmigoElegido];
    console.log(`Amigo Elegido: ${AmigoElegido}`);

    var lista_amigos = document.getElementById('listaAmigos');
    lista_amigos.innerHTML = '';

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo elegido es: ${AmigoElegido}`;
    FriendListClear();

}