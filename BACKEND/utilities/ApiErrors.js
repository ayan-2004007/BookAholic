
class ApiErrors{
    constructor(
        statusCode,
        message="Some Error Occured",
        errors=[],
        stack=""
    ){
        this.statusCode=statusCode
        this.message=message
        this.errors=errors
        this.stack=stack
    }
}
export default ApiErrors