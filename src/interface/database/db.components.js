const { supabase } = require('./db');

getComponents = async (id=null) => {
    const { data, error } = await supabase.from('components').select()
    switch (!!id) {
        case true:
            return data;
        default:
            return data;
    }
}

postComponents = async (component) => {
    const { data, error } = await supabase.from('components').insert([component])
    return data;
}