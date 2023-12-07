const components = require('../../database/db.components');

const getComponents = async (req, res) => {
    const { component } = req.body;
    console.log(req.body);
    
    try {
        const response = await components.getComponents(component);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postComponents = async (req, res) => {
    const { component, description } = req.body;
    console.log(req.body);
    
    try {
        const response = await components.postComponents(component, description);
        res.json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getComponents,
    postComponents
};