/**
 * Created by admin on 6/10/17.
 */
// my mongo schema
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var ArticleSchema = new Schema({
    // title is a required string
    title: {
        type: String,
        required: true,
        unique: true
    },
    // link is a required string
    link: {
        type: String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default: false
    },
    // This only saves one note's ObjectId, ref refers to the Note model
    note: [{
        type: Schema.Types.ObjectId,
        ref: "Note"
    }]
});

// Create the Article model with the ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

// Export the model
// export default ArticleSchema;
model.exports = ArticleSchema;