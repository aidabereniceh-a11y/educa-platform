const resources = [
    {
        title: "Animals Worksheet",
        subject: "Inglés",
        grade: "Primaria",
        file: "resources/vocabulario a1-a2/animals.pdf"
    },
    {
        title: "Lectura Comprensiva",
        subject: "Español",
        grade: "Primaria",
        file: "resources/lectura.pdf"
    },
    {
        title: "Planeación NEM - Semana 1",
        subject: "Español",
        grade: "Primaria",
        file: "resources/planeacion1.pdf"
    }
];

const container = document.getElementById("resources");

function displayResources(data) {
    container.innerHTML = "";
    data.forEach(res => {
        container.innerHTML += `
        <div class="card">
            <h3>${res.title}</h3>
            <p>${res.subject} - ${res.grade}</p>
            <a href="${res.file}" download>
                <button>Descargar</button>
            </a>
        </div>
        `;
    });
}

displayResources(resources);

// Filtros
document.getElementById("search").addEventListener("input", filterResources);
document.getElementById("gradeFilter").addEventListener("change", filterResources);
document.getElementById("subjectFilter").addEventListener("change", filterResources);

function filterResources() {
    const search = document.getElementById("search").value.toLowerCase();
    const grade = document.getElementById("gradeFilter").value;
    const subject = document.getElementById("subjectFilter").value;

    const filtered = resources.filter(res =>
        res.title.toLowerCase().includes(search) &&
        (grade === "" || res.grade === grade) &&
        (subject === "" || res.subject === subject)
    );

    displayResources(filtered);
}
