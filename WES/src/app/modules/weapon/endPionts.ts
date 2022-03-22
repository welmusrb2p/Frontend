import { environment } from '../../../environments/environment';

let host: string = environment.apiUrl;
let root: string = '/Weapon';

export default {
  weapon: {
    get: `${host}${root}/GetdWeapon`,
    add: `${host}${root}/addWeapon`,
    update: `${host}${root}/updateWeapon`,
    delete: `${host}${root}/deleteWeapon`,
  },
};
