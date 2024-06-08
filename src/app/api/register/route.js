import { NextResponse } from "next/server";
import { createUser } from "../../../queries/users";
import bcrypt from 'bcryptjs'
import { dbConnect } from '../../../lib/mongo';
export const POST = async (request) => {
  const { name, email, password } = await request.json();
  console.log(name, email, password);


  // Create a DB Connection
  await dbConnect();
  // Encrypt the Password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // Form a DB Payload
  const newUser = {
    name,
    password: hashedPassword,
    email
  }

  // Update the DB
 try {
  await createUser(newUser);

  return new NextResponse("User has been created", {
    status: 201,
  });
  
 } catch (err) {
  return new NextResponse(err.message, {
    status: 500,
  });  
 } 
}