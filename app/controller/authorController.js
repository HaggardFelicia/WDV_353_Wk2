const Authors = require('../models/Authors');

const getAllAuthors = (req, res) => {
    res.status(200).json({ 
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
};

const getAuthorById = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
};

const createAuthor = async (req, res) => {
    const {author} = req.body;
    const newAuthor = await Authors.create(author);
    console.log('data >>>', newAuthor);
    res.status(200).json({ 
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
};

const updateAuthor = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
};

const deleteAuthor = (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
};

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};
