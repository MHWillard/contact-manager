import axios, * as others from 'axios';
//swr library?

//api talkes to backend with axios to get data normally as a class function
//setup: connecting frontend to backend properly: this works, next is to adapt to a testing format
export class API {
    async getContactData() {
        try {
            const res = await axios.get('http://localhost:3001/contacts')
            const data = res.data;
            console.log("data: " + JSON.stringify(data))
            return data;
        } catch(e) {
            console.log(e);
        }
    }
}