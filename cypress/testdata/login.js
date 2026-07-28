export const testData={

  valid:{
    username:"standard_user",
    password:"secret_sauce"
  },

  invalid:{
    username:"jpt",
    password:"123"
  },

  lockedOutUser:{
    username:"locked_out_user",
    password:"secret_sauce"
  },
  
 errorMessages:{
    invalidCredentials:"Epic sadface: Username and password do not match any user in this service",
    emptyUsernameMessage:"Epic sadface: Username is required",
    emptyPasswordMessage:"Epic sadface: Password is required",
    emptyUsernameAndPasswordMessage:"Epic sadface: Username is required"
  }
};
