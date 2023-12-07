const components = require('../../database/db.components');

const getComponents = async (req, res) => {
    try {
        const component = await components.getComponents();
        res.json(component);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postComponents = async (req, res) => {
    try {
        const component = await components.postComponents(req.body.component, req.body.description);
        res.json(component);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}