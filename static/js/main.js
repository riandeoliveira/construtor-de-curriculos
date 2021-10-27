// Declarações de variáveis com os valores para utilizar.

// Dados Pessoais.

const nome = document.querySelector("input#nome");
const data = document.querySelector("input#data");
const idade = document.querySelector("input#idade");
const nacionalidade = document.querySelector("input#nacionalidade");
const endereco = document.querySelector("input#endereco");
const CEP = document.querySelector("input#CEP");
const cidade = document.querySelector("input#cidade");

// Contatos.

const email = document.querySelector("input#email");
const telefone = document.querySelector("input#telefone");
const github = document.querySelector("input#github");
const certificados = document.querySelector("input#certificados");
const portfolio = document.querySelector("input#portfolio");
const linkedin = document.querySelector("input#linkedin");

// Descrições Pessoais.

const descricao = document.querySelector("textarea#descricao");
const objetivos = document.querySelector("textarea#objetivos");

// Idiomas.

const areaIdiomas = document.querySelector("div#areaIdiomas");

// Competências.

const areaCompetencias = document.querySelector("div#areaCompetencias");

// Formações e Habilidades.

const addForm = document.querySelector("div#addForm");
const opcaoInfo = document.getElementsByClassName("opcaoInfo");
const instituicao = document.querySelector("input#instituicao");
const curso = document.querySelector("input#curso");

// Declarações de variáveis com os resultados do formulário.

// Dados Pessoais.

const docNome = document.querySelector("h1#docNome");
const docData = document.querySelector("span#docData");
const docIdade = document.querySelector("span#docIdade");
const docNacionalidade = document.querySelector("span#docNacionalidade");
const docEndereco = document.querySelector("span#docEndereco");
const docCEP = document.querySelector("span#docCEP");
const docCidade = document.querySelector("span#docCidade");

// Contatos.

const docEmail = document.querySelector("span#docEmail");
const docTelefone = document.querySelector("span#docTelefone");
const docGitHub = document.querySelector("span#docGitHub");
const docCertificados = document.querySelector("span#docCertificados");
const docPortfolio = document.querySelector("span#docPortfolio");
const docLinkedIn = document.querySelector("span#docLinkedIn");

// Descrições Pessoais.

const docDescricao = document.querySelector("p#docDescricao");
const docObjetivos = document.querySelector("p#docObjetivos");

// Idiomas.

const docIdiomas = document.querySelector("p#docIdiomas");

// Competências.

const docCompetencias = document.querySelector("ul#docCompetencias");

// Formações e Habilidades

const docFormacaoAcademica = document.querySelector("div#docFormacaoAcademica");
const docHabilidadesProfissionais = document.querySelector("div#docHabilidadesProfissionais");

// Área de funções para adicionar no currículo os valores inseridos no formulário.

const adicionaNome = () => docNome.textContent = nome.value;

// Pega a data inserida e a formata para o padrão utilizado no Brasil.
const adicionaData = () => {
    const date = new Date(data.value);
    const dataFormatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    docData.textContent = dataFormatada;
}

const adicionaIdade = () => docIdade.textContent = `${idade.value} anos`;

const adicionaNacionalidade = () => docNacionalidade.textContent = nacionalidade.value;

const adicionaEndereco = () => docEndereco.textContent = endereco.value;

const adicionaCEP = () => docCEP.textContent = CEP.value;

const adicionaCidade = () => docCidade.textContent = cidade.value;

const adicionaEmail = () => docEmail.textContent = email.value;

const adicionaTelefone = () => docTelefone.textContent = telefone.value;

const adicionaGitHub = () => docGitHub.textContent = github.value;

const adicionaCertificados = () => docCertificados.textContent = certificados.value;

const adicionaPortfolio = () => docPortfolio.textContent = portfolio.value;

const adicionaLinkedIn = () => docLinkedIn.textContent = linkedin.value;

const adicionaDescricao = () => docDescricao.textContent = descricao.value;

const adicionaObjetivos = () => docObjetivos.textContent = objetivos.value;

// Pega os idiomas inseridos no input e os adiciona no formulário e no currículo.
const adicionaIdioma = () => {
    const idioma = document.querySelector("input#idioma");

    areaIdiomas.innerHTML +=
        `<div>
                <span class="span-estilo">${idioma.value}</span>
            </div>`

    docIdiomas.innerHTML += `<span>${idioma.value}</span><br>`;
}

// Pega as competências inseridas no input e as adiciona no formulário e no currículo.
const adicionaCompetencia = () => {
    const competencia = document.querySelector("input#competencia");

    areaCompetencias.innerHTML +=
        `<div>
                <span class="span-estilo">${competencia.value}</span>
            </div>`;

    docCompetencias.innerHTML += `<li>- ${competencia.value}</li>`;
}

// Verifica as formações e habilidades inseridas no input e chama uma das funções abaixo.
const verificaFormaHabil = () => {
    const opcao = document.getElementsByClassName("opcao");
    if (opcao[0].checked && opcao[2].checked) {
        addForm_1();
    }

    if (opcao[0].checked && opcao[3].checked) {
        addForm_2();
    }

    if (opcao[1].checked && opcao[2].checked) {
        addForm_3();
    }

    if (opcao[1].checked && opcao[3].checked) {
        addForm_4();
    }
}

// As quatro funções abaixo (addForm) criam os inputs correspondentes para o status e modalidade de um curso que o usuário selecionar.

