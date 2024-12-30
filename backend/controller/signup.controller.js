import User from '../model/signup.model.js';
import bcrypt from 'bcrypt';


// Signup method
export const signup = async (req, res, next) => {
  console.log("Signup request received with data:", req.body);
  const { email, password, phone, address } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use, please choose a different one.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, phone, address });  // Updated user object

    await newUser.save();
    console.log("User created successfully!");
    res.status(201).json({ success: true, message: 'User created successfully!' });
  } catch (error) {
    console.error("Signup error:", error);
    next(error);
  }
};






// Signin function
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }

    console.log("User signed in successfully!");
    res.status(200).json({ success: true, message: 'Signed in successfully!' });
  } catch (error) {
    console.error("Signin error:", error);
    next(error);
  }
};






export const getEmployeeDetails = async (req, res) => {
  const { username } = req.params;

  try {
    // Fetch employee details by username
    const employee = await Employee.findOne({ username });

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (error) {
    console.error("Error fetching employee details:", error);
    res.status(500).json({ message: 'Server error' });
  }
};