const express = require('express');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const session = require('express-session');

  const app = express();

  // Session setup
  app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
  }));

  // Passport setup
  app.use(passport.initialize());
  app.use(passport.session());

  // Define the local strategy
  passport.use(new LocalStrategy((username, password, done) => {

    
    // Here, you would verify the user's credentials with your database
    if (username === 'user' && password === 'password') {
      console.log(username, passport)
      return done(null, { id: 1, username: 'user' });
    } else {
      console.log(username, passport)
      return done(null, false, { message: 'Incorrect credentials.' });
    }
  }));

  // Serialize and deserialize user instances
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => {
    // Find user by ID in database
    done(null, { id: 1, username: 'user' });
  });
 
  app.post('/login', passport.authenticate('local', {
    
    successRedirect: '/dashboard',
    failureRedirect: '/login'
  }));

  app.get('/dashboard', (req, res) => {
    if (req.isAuthenticated()) {
      res.send('Welcome to your dashboard, ' + req.user.username);
    } else {
      res.redirect('/login');
    }
  });

  app.listen(3000, () => console.log('Server started on port 3000'));