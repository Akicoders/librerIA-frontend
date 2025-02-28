import {config} from '@/config/env'

export  interface LoginCredentials{
    email: string;
    password: string;
}

export interface RegisterCredentials extends LoginCredentials{
    name: string;
    lastName: string;
}

export const authService = {
    async login(credentials: LoginCredentials){
        const response = await fetch(`${config.apiUrl}/auth/log-in`,
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Accept': 'application/json'

                },
                body: JSON.stringify(credentials),
            });
            console.log(JSON.stringify(credentials));
            return response.json();
    },

    async register(credentials: RegisterCredentials){
        const response = await fetch(`${config.apiUrl}/auth/sign-up`,
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(credentials),
            });
            return response.json(); 
    }
}