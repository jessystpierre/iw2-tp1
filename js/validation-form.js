const form = document.getElementById('form');
const txtNom = document.getElementById('txtNom');
const txtPrenom = document.getElementById('txtPrenom');
const courriel = document.getElementById('courriel');
const commentaire = document.getElementById('commentaire');


const validateForm = () => {

    let noError = true;
    const nameValue = txtNom.value.trim();
    const prenomValue = txtPrenom.value.trim();
    const courrielValue = courriel.value.trim();
    const commentaireValue = commentaire.value.trim();

    if (nameValue === '') {
        setError(txtNom, 'Le nom est requis.');
        noError = false;
    } else {
        setSuccess(txtNom);
    }

    if (prenomValue === '') {
        setError(txtPrenom, 'Le prénom est requis.');
        noError = false;
    } else {
        setSuccess(txtPrenom);
    }

    if (courrielValue === '') {
        setError(courriel, 'Le courriel est requis.');
        noError = false;
    } else if (!isValidEmail(courrielValue)) {
        setError(courriel, 'Le courriel n\'est pas valide.')
        noError = false;
    } else {
        setSuccess(courriel);
    }

    if (commentaireValue === '') {
        setError(commentaire, 'Le commentaire est requis.');
        noError = false;
    } else {
        setSuccess(commentaire);
    }
    return noError
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    return re.test(String(email).toLowerCase());
}