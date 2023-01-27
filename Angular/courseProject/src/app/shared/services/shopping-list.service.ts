import { Injectable } from "@angular/core";
import { Ingredient } from "../ingredient.model";

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10),
    ];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }
}