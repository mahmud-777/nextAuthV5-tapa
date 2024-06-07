import { User } from "../models/user-model";

export async function createUser(user){
  try {
    // const user = await User.create(user);
     await User.create(user);
  } catch (err) {
    throw new Error(err);
        
  }
}