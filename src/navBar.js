/*   <button class="nav-button" name="">Residuos sólidos</button>
    <button class="nav-button" name="">Gestión del agua</button>
    <button class="nav-button" name="">Deforestación</button>
    <button class="nav-button" name="">Tala y minería ilegal</button>
    <button class="nav-button" name="">Conflictos socioambientales</button> 
    
      <input type="checkbox" class"check-navBara">
    <label for="check-navBara">Residuos sólidos</label>

    <input type="checkbox" class="check-navBar">
    <label for="check-navBar">Gestión del agua</label>

    <input type="checkbox" class="check-navBar">
    <label for="check-navBar">Deforestación</label>

    <input type="checkbox" class="check-navBar">
    <label for="check-navBar">Tala y minería ilegal</label>

    <input type="checkbox" class="check-navBar">
    <label for="check-navBar">Conflictos socioambientales</label>*/
const navBar = () => {
    const navBar = `

    <span>Cambiar de tema ambiental</span>
    <button class="nav-button" name="">Residuos sólidos</button>
    <button class="nav-button" name="">Gestión del agua</button>
    <button class="nav-button" name="">Deforestación</button>
    <button class="nav-button" name="">Tala y minería ilegal</button>
    <button class="nav-button" name="">Conflictos socioambientales</button> 

    `;

    const fragment = document.createDocumentFragment();
    const nav = document.createElement('nav');
    nav.setAttribute('id', 'navBar');
    nav.innerHTML = navBar;
    fragment.appendChild(nav);
    return fragment
}

export {navBar};