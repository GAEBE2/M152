
export default class LocalStorageHandler {
    static getName() {
        return localStorage.getItem("name") === null ? "name" : localStorage.getItem("name");
    }

    static getGender() {
        return localStorage.getItem("gender") === null ? "m" : localStorage.getItem("gender");
    }

    static setItem(key, value) {
        localStorage.setItem(key, value);
    }
}