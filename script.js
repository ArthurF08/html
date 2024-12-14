const form = document.getElementById('cep-form')
const cepInput = document.getElementById('cep-input')
const resultado = document.getElementById('resultado')

form.addEventListener('submit', (event) => {


    event.preventDefault();

    const cep = cepInput.value.trim();

    resultado.innerHTML = '<p>Buscando...</p>';
    fetch(`https://viacep.com.br/ws/${cep}/json/`)

        .then(Response => {

            if (!Response.ok) {
                throw new Error("erro ao buscar o cep")
            }
            return Response.json();
        })
        .then(data => {
            if (data.erro) {
                resultado.innerHTML = '<p style="color: red;">CEP nao encontrado'; '</p>'
            }

            resultado.innerHTML = `
    <p><strong>CEP:</strong> ${data.cep}</p>
    <p><strong>CEP:</strong> ${data.logradouro}</p>
    <p><strong>CEP:</strong> ${data.bairro}</p>
    <p><strong>CEP:</strong> ${data.localidade}</p>
    <p><strong>CEP:</strong> ${data.uf}</p></>
    `;
        })
})
