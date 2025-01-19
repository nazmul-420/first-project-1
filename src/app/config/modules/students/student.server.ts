import { StudentModel } from "../student.module";
import { Student } from "./student.interface";

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

export const StudentServes = {
  createStudentIntoDB,
};
