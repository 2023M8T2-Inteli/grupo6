const { supabase } = require('./db');

getComponents = async (component=null) => {
    if (component) {
        const { data, error } = await supabase.from('components').select().eq('component', component)
        return data;  
    }
    const { data, error } = await supabase.from('components').select()
    
    return data;
}

postComponents = async (component, description) => {
    const { error } = await supabase.from('components').insert([
        {component: component, description: description}
    ])
    return error;
}