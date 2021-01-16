const navBar = () => {
    const navBar = ``;


    const fragment = document.createDocumentFragment();
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navBar');
    nav.innerHTML = navBar;
    fragment.appendChild(nav);
    return fragment
}

export {navBar};