
export default class LocalStorageHandler {
    static getName() {
        return localStorage.getItem("name") === "" ? "name" : localStorage.getItem("name");
    }

    static getGender() {
        return localStorage.getItem("gender") === "" ? "m" : localStorage.getItem("gender");
    }

    static setItem(key, value) {
        localStorage.setItem(key, value);
    }
}