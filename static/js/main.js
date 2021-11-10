// const userInfo = {
//     fullName: "",
//     aboutUser: "",
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

// function formatBirthDate() {
//     if (birthDate.value.length == 2 || birthDate.value.length == 5) {
//         birthDate.value += "/";
//     }
// }

const formatBirthDate = () => birthDate.value.length === 2 || birthDate.value.length === 5 ? birthDate.value += "/" : "";

const formatAge = () => age.value.length === 2 ? age.value += " anos" : "";

const formatCEP = () => cep.value.length === 5 ? cep.value += "-" : "";

const formatPhoneNumber = () => phoneNumber.value.length === 1 ? phoneNumber.value += "()" : "";