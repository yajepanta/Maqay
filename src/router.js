import { components } from './main.js';
const data = {
    title: "Cambio Climático",
    resume: "El cambio climático debería estar en la agenda de los partidos políticos",
    proposals: [
        {
            title: "Ejemplo 1",
            content: "Impulsaremos el apoyo a las empresas que operan Residuos de Aparatos Eléctricos y Electrónicos (RAEE) a nivel nacional.",
            parties: ["Juntos por el Perú", "Partido Morado"],
            alert: true,
        },
        {
            title: "Ejemplo 2",
            content: "Lograr la matriz energética está basada en energías renovables. % de la matriz energética del Perú son renovables.",
            parties: ["APRA", "Partido Morado"],
            alert: false
        },
        {
            title: "Ejemplo 2",
            content: "Lograr la matriz energética está basada en energías renovables. % de la matriz energética del Perú son renovables.",
            parties: ["APRA", "Partido Morado"],
            alert: false
        },
        {
            title: "Ejemplo 2",
            content: "Lograr la matriz energética está basada en energías renovables. % de la matriz energética del Perú son renovables.",
            parties: ["APRA", "Partido Morado"],
            alert: false
        }
    ]
}
const main = document.getElementsByTagName('main')[0];
const aside = document.getElementsByTagName('aside')[0];

const changeRoute = (route) => {
    window.location.hash = route;
    switch (route) {
        case '#por-tema':
            main.appendChild(components.byTopic());
            break;
    
        default: (data.proposals.map(proposal => main.appendChild(components.byTopic(proposal))));
                aside.appendChild(components.navBar());
            break;
    }
}

export default changeRoute;