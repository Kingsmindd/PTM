// utils is the short for utilities which prefers to a collection of helper functions or modules designed to perform common tasks on multiple functions

// These tasks often includes things like datavalidation, formatting or other repetetive operations that are used across differenet parts of the application

import mongoose from "mongoose";

export const validateID = (id: string): boolean => {
  return mongoose.Types.ObjectId.isValid(id);
};
