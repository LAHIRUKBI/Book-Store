import Payment from '../model/payment.model.js';

export const createPayment = async (req, res, next) => {
  try {
    const { bookId, totalPrice, quantity, paymentMethod, formData, bankData } = req.body;

    const newPayment = new Payment({
      bookId,
      totalPrice,
      quantity,
      paymentMethod,
      customerName: formData.name,
      customerAddress: formData.address,
      customerPhone: formData.phone,
      customerEmail: formData.email,  // Add email field
      bankName: bankData.bankName,
    });

    const savedPayment = await newPayment.save();

    res.status(201).json({ success: true, data: savedPayment });
  } catch (err) {
    next(err);
  }
};




export const getAllPayments = async (req, res, next) => {
    try {
      const payments = await Payment.find();
      res.status(200).json({ success: true, data: payments });
    } catch (err) {
      next(err);
    }
  };



  
  // Controller for fetching orders and payments
export const getOrdersForEmail = async (req, res) => {
  const { email } = req.params;
  const orders = await Order.find({ customerEmail: email });
  res.json({ orders });
};





export const getPaymentsForEmail = async (req, res) => {
  const { email } = req.params;
  const payments = await Payment.find({ customerEmail: email });
  res.json({ payments });
};