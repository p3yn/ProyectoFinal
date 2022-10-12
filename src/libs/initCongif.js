const Role = require('../models/Role')

const createRoles = async () => {
    try {
        const counter = await Role.estimatedDocumentCount();
        if (counter > 0) return;
        const values = await Promise.all([
            new Role({ name: 'user', code: '03' }).save(),
            new Role({ name: 'moderator', code: '02' }).save(),
            new Role({ name: 'admin', code: '01' }).save()
        ])
        console.log(values)
    } catch (error) {
        console.error(error)
    }
}


module.exports = createRoles;