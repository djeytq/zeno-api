const cadastros = `
    CREATE TABLE IF NOT EXISTS cadastros(
    id SERIAL, 
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100),
    description Text,
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at DATE DEFAULT CURRENT_DATE
    )
`;


module.exports = [cadastros];