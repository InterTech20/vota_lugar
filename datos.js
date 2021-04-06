"use strict";

const datos_json = {
    "databd": [
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Chachapoyas/Chachapoyas",
            "local": "",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": "Rs. Paseo Prado"
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Bagua/Bagua",
            "local": "",
            "direccion": "PR Combate De Angamos 637",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Bongará/Jumbilla",
            "local": "",
            "direccion": "Lt 16MZ B Urb Virgen del Pilar",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Condorcanqui/Santa María de Nieva",
            "local": "",
            "direccion": "Calle Huascar 286",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Luya/Lámud",
            "local": "",
            "direccion": "Jr Belen 698 Cajamarca",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Amazonas/Rodríguez de Mendoza/Mendoza",
            "local": "",
            "direccion": "Av Abancay 978",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Amazonas/Utcubamba/Bagua Grande",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Chimbote/Santa",
            "local": "",
            "direccion": "Av Homori Delagado 186",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Huaraz/Huaraz",
            "local": "",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Casma/Casma",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Huarmey/Huarmey",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Caraz/Huaylas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Carhuaz/Carhuaz",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Yungay/Yungay",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Áncash/Pomabamba/Pomabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Áncash/Huari/Huari",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Abancay/Abancay",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/Andahuaylas/Andahuaylas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Antabamba/Antabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/Aymaraes/Chalhuanca",
            "local": "",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Cotabambas/Tambobamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Apurímac/ Chincheros / Chincheros",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Apurímac/Grau/Chuquibambilla",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Arequipa/Arequipa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Camaná/Camaná",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Caravelí/Caravelí",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Castilla/Aplao",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Caylloma/Chivay",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/Condesuyos/Chuquibamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Arequipa/Islay/Mollendo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Arequipa/La Unión/Cotahuasi",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Huamanga/Ayacucho",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Cangallo/Cangallo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Huanca Sancos/Huanca Sancos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Huanta/Huanta ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/La Mar/San Miguel",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Lucanas/Puquio ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Parinacochas/Coracora",
            "local": "",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Páucar del Sara/Sara",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Sucre/Querobamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ayacucho/Víctor Fajardo/Huancapi",
            "local": "",
            "direccion": "ND Corbeta La Unión Mz B Lt.4",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ayacucho/Vilcashuamán/Vilcashuamán",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Cajamarca/Cajamarca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Celendín/Celendín",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Chota/Chota",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Contumazá/Contumazá",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Cutervo/Cutervo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/Hualgayoc/Bambamarca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Jaén/Jaén",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/San Ignacio/San Ignacio de la Frontera",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/San Marcos/San Marcos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/San Miguel/San Miguel de Pallaques ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cajamarca/San Pablo/San Pablo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cajamarca/Santa Cruz/Santa Cruz de Succhabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/Callao ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Bellavista",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/Carmen de La Legua-Reynoso",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/La Perla ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Callao/Callao/La Punta",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Ventanilla",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Callao/Callao/Mi Perú",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Cuzco/Cuzco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Acomayo/Acomayo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Anta/Anta",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Calca/Calca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Canas/Yanaoca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Canchis/Sicuani",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Chumbivilcas/Santo Tomás",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Espinar/Yauri",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/La Convención/Quillabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Paruro/Paruro",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Paucartambo/Paucartambo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Cuzco/Quispicanchi/Urcos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Cuzco/Urubamba/Urubamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Huancavelica/Huancavelica",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Acobamba/Acobamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Angaraes/Lircay ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Castrovirreyna/Castrovirreyna",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Churcampa/Churcampa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Huaytará/Huaytará",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huancavelica/Tayacaja/Pampas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huancavelica/Tayacaja/Pampas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Huánuco/Huánuco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Ambo/Ambo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Dos de Mayo/La Unión",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Huacaybamba/Huacaybamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Huamalíes/Llata",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Leoncio Prado/Tingo María",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Marañón/Huacrachuco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Pachitea/Panao",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Puerto Inca/Puerto Inca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Huánuco/Lauricocha/Jesús",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Huánuco/Yarowilca/Chavinillo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Ica/Ica",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ica/Chincha/Chincha Alta",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Nazca/Nazca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ica/Palpa/Palpa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ica/Pisco/Pisco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Huancayo/Huancayo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Concepción/Concepción",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Chanchamayo/La Merced",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Jauja/Jauja",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Junín/Junín",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Junín/Tarma/Tarma",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Yauli/La Oroya",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Junín/Chupaca/Chupaca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Trujillo/Trujillo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Ascope/Ascope",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Bolívar/Bolívar",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Chepén/Chepén",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Julcán/Julcán",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Otuzco/Otuzco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Pacasmayo/San Pedro de Lloc",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Pataz/Tayabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Sánchez Carrión/Huamachuco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Santiago de Chuco/Santiago de Chuco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "La Libertad/Gran Chimú/Cascas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "La Libertad/Virú/Virú",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lambayeque/Chiclayo/Chiclayo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lambayeque/Ferreñafe/Ferreñafe",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lambayeque/Lambayeque/Lambayeque",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Lima/Lima",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Barranca/Barranca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Cajatambo/Cajatambo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Canta/Canta ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Cañete/Cañete",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Huaral/Huaral ",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Huarochirí/Matucana",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Huaura/Huacho",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Lima/Oyón/Oyón",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Lima/Yauyos/Yauyos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Maynas/Iquitos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Alto Amazonas/Yurimaguas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Loreto/Nauta",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Mariscal Ramón Castilla/Caballococha",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Requena/Requena",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Ucayali/Contamana",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Loreto/Datem del Marañón/San Lorenzo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Loreto/Putumayo/San Antonio del Estrecho",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Madre de Dios/Tambopata/Puerto Maldonado",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Madre de Dios/Manu/Salvación",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Madre de Dios/Tahuamanu/Iñapari",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Moquegua/Moquegua/Ilo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Moquegua/Moquegua/General Sánchez Cerro",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Moquegua/Moquegua/Mariscal Nieto",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Pasco/Pasco/Cerro de Pasco",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Pasco/Daniel A. Carrión/Yanahuanca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Pasco/Oxapampa/Oxapampa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Piura/San Miguel de Piura",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Ayabaca/Ayabaca",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Huancabamba/Huancabamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Morropón/Chulucanas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Paita/Paita",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Sullana/Sullana",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Piura/Talara/Talara",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Piura/Sechura/Sechura",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Puno",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Azángaro",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Carabaya",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Chucuito",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/El Collao",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Huancané",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Lampa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Melgar",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Moho",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/Sandia",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/San Antonio de Putina",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Puno/Puno/San Román",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Puno/Puno/Yunguyo",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Moyobamba/Moyobamba",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Bellavista/Bellavista",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/El Dorado/San José de Sisa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Huallaga/Saposoa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Lamas/Lamas",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Mariscal Cáceres/Juanjuí",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/Picota/Picota",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Rioja/Rioja",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "San Martin/San Martín/Tarapoto",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "San Martin/Tocache/Tocache",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tacna/Tacna/Candarave",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tacna/Tacna/Jorge Basadre",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tacna/Tacna/Tacna",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tacna/Tacna/Tarata",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tumbes/Tumbes/Tumbes",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Tumbes/Zarumilla/Zarumilla",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Tumbes/Contralmirante Villar/Zorritos",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ucayali/Portillo/Pucallpa",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ucayali/Atalaya/Atalaya",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "Es miembro de mesa",
            "region": "Ucayali/Padre Abad/Aguaytía",
            "local": "",
            "direccion": "",
            "referencia": ""
        },
        {
            "type": "No es miembro de mesa",
            "region": "Ucayali/Purús/Puerto Esperanza",
            "local": "",
            "direccion": "",
            "referencia": ""
        }
    ]
}