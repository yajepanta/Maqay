import { components } from './main.js';
const data = {
    title: "Cambio Climático",
    resume: "El cambio climático debería estar en la agenda de los partidos políticos",
    proposals: [
        {
            title: "Ejemplo 1",
            content: "Impulsaremos el apoyo a las empresas que operan Residuos de Aparatos Eléctricos y Electrónicos (RAEE) a nivel nacional con la finalidad de darles soportes para que se amplíen y mantengan dicha actividad.",
            parties: ["Juntos por el Perú", "Partido Morado"],
            alert: true
        },
       /*  {
            title: "Ejemplo 2",
            content: "Lorem ipsum dolor sit amet consectetur adipiscing elit cras, tellus natoque pellentesque donec montes nunc nec. Himenaeos sed et auctor orci montes pretium cubilia viverra, metus hac ac congue lacus convallis fermentum augue, imperdiet ante ridiculus luctus dignissim faucibus ornare.",
            parties: ["APRA", "Partido Morado"],
            alert: false
        } */
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
    
        default: main.appendChild(components.byTopic(data));
                aside.appendChild(components.navBar());
            break;
    }
}

export default changeRoute;