import { Address } from "expo-location";

//category
export interface Category {
  id: string;
  title: String;
  icon: String;
}

// foodModel
export interface FoodModel {
  filter(arg0: (item: any) => any): readonly unknown[] | null | undefined;
  _id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  readyTime: number;
  images: [string];
}

//Restaurant Model

export interface Restaurant {
  _id: string;
  name: string;
  foodType: string;
  address: string;
  phone: string;
  images: string;
  foods: [FoodModel];
}

export interface FoodAvailability {
  categories: [Category];
  restaurants: [Restaurant];
  foods: [FoodModel];
}

//todo : Modify later
//User Model

export interface UserModel {
  firstName: string;
  lastName: String;
  contactNumber: String;
  token: string;
}

export interface UserState {
  user: UserModel;
  location: Address;
  error: string | undefined;
}

export interface ShoppingState {
  availability: FoodAvailability;
  availableFoods: [FoodModel];
}
