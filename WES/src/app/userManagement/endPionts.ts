import { environment } from '../../environments/environment';

let host: string = environment.apiUrl;
let auth: string = '/Auth';

export default {
  Auth: {
    login: `${host}${auth}`,
   
  },
};
