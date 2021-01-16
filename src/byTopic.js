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
        {
            title: "Ejemplo 2",
            content: "Impulsaremos el apoyo a las empresas que operan Residuos de Aparatos Eléctricos y Electrónicos (RAEE) a nivel nacional con la finalidad de darles soportes para que se amplíen y mantengan dicha actividad.",
            parties: ["APRA", "Partido Morado"],
            alert: false
        }
    ]
}

const byTopic = (data) => {
    const view = `
    <div class="container-proposals">
        <span class="container-proposals-title">${data.proposals[0].title}</span>
        <div class="container-proposals-content">
            ${data.proposals[0].content}
        </div>
        <span class="text-small">Propuestas de:</span>
        <div class="container-proposals-footer">  
            <img class="partie-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_juntos_por_el_Peru.svg/150px-Logo_juntos_por_el_Peru.svg.png" alt="${data.proposals[0].parties[0]}">

            <!-- Sharingbutton Facebook -->
            <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
            <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </div>
            </div>
            </a>

        </div>
    </div>`;
    
    const fragment = document.createDocumentFragment();
    const section = document.createElement('section');
    section.setAttribute('id', 'view-by-topic');
    section.innerHTML = view;
    fragment.appendChild(section);
    return fragment
}

export { byTopic };