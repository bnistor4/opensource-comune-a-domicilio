import axios from "axios";
import {ID_GOOGLE_SPREADSHEET} from "../constants";

export const METHODS = Object.freeze({
    POST: "POST",
    PUT: "PUT",
    GET: "GET",
    DELETE: "DELETE"
});

export class Api {

    constructor(client) {
        this.client = client;
    }

    getActivities() {
        return this.fireCall(METHODS.GET, `https://spreadsheets.google.com/feeds/cells/${ID_GOOGLE_SPREADSHEET}/1/public/full?alt=json`);
    }


    async fireCall(method, endpoint, data, params = {}, headers = {}, token, moreOptions = {}) {
        const defaultHeaders = {'content-type': 'application/json'};
        const options = {
            method: method,
            headers: {...defaultHeaders, ...headers},
            data: data,
            url: endpoint,
            ...moreOptions
        };
        return this.client(options);
    }
}

const defaultClient = new Api(axios.create());

Api.base = defaultClient;
