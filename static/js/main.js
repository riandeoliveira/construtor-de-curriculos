// const userInfo = {
//     fullName: "",
//     textarea: "",
//     personalData: {
//         birthDate: "",
//         age: "",
//         nationality: "",
//         address: "",
//         CEP: "",
//         city: "",
//     },
//     contacts: {
//         emailAddress: "",
//         phoneNumber: "",
//         gitHub: "",
//         certificates: "",
//         portfolio: "",
//         linkedin: ""
//     },
//     objectives: "",
//     languages: {

//     },
//     skills: {

//     },
//     academicFormation: {

//     },
//     professionalSkills: {

//     }
// }

// Permite a quebra de linha em alguns elementos textarea.
function formatTextarea(textarea) {
    if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.rows += 1;
    }
}

const elements = document.getElementsByClassName("edit-lists");

// Impede a quebra de linha em alguns elementos textarea.
for (let i = 0; i <= elements.length; i++) {
    elements[i].addEventListener("keypress", keyEvent => {
        if (keyEvent.which === 13) {
            keyEvent.preventDefault();
        }
    });
}

function checkOptions() {

}

function createSkillsArea() {

}