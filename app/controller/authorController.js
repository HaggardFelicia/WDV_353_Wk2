const Authors = require('../models/Authors');

const getAllAuthors = async (req, res) => {
    const authors = await Authors.find({});
    res.status(200).json({ 
        data: authors,
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
    try{
        const newAuthor = await Authors.create(author);
        console.log('data >>>', newAuthor);
        res.status(200).json({ 
            message: `${req.method} - request to Author endpoint`, 
            success: true
        });
    }
    catch(error){
        if (error.name === 'ValidationError') {
            console.error('Error Validating!', error);
            res.status(422).json(error);
        }
        else{
            console.error(error);
            res.status(500).json(error);
        }
    }
    
};

const updateAuthor = async (req, res) => {
    const {id} = req.params;
    const author = await Authors.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ 
        data: author,
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
