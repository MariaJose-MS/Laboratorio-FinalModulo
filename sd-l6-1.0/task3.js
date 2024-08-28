// Task 3: addUser(first_name, last_name, email)
import { getServerURL} from "./task1.js";

const serverURL = getServerURL() + "/users"

// Crea y exporta 'addUser' para un nuevo usuario.
export async function addUser(first_name, last_name, email) {
    // Haz solicitud HTTP al servidor para obtener la lista de usuarios.
    fetch(serverURL)
        .then(response => response.json()) // Convertimos la respuesta a formato JSON.
        .then(users => {
            // Buscamos el id más alto entre los usuarios existentes.
            const highestId = users.reduce((max, user) => user.id > max ? user.id : max, 0);

            // Creamos el nuevo id sumándole 1 al id más alto.
            const newId = parseInt(highestId) + 1;

            // Creamos un nuevo usuario con el nuevo id y los datos proporcionados.
            const newUser = {
                id: String (newId),
                first_name: first_name,
                last_name: last_name,
                email: email
            };

            // Enviamos el nuevo usuario al servidor para que lo guarde.
            return fetch(serverURL, {
                method: 'POST', // Indicamos que queremos enviar datos al servidor.
                headers: {
                    'Content-Type': 'application/json' // Decimos que los datos son JSON.
                },
                body: JSON.stringify(newUser) // Convertimos el nuevo usuario a formato JSON.
            });
        })
}