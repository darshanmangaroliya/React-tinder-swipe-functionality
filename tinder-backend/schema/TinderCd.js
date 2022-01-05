import Mongoose  from "mongoose";

const CardSchema = Mongoose.Schema(
    {
        name:String,
        imgurl:String

    }
)

export default Mongoose.model('card',CardSchema)