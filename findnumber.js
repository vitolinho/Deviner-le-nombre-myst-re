// Création du randint()
function randint(min, max) {
    return Math.floor(Math.random()* (max - min + 1) +min);
}

// Générer un nombre entre 1 et 100
const genererNombreMystere = () => {
    const MysteryNumber = randint(1,100);
    return MysteryNumber;
}

let numeroTentative = 1
let nombreBas = 1
let nombreHaut = 100
// Générer notre nombre à trouver
const nombreATrouver = genererNombreMystere()
// La triche(savoir le nombre mystère)
console.log(nombreATrouver)

// Fonction du jeu 
const proposerNombre = () => {
    // Récupération du champs avec le nombre
    const input = document.getElementById('input-nombre')
    
    // Récupération la valeur du champs
    const valeur = input.value
    
    // Vérif que la valeur n'est pas vide
    if(valeur === ''){
        return;
    }

    // Transformation de la valeur texte en nombre
    const nombre = parseInt(valeur, 10)

    // Afficher le texte sur le HTML
    const divProposition = document.createElement('div')
    divProposition.textContent = 'Tentative ' + numeroTentative 

    const container = document.getElementById('container')
    container.insertBefore(divProposition, container.firstChild)

    // Comparaison du nombre mystère et du nombre proposer
    // Le nombre proposer est égal au nombre mystère
    if(nombre === nombreATrouver) {
        // Afficher Bravo

        const divBravo = document.createElement('div')
        divBravo.textContent = "Bravo 👏🎉!! Le chiffre mystère était: " + nombreATrouver

        container.insertBefore(divBravo, container.firstChild)

        const elementMilieu = document.getElementById('milieu')
        elementMilieu.textContent = nombre + '👏👏'

        return;
        // Finir
    } else {
    // Le nombre est faux
    // Si le nombre est plus grand
        if(nombreATrouver > nombre) {
        // Afficher plus grand

        const divPlusgrand = document.createElement('div')
        divPlusgrand.textContent = "C'est plus 👍"

        container.insertBefore(divPlusgrand, container.firstChild)

        // si le nombre est supérieur au plus bas déja trouvé
        if(nombre > nombreBas) {
            const elementBas = document.getElementById('bas')
            elementBas.textContent = nombre + '📈'
            nombreBas = nombre
        }

        } else {
            // Si le nombre est plus petit
            // Afficher plus petit

            const divPluspetit = document.createElement('div')
            divPluspetit.textContent = "C'est moins 👎"

            container.insertBefore(divPluspetit, container.firstChild)

            // si le nombre est supérieur au plus bas déja trouvé
            if(nombre < nombreHaut) {
                const elementHaut = document.getElementById('haut')
                elementHaut.textContent = nombre + '📉'
                nombreHaut = nombre
            }
        }
        // Ajout +1 par rapport aux nb de tentatives
        numeroTentative += 1;
    }
}

// Récupération du boutton
// Lorsqu'il y a un click, effectuer une proposition de nombre
const boutton = document.getElementById('button-proposer')
boutton.addEventListener('click', proposerNombre)