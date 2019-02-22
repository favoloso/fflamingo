import { AuthRole } from "./AuthRole";
import { AuthDomain } from "./AuthDomain";

export interface AuthRoleBinding {
  role: AuthRole;
  domain: AuthDomain;
}