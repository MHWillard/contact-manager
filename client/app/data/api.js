import axios, * as others from 'axios';

//api talkes to backend with axios to get data normally as a class function
//setup: connecting frontend to backend properly: this works, next is to adapt to a testing format
export class API {
    async getContactData() {
        //let contacts = {data: 'bill billson'}
        const res = await axios.get('http://localhost:5000/contacts')
        const data = res.data;
        return data;

        /*try {
            const res = await axios.get('http://localhost:5000/contacts')
            data = res.data;
            console.log(res)
        } catch (error) {
            console.log(error)
        }*/
        //const data = [{name: "dummyname", email: "dummy@dummyemail.com", number: "555-1234", job: "Test Dummy", status: "Friend", interests: "getting hit, testing vehicles", notes: "Not too bright"}, {name: "bill billson", email: "dingo@dummyemail.com", number: "555-1234", job: "Simple Dingo", status: "Friend", interests: "eating meat", notes: "Animal?"}]
    }
}