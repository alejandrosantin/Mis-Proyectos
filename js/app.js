const proyectos = document.querySelector('.proyecto').addEventListener('click', cargarJSON);

function cargarJSON() {
    fetch('proyectos.json')
        .then(res => res.json())
        .then(data => {
            let html = '<button id="btnX">⇑</button><br>';
            data.forEach(proyecto => {
                html += `
                        <br><a href="${proyecto.link}" target="_blank">${proyecto.nombre}</a><br>
                        `
            })
            document.getElementById('resultado').innerHTML = html;
            const quitar = document.getElementById('btnX').addEventListener('click', quitarProyectos);

            function quitarProyectos() {
                document.getElementById('resultado').innerHTML = '';
                console.log('probando');
            }
        })
        .catch(error => console.log(error))
}