import User from './db';

app.post('/api/register', async (req, res) => {
  try {
    const { name, username, number, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
 
    // Create a new user object
    const newUser = new User({
      name,
      username,
      number,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.json({ message: 'Successfully registered' });
  } catch (error) {
    // Send an error response
    res.status(500).json({ message: error.message });
  }
});
