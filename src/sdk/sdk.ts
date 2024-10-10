/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Recipes } from "./recipes.js";
import { Status } from "./status.js";

export class SpeakeasyRecipeBook extends ClientSDK {
  private _status?: Status;
  get status(): Status {
    return (this._status ??= new Status(this._options));
  }

  private _recipes?: Recipes;
  get recipes(): Recipes {
    return (this._recipes ??= new Recipes(this._options));
  }
}
