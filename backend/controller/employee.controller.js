import Employee from '../model/employee.model.js';

// Register a new employee
export const registerEmployee = async (req, res) => {
  try {
    const { companyNumber, name, address, gender, phoneNumber, dateOfBirth, section } = req.body;

    // Validate input
    if (!companyNumber || !name || !address || !gender || !phoneNumber || !dateOfBirth || !section) {
      return res.status(400).json({ success: false, message: 'All fields are required, including section' });
    }

    // Create a new employee
    const employee = new Employee({ companyNumber, name, address, gender, phoneNumber, dateOfBirth, section });
    await employee.save();

    res.status(201).json({ success: true, message: 'Employee registered successfully', data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};




// Get all employees
export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find(); // Retrieve all employees
    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};






// Delete an employee by ID
export const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate if the ID exists
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    // Delete the employee
    await Employee.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Employee removed successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};




// Company Login Controller
export const companyLogin = async (req, res) => {
  const { companyNumber, name, section } = req.body;

  try {
    if (!companyNumber || !name || !section) {
      return res.status(400).json({
        success: false,
        message: 'Company number, name, and section are required',
      });
    }

    // Log the values received from the frontend for debugging
    console.log('Login attempt with:', companyNumber, name, section);

    // Query the employee database for matching credentials
    const employee = await Employee.findOne({ companyNumber, name, section });

    // Log the employee object to check if it exists
    console.log('Found employee:', employee);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Invalid credentials or incorrect section',
      });
    }

    // Respond with success
    res.status(200).json({
      success: true,
      message: 'Login successful',
      employee,
    });
  } catch (error) {
    console.error('Error in companyLogin:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message,
    });
  }
};