const addForm_1 = () => {
    const anoDeConclusao = document.querySelector("input#anoDeConclusao");
    const linkDoSite = document.querySelector("input#linkDoSite");
    const cargaHoraria = document.querySelector("input#cargaHoraria");

    addForm.innerHTML =
        `<div>
                    <label for="anoDeConclusao">Ano de conclusão:</label>
                    <input type="number" class="input-estilo" id="anoDeConclusao" placeholder="ex: 2020">
                </div>
                <div>
                    <label for="linkDoSite">Link do Site:</label>
                    <input type="url" class="input-estilo" id="linkDoSite" placeholder="ex: plataformaexemplo.com">
                </div>
                <div>
                    <label for="cargaHoraria">Carga horária:</label>
                    <input type="number" class="input-estilo" id="cargaHoraria" placeholder="ex: 40">
                </div>
                <button onclick="addInfo_1()">Adicionar informações</button>`;
}

const addForm_2 = () => {
    const local = document.querySelector("input#local");
    const anoDeConclusao = document.querySelector("input#anoDeConclusao");

    addForm.innerHTML =
        `<div>
                    <label for="local">Local:</label>
                    <input type="text" class="input-estilo" id="local" placeholder="ex: Cachoeirinha/RS">
                </div>
                <div>
                    <label for="anoDeConclusao">Ano de conclusão:</label>
                    <input type="number" class="input-estilo" id="anoDeConclusao" placeholder="ex: 2020">
                </div>
                <button onclick="addInfo_2()">Adicionar informações</button>`;
}

const addForm_3 = () => {
    const conclusaoPrevista = document.querySelector("input#conclusaoPrevista");
    const linkDoSite = document.querySelector("input#linkDoSite");

    addForm.innerHTML =
        `<div>
                    <label for="conclusaoPrevista">Conclusão prevista:</label>
                    <input type="number" class="input-estilo" id="conclusaoPrevista" placeholder="ex: 2024">
                </div>
                <div>
                    <label for="linkDoSite">Link do Site:</label>
                    <input type="url" class="input-estilo" id="linkDoSite" placeholder="ex: plataformaexemplo.com">
                </div>
                <button onclick="addInfo_3()">Adicionar informações</button>`;
}

const addForm_4 = () => {
    const local = document.querySelector("input#local");
    const turno = document.querySelector("input#turno");
    const conclusaoPrevista = document.querySelector("input#conclusaoPrevista");

    addForm.innerHTML =
        `<div>
                    <label for="local">Local:</label>
                    <input type="text" class="input-estilo" id="local" placeholder="ex: Cachoeirinha/RS">
                </div>
                <div>
                    <label for="turno">Turno:</label>
                    <input type="texto" class="input-estilo" id="turno" placeholder="ex: Noite">
                </div>
                <div>
                    <label for="conclusaoPrevista">Conclusão prevista:</label>
                    <input type="number" class="input-estilo" id="conclusaoPrevista" placeholder="ex: 2024">
                </div>
                <button onclick="addInfo_4()">Adicionar informações</button>`;
}

// As quatro funções abaixo (addInfo) adicionam no currículo os dados inseridos pelo usuário em cada input correspondente, vindo das quatro funções acima (addForm).

const addInfo_1 = () => {
    let addInfo;
    if (opcaoInfo[0].checked)
        addInfo = docFormacaoAcademica;

    if (opcaoInfo[1].checked)
        addInfo = docHabilidadesProfissionais;

    addInfo.innerHTML +=
        `<div>
                <h3 class="titulos-2">${instituicao.value}</h3>
                <h4 class="titulos-3">${curso.value}</h4>
                <p>
                    <span>
                        <b>Ano de conclusão:</b>
                        <span>${anoDeConclusao.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Site:</b>
                        <span>${linkDoSite.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Carga horária:</b>
                        <span>${cargaHoraria.value} horas</span>
                    </span>
                </p>
            </div>`;
}

const addInfo_2 = () => {
    let addInfo;
    if (opcaoInfo[0].checked)
        addInfo = docFormacaoAcademica;

    if (opcaoInfo[1].checked)
        addInfo = docHabilidadesProfissionais;

    addInfo.innerHTML +=
        `<div>
                <h3 class="titulos-2">${instituicao.value}</h3>
                <h4 class="titulos-3">${curso.value}</h4>
                <p>
                    <span>
                        <b>Local:</b>
                        <span>${local.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Ano de conclusão:</b>
                        <span>${anoDeConclusao.value}</span>
                    </span>
                </p>
            </div>`;
}

const addInfo_3 = () => {
    let addInfo;
    if (opcaoInfo[0].checked)
        addInfo = docFormacaoAcademica;

    if (opcaoInfo[1].checked)
        addInfo = docHabilidadesProfissionais;

    addInfo.innerHTML +=
        `<div>
                <h3 class="titulos-2">${instituicao.value}</h3>
                <h4 class="titulos-3">${curso.value}</h4>
                <p>
                    <span>
                        <b>Conclusão prevista:</b>
                        <span>${conclusaoPrevista.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Site:</b>
                        <span>${linkDoSite.value}</span>
                    </span>
                </p>
            </div>`;
}

const addInfo_4 = () => {
    let addInfo;
    if (opcaoInfo[0].checked)
        addInfo = docFormacaoAcademica;

    if (opcaoInfo[1].checked)
        addInfo = docHabilidadesProfissionais;

    addInfo.innerHTML +=
        `<div>
                <h3 class="titulos-2">${instituicao.value}</h3>
                <h4 class="titulos-3">${curso.value}</h4>
                <p>
                    <span>
                        <b>Local:</b>
                        <span>${local.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Turno:</b>
                        <span>${turno.value}</span>
                    </span>
                    <br>
                    <span>
                        <b>Conclusão prevista:</b>
                        <span>${conclusaoPrevista.value}</span>
                    </span>
                </p>
            </div>`;
}