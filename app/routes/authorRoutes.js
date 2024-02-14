const router = require('express').Router();

router.get('/', (req, res) => {
    res.status(200).json({ 
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
});

router.post('/', (req, res) => {
    res.status(200).json({ 
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(200).json({ 
        id,
        message: `${req.method} - request to Author endpoint`, 
        success: true
    });
});

module.exports = router;