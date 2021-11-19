const infoSkillsArea = {
    institutionName: `<h3 contenteditable="true" spellcheck="false" class="titles-2">Nome da Instituição</h3>`,
    courseName: `<h4 contenteditable="true" spellcheck="false" class="titles-3">Nome do Curso</h4>`,
    conclusionYear: `<li contenteditable="true" spellcheck="false"><b>Ano de conclusão: </b><span>2020</span></li>`,
    websiteLink: `<li contenteditable="true" spellcheck="false"><b>Link do site: </b>www.site.com</li>`,
    workload: `<li contenteditable="true" spellcheck="false"><b>Carga horária: </b>40 horas</li>`,
    local: `<li contenteditable="true" spellcheck="false"><b>Local: </b>Colégio Estadual Exemplo</li>`,
    predictedCompletion: `<li contenteditable="true" spellcheck="false"><b>Conclusão prevista: </b>2024</li>`,
    shift: `<li contenteditable="true" spellcheck="false"><b>Turno: </b>Manhã</li>`,
}

function addAtributtes(id) {
    for (let element of id.children) {
        element.setAttribute("contenteditable", "true");
        element.setAttribute("spellcheck", "false");
    }
}

addAtributtes(personalData);
addAtributtes(contacts);

function checkOptions() {
    let skillsArea;

    if (academicEducation.checked)
        skillsArea = academicEducationArea;

    if (professionalSkills.checked)
        skillsArea = professionalSkillsArea;

    if (concluded.checked && online.checked) createSkillsArea(infoSkillsArea.conclusionYear, infoSkillsArea.websiteLink, infoSkillsArea.workload, skillsArea);
    if (concluded.checked && presential.checked) createSkillsArea(infoSkillsArea.local, infoSkillsArea.conclusionYear, "", skillsArea);
    if (inProgress.checked && online.checked) createSkillsArea(infoSkillsArea.predictedCompletion, infoSkillsArea.websiteLink, "", skillsArea);
    if (inProgress.checked && presential.checked) createSkillsArea(infoSkillsArea.local, infoSkillsArea.shift, infoSkillsArea.predictedCompletion, skillsArea);
}

function createSkillsArea(skillA, skillB, skillC, skillArea) {
    skillArea.innerHTML +=
        `<div>
        ${infoSkillsArea.institutionName}
        ${infoSkillsArea.courseName}
    </div>`;

    skillArea.innerHTML +=
        `<ul>
        ${skillA}
        ${skillB}
        ${skillC}
    </ul>`;
}

const rootCSS = document.querySelector(":root");

const colorsRoot = ["--color-primary", "--color-secondary", "--color-tertiary"];
const colorsStringId = ["primaryColor", "secondaryColor", "tertiaryColor"];
const colorsId = [primaryColor, secondaryColor, tertiaryColor];

function changeColors(id, color) {
    for (let i = 0; i < colorsStringId.length; i++) {
        if (id === colorsStringId[i]) rootCSS.style.setProperty(colorsRoot[i], color);
    }
}

function generatesRandomColor() {
    for (let i = 0; i < colorsRoot.length; i++) {
        const random = Math.floor(Math.random() * 16777215).toString(16);
        const randomColor = "#" + random;

        rootCSS.style.setProperty(colorsRoot[i], randomColor);
        colorsId[i].value = randomColor;
    }
}