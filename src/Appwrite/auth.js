import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js';

export class AuthService {
client = new Client()
Account

constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl) 
    .setProject(conf.appwriteProjectId); 
    this.Account = new Account(this.client)
}

createAccount = async({ email, password, name }) => {
    try {
        const account = await this.Account.create(ID.unique(),{email, password, name});
        if (account) {
            console.log(account);
            return account
            
        }
    } catch (error) {
        console.log(`Error creating account: ${error.message}`);
        
    }
}

async login({ email, password }) {
    try {
        const session = await this.Account.createEmailSession(email, password);
        if (session) {
            console.log(session);
            return session;
        }
    } catch (error) {
        
    }
}

async getAccount(){
    try {
        const result = await this.Account.get()
        if (result) {
            log(result);
            return result;
        }
    } catch (error) {
        
    }
}

async logout(){
   try {
    return await this.Account.deleteSession()
   } catch (error) {
       console.log(`Error logging out: ${error.message}`);
    
   }
}
};



const AuthService = new AuthService();