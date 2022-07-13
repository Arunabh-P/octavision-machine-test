import mongoose from "mongoose";
const database = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/usertable',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Db is connected');
    } catch (error) {
        console.log(error);
    }
}
export default database