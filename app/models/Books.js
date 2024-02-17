const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'You are required to have a title'],
            trim: true,
            maxlength: [50, 'Title cannot be more than 50 characters'],
        },
        genre:{
            type: String,
            required: [true, 'You are required to have a genre'],
            enum: [
                "Web Development",
                "Mobile Development",
                "Data Science",
                "UI/UX",
                "Business",
                "Other"
            ],
        },
        averageRating:{
            type: Number,
            min: [1, 'Rating must be at least 1'],
            max: [10, 'Rating cannot be more than 10'],
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
            required: [true, 'You are required to have an author'],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Book', bookSchema);