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

// Carrega a página com o cursor no nome presente no currículo.
const focusName = (name) => name.selectionStart = name.selectionEnd = name.value.length;

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

// const infoSkillsArea = {
//     conclusionYear: "";
//     websiteLink: "";
//     workload: "";
//     local: "";
//     predictedCompletion: "";
//     shift: "";
// }

function checkOptions() {
    if (concluded.checked && online.checked) {
        
    }

    if (concluded.checked && presential.checked) {
        alert("B")
    }

    if (inProgress.checked && online.checked) {
        alert("C")
    }

    if (inProgress.checked && presential.checked) {
        alert("D")
    }
}

function createSkillsArea() {

}