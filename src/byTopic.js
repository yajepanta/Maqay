const byTopic = (proposal) => {
    console.log(proposal);
    const view = `
    <div class="container-proposals">
        <div>
            <span class="container-proposals-title">${proposal.title.rendered}</span>
            <div class="container-proposals-content">
                ${proposal.content.rendered}
            </div>
            <span class="text-small">Propuestas de:</span>
            <div class="container-proposals-footer">  
                <img class="partie-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_juntos_por_el_Peru.svg/150px-Logo_juntos_por_el_Peru.svg.png" alt="">

                <!-- Sharingbutton Facebook -->
                <a class="resp-sharing-button__link" href="https://facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank" rel="noopener" aria-label="">
                <div class="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--small"><div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                    </div>
                </div>
                </a>

            </div>
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