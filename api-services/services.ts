import type {role} from "~/interfaces/interfaces";

export class Service {
    baseUrl = "https://hwsrv-906199.hostwindsdns.com/form-builder-api";
    $fetch: any;

    constructor($fetch: any) {
        this.$fetch = $fetch;
    }

    async get(endpoint: string, token?: string, role?: role) {
        const headers = token ? {'Authorization': `Bearer ${token}`, 'X-ROLE': role ?? 'OPERATOR'} : {};
        return await this.$fetch(this.baseUrl + endpoint, {headers});
    }

    async post(endpoint: string, body: any, token?: string, role?: role) {
        const headers = {
            'Content-Type': 'application/json',
            'X-ROLE': role ?? 'USER,ADMIN,OPERATOR',
            ...(token ? {'Authorization': `Bearer ${token}`} : {})
        };
        return await this.$fetch(this.baseUrl + endpoint, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
    }

    // async put(endpoint: string, body: any, token?: string) {
    //     const headers = {
    //         'Content-Type': 'application/json',
    //         ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    //     };
    //     return await this.$fetch(this.baseUrl + endpoint, {
    //         method: 'PUT',
    //         headers,
    //         body: JSON.stringify(body),
    //     });
    // }
    //
    // async delete(endpoint: string, token?: string) {
    //     const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
    //     return await this.$fetch(this.baseUrl + endpoint, {
    //         method: 'DELETE',
    //         headers
    //     });
    // }
}