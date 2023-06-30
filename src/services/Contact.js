//export default 
class Contact {
    constructor(name, email, number, job, status, interests, notes) {
        this.name = name;
        this.email = email;
        this.number = number;
        this.job = job;
        this.status = status;
        this.interests = interests;
        this.notes = notes;
    }

    get Name() {
        return this.name;
    }

    get Email() {
        return this.email;
    }

    get Number() {
        return this.number;
    }

    get Job() {
        return this.job;
    }

    get Status() {
        return this.status;
    }

    get Interests() {
        return this.interests;
    }

    get Notes() {
        return this.notes;
    }

    get ContactArray() {
        const contactArray = [this.name, this.email, this.number, this.job, this.status, this.interests, this.notes];
        return contactArray;
    }
}

module.exports = Contact;