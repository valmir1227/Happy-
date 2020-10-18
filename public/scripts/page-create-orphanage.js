//Creat map
const map = L.map('mapid').setView([-23.446877, -46.9289429], 13);

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
    .addTo(map);


//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
})

let marker;

// Create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name=lat]").value = lat
    document.querySelector("[name=lng]").value = lng

    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})


// Adicionar o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector("#images")

    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll(".new-upload")

    // Realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio, se sim, não adiconar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // Limpar o campo antes de adiconar ao container de imagens
    input.value = ""

    // Adicionar o clone ao caontainer de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if (fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo 
    span.parentNode.remove()

}

// Select yes or no
function toggleSelect(event) {

    // Retirar a class .active
    document.querySelectorAll(".button-select button")
        .forEach(function (button) {
            button.classList.remove("active")
        })

    // Colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add("active")

    // Atualizar meu input hidden com valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

function validate(event) {
    //Validar se lat e lng estão preenchidos
    const needsLatAndLng = true
    if (needsLatAndLng == false) {
        event.preventDefault()
        alert("Selecione um ponto no mapa!")
    }
}
