import UserStore from "./UserStore";
import {AdminStore} from "./AdminStore";
import PermissionStore from "./PermissionStore";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    userStore: new UserStore(),
    adminStore: new AdminStore(),
    permissionStore: new PermissionStore()
}
