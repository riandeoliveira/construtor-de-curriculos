// Armazena os códigos HTML correspondentes de cada opção selecionada para criá-los quando necessário.
const infoSkillsArea = {
    institutionName: `<textarea rows="1" class="titles-2" spellcheck="false" oninput="formatTextarea(this)">Nome da Instituição</textarea>`,

    courseName: `<textarea rows="1" class="titles-3" spellcheck="false" oninput="formatTextarea(this)">Nome do Curso</textarea>`,

    conclusionYear:
        `<li>
    <b>Ano de conclusão:</b>
    <textarea class="edit-lists" maxlength="4" placeholder="2020" spellcheck="false" title="Digite o ano de conclusão do seu curso" style="width: 150px;"></textarea>
</li>`,

    websiteLink:
        `<li>
    <b>Link do Site:</b>
    <textarea class="edit-lists" maxlength="26" placeholder="www.site.com" spellcheck="false" title="Digite o link do site de onde você fez seu curso" style="width: 185px;"></textarea>
</li>`,

    workload:
        `<li>
    <b>Carga horária:</b>
    <textarea class="edit-lists" maxlength="10" placeholder="40 horas" spellcheck="false" title="Digite a carga horária do seu curso" style="width: 175px;"></textarea>
</li>`,

    local:
        `<li>
    <b>Local:</b>
    <textarea class="edit-lists" maxlength="31" placeholder="Colégio Estadual Exemplo" spellcheck="false" title="Digite o local onde você fez o seu curso" style="width: 278px;"></textarea>
</li>`,

    predictedCompletion: `<li>
    <b>Conclusão prevista:</b>
    <textarea class="edit-lists" maxlength="4" placeholder="2024" spellcheck="false" title="Digite em que ano o seu curso irá ser finalizado" style="width: 140px;"></textarea>
</li>`,

    shift: `<li>
    <b>Turno:</b>
    <textarea class="edit-lists" maxlength="5" placeholder="Manhã" spellcheck="false" title="Digite o turno do seu curso" style="width: 276px;"></textarea>
</li>`
}

// Verifica as opções selecionadas e chama uma função para montar o HTML.
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

// Monta o HTML de acordo com os parâmetros passados.
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

function changeColors(id, color) {
    const rootCSS = document.querySelector(":root");

    if (id === "primaryColor") rootCSS.style.setProperty("--color-primary", color);
    if (id === "quaternaryColor") rootCSS.style.setProperty("--color-quaternary", color);
    if (id === "secondaryColor") rootCSS.style.setProperty("--color-secondary", color);
    if (id === "tertiaryColor") rootCSS.style.setProperty("--color-tertiary", color);
}

// Carrega a página com o cursor no nome presente no currículo.
const focusName = (name) => name.selectionStart = name.selectionEnd = name.value.length;

// Impede o uso da tecla enter no nome.
userName.addEventListener("keypress", keyEvent => {
    if (keyEvent.which === 13) {
        keyEvent.preventDefault();
    }
});

// Permite a quebra de linha em alguns elementos textarea.
function formatTextarea(textarea) {
    if (textarea.scrollHeight > textarea.offsetHeight) {
        textarea.rows += 1;
    }
}

const elements = document.getElementsByClassName("edit-lists");

// Impede a quebra de linha em alguns elementos textarea.
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("keypress", keyEvent => {
        if (keyEvent.which === 13) {
            keyEvent.preventDefault();
        }
    });
}