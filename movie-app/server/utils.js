function createResponse(error , data){
 
    const result = {}
    if(error){
        result['status'] = 'error',
        result['error'] = error
    }else{
        result['status'] = 'sucess',
        result['data'] = data
    }
    return result
}
module.exports = {
    createResponse : createResponse
}