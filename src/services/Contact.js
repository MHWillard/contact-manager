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

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getNumber() {
        return this.number;
    }

    getJob() {
        return this.job;
    }

    getStatus() {
        return this.status;
    }

    getInterests() {
        return this.interests;
    }

    getNotes() {
        return this.notes;
    }

    getContactArray() {
        //const contactArray = [this.name, this.email, this.number, this.job, this.status, this.interests, this.notes];
        const contactArray = ['1','2','3','4','5','6','7'];
        return contactArray;
    }
}

module.exports = {Contact}