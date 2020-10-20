//create map
const map = L.map('mapid').setView([-27.2063854,-49.6384964], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],

})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon 
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map);
})


// add photo field
function addPhotoField(){
    // get the photos container
    const container = document.querySelector('#images')
    
    // catch the container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')

    // create a clone about the last photo was add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //verify if the field is empty
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return 
    }
    
    // clean the field
    input.value = ""

    // add a clone to the images container
    container.appendChild(newFieldContainer)
}

function deleteField(event) { 
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2){
        //clean the field value
        span.parentNode.children[0].value = ""
        return 
    }

    // delete field
    span.parentNode.remove();
}

// select sim or nao
function toggleSelect(event) {
    //remove the class .active from buttons
    document.querySelectorAll('.button-select button')
    .forEach(function(button){
        button.classList.remove('active')
    })
    // get the button clicked
    const button = event.currentTarget
    button.classList.add('active')

    // update my input hidden with the value was selected
    const input = document.querySelector('[name="open_on_weekend]')
    
    
    // verify if it is yes or no
    input.value = button.dataset.value 
    

    
}

function validate(event){
    const needsLatAndLng = false; 
    if(needsLatAndLng){
    event.preventDefault()
    alert('Selecione um ponto no mapa')
    } 
}