/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UpdateRecipeRequest = {
  recipeId: string;
  /**
   * Updated recipe data
   */
  recipeInput: components.RecipeInput;
};

/** @internal */
export const UpdateRecipeRequest$inboundSchema: z.ZodType<
  UpdateRecipeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  recipeId: z.string(),
  RecipeInput: components.RecipeInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "RecipeInput": "recipeInput",
  });
});

/** @internal */
export type UpdateRecipeRequest$Outbound = {
  recipeId: string;
  RecipeInput: components.RecipeInput$Outbound;
};

/** @internal */
export const UpdateRecipeRequest$outboundSchema: z.ZodType<
  UpdateRecipeRequest$Outbound,
  z.ZodTypeDef,
  UpdateRecipeRequest
> = z.object({
  recipeId: z.string(),
  recipeInput: components.RecipeInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    recipeInput: "RecipeInput",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateRecipeRequest$ {
  /** @deprecated use `UpdateRecipeRequest$inboundSchema` instead. */
  export const inboundSchema = UpdateRecipeRequest$inboundSchema;
  /** @deprecated use `UpdateRecipeRequest$outboundSchema` instead. */
  export const outboundSchema = UpdateRecipeRequest$outboundSchema;
  /** @deprecated use `UpdateRecipeRequest$Outbound` instead. */
  export type Outbound = UpdateRecipeRequest$Outbound;
}
