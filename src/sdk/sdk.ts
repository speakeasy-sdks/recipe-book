/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { getRecipeStatus } from "../funcs/getRecipeStatus.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as custom_components from "../models/custom_components/index.js";
import * as custom_operations from "../models/custom_operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Recipes } from "./recipes.js";

export class SpeakeasyRecipeBook extends ClientSDK {
  private _recipes?: Recipes;
  get recipes(): Recipes {
    return (this._recipes ??= new Recipes(this._options));
  }

  /**
   * Get the status of a recipe
   */
  async getRecipeStatus(
    request: custom_operations.GetRecipeStatusRequest,
    options?: RequestOptions,
  ): Promise<custom_components.RecipeStatus> {
    return unwrapAsync(getRecipeStatus(
      this,
      request,
      options,
    ));
  }
}
