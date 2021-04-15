import axios from "axios";

export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=50");
    },
    getGender: function() {
        return axios.get("https://randomuser.me/api/?gender=" + gender);
    }
};