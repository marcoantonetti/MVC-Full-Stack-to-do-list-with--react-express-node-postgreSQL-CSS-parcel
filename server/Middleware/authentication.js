export const loginAuthentication = (req, res, next) => {
  const auth = true
    if (auth) {
        next()
      } else {
        res.send("ERROR: You must be an user")
      } 
}


