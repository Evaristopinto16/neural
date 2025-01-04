import strategy from "passport-local";
const LocalStrategy = strategy.Strategy

async function passport(passport) {
   console.log("OI")
   passport.use(
    new LocalStrategy(
       async function(email, password, done){
            console.log(email, password)
        }
    )
   ) 
}


export default passport