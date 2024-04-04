const Expense = require('../models/expenses');

const addexpense = async (req, res) => {
    const { expenseamount, description, category } = req.body;
    const userId = req.userId; // Assuming userId is passed in the request, you need to replace this with your actual logic to get the userId

    if (expenseamount == undefined || expenseamount.length === 0 || description == undefined || description.length === 0 || category == undefined || category.length === 0) {
        return res.status(400).json({ success: false, message: 'parameters missing' });
    }

    try {
        const expense = await Expense.create({ expenseamount, description, category, userId });
        return res.status(201).json({ expense, success: true });
    } catch (err) {
        return res.status(500).json({ success: false, error: err });
    }
}


const getexpenses = async (req, res) => {
    Expense.findAll().then(expenses => {
        return res.status(200).json({expenses, success: true})
    })
    .catch(err => {
        return res.status(500).json({success: false, error: err})
    })
}

const deleteexpense = async (req, res) => {
    const expenseid = req.params.expenseid;
    if(expenseid == undefined || expenseid.length === 0) {
        return res.status(400).json({success: false, })
    }
    Expense.destroy({where: { id: expenseid }}).then(() => {
        return res.status(200).json({ success: true, message: "Deleted Successfully"})
    }).catch(err => {
        console.log(err);
        return res.status(500).json({ success: true, message: "Failed"})
    })
}

module.exports = {
    addexpense,
    getexpenses,
    deleteexpense
}
