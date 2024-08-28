// Task 4: delUser(number)
import { getServerURL } from "./task1.js";

export async function delUser(id) {
    const url = `${getServerURL()}/users/${id}`;
    const response = await fetch(url, {
        method: 'DELETE',
    })
}