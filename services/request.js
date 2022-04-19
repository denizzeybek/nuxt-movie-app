import axios from 'axios'

const request = async (url, method, params) => {
    try {
        const { data = null, error } = await axios[method](url, params);
        if (!data) {
            if (error.type === '403') {
                // open popup
            }
            throw new Error('Error Message')
        }
        return { data, error: null }
    } 
    catch (error) {
        return { data: null, error }
    }

}
// response = { data: [ ], name: 'asd' }

// es6 => destru
// const asd = response.data
// const { data, name } = response

export default request