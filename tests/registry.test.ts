import {
  Account,
  Accounts,
  beforeEach,
  Chain,
  Context,
  describe,
  it,
  run,
} from "../deps.ts";

import { RegistryModel } from "../models/registry.model.ts";

let ctx: Context;
let chain: Chain;
let accounts: Accounts;
let registry: RegistryModel;

beforeEach(() => {
  ctx = new Context();
  chain = ctx.chain;
  accounts = ctx.accounts;
  registry = ctx.models.get(RegistryModel);
});

describe("[Registry]", () => {
  it("works", () => {});
});

run();
