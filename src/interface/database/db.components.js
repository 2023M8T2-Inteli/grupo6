const { supabase } = require('./db');

const table = 'components';

const getComponents = async (component=null) => {
    if (component) {
        const { data, error } = await supabase.from(table).select().eq('component', component)
        return data;  
    }
    const { data, error } = await supabase.from(table).select()
    
    return data;
}

const postComponents = async (component, description) => {
    const { error } = await supabase.from(table).insert([
        {component: component, description: description}
    ])

    if (error) return error;
    
    return $`Component ${component} added successfully.`;
}

module.exports = {
    getComponents,
    postComponents
};