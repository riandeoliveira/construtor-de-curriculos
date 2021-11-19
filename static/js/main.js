// const infoSkillsArea = {
//     institutionName: `<textarea rows="1" class="titles-2" spellcheck="false" oninput="formatTextarea(this)">Nome da Instituição</textarea>`,

//     courseName: `<textarea rows="1" class="titles-3" spellcheck="false" oninput="formatTextarea(this)">Nome do Curso</textarea>`,

//     conclusionYear:
//         `<li>
//     <b>Ano de conclusão:</b>
//     <textarea class="edit-lists" maxlength="4" placeholder="2020" spellcheck="false" title="Digite o ano de conclusão do seu curso" style="width: 150px;"></textarea>
// </li>`,

//     websiteLink:
//         `<li>
//     <b>Link do Site:</b>
//     <textarea class="edit-lists" maxlength="26" placeholder="www.site.com" spellcheck="false" title="Digite o link do site de onde você fez seu curso" style="width: 185px;"></textarea>
// </li>`,

//     workload:
//         `<li>
//     <b>Carga horária:</b>
//     <textarea class="edit-lists" maxlength="10" placeholder="40 horas" spellcheck="false" title="Digite a carga horária do seu curso" style="width: 175px;"></textarea>
// </li>`,

//     local:
//         `<li>
//     <b>Local:</b>
//     <textarea class="edit-lists" maxlength="31" placeholder="Colégio Estadual Exemplo" spellcheck="false" title="Digite o local onde você fez o seu curso" style="width: 278px;"></textarea>
// </li>`,

//     predictedCompletion: `<li>
//     <b>Conclusão prevista:</b>
//     <textarea class="edit-lists" maxlength="4" placeholder="2024" spellcheck="false" title="Digite em que ano o seu curso irá ser finalizado" style="width: 140px;"></textarea>
// </li>`,

//     shift: `<li>
//     <b>Turno:</b>
//     <textarea class="edit-lists" maxlength="5" placeholder="Manhã" spellcheck="false" title="Digite o turno do seu curso" style="width: 276px;"></textarea>
// </li>`
// }

// function checkOptions() {
//     let skillsArea;

//     if (academicEducation.checked)
//         skillsArea = academicEducationArea;

//     if (professionalSkills.checked)
//         skillsArea = professionalSkillsArea;

//     if (concluded.checked && online.checked) createSkillsArea(infoSkillsArea.conclusionYear, infoSkillsArea.websiteLink, infoSkillsArea.workload, skillsArea);
//     if (concluded.checked && presential.checked) createSkillsArea(infoSkillsArea.local, infoSkillsArea.conclusionYear, "", skillsArea);
//     if (inProgress.checked && online.checked) createSkillsArea(infoSkillsArea.predictedCompletion, infoSkillsArea.websiteLink, "", skillsArea);
//     if (inProgress.checked && presential.checked) createSkillsArea(infoSkillsArea.local, infoSkillsArea.shift, infoSkillsArea.predictedCompletion, skillsArea);
// }

// function createSkillsArea(skillA, skillB, skillC, skillArea) {
//     skillArea.innerHTML +=
//         `<div>
//         ${infoSkillsArea.institutionName}
//         ${infoSkillsArea.courseName}
//     </div>`;

//     skillArea.innerHTML +=
//         `<ul>
//         ${skillA}
//         ${skillB}
//         ${skillC}
//     </ul>`;
// }

// const rootCSS = document.querySelector(":root");

// const colorsRoot = ["--color-primary", "--color-secondary", "--color-tertiary"];
// const colorsStringId = ["primaryColor", "secondaryColor", "tertiaryColor"];
// const colorsId = [primaryColor, secondaryColor, tertiaryColor];

// function changeColors(id, color) {
//     for (let i = 0; i < colorsStringId.length; i++) {
//         if (id === colorsStringId[i]) rootCSS.style.setProperty(colorsRoot[i], color);
//     }
// }

// function generatesRandomColor() {
//     for (let i = 0; i < colorsRoot.length; i++) {
//         const random = Math.floor(Math.random() * 16777215).toString(16);
//         const randomColor = "#" + random;

//         rootCSS.style.setProperty(colorsRoot[i], randomColor);
//         colorsId[i].value = randomColor;
//     }
// }

// userName.addEventListener("keypress", keyEvent => {
//     if (keyEvent.which === 13) {
//         keyEvent.preventDefault();
//     }
// });

// function formatTextarea(textarea) {
//     if (textarea.scrollHeight > textarea.offsetHeight) {
//         textarea.rows += 1;
//     }
// }

// const elements = document.getElementsByClassName("edit-lists");

// for (let i = 0; i < elements.length; i++) {
//     elements[i].addEventListener("keypress", keyEvent => {
//         if (keyEvent.which === 13) {
//             keyEvent.preventDefault();
//         }
//     });
// }