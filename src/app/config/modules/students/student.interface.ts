// import { Schema, model, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type UserName = {
  fastName: string;
  middleName: string;
  lastName: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  name: UserName;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: " A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "0+" | "0-";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: "active" | "blocked";
};
