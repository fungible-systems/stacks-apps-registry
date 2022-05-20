import { Account, Model, types } from "../deps.ts";

enum Err {
  ERR_NOT_AUTHORIZED = 200,
}

export class RegistryModel extends Model {
  name = "registry";

  static Err = Err;

}
