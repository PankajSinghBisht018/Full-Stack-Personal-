const Book = require('../models/Book');
const Review = require('../models/Review');

exports.addOrUpdateReview = async (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;
    const username = req.user.username;

    try {
        const book = await Book.findOne({ isbn });
        if (!book) return res.status(404).json({ message: "Book not found" });

        let userReview = await Review.findOne({ isbn, username });
        if (userReview) {
            userReview.review = review;
            await userReview.save();
            return res.status(200).json({ message: "Review updated" });
        }

        const newReview = new Review({ username, review, isbn });
        await newReview.save();

        book.reviews.push(newReview._id);
        await book.save();

        return res.status(201).json({ message: "Review added" });
    } catch (error) {
        return res.status(500).json({ message: "Error adding or updating review" });
    }
};

exports.deleteReview = async (req, res) => {
    const { isbn } = req.params;
    const username = req.user.username;

    try {
        const book = await Book.findOne({ isbn });
        if (!book) return res.status(404).json({ message: "Book not found" });

        const review = await Review.findOneAndDelete({ isbn, username });
        if (!review) return res.status(403).json({ message: "Review not found or unauthorized" });

        book.reviews = book.reviews.filter(r => r.toString() !== review._id.toString());
        await book.save();

        return res.status(200).json({ message: "Review deleted" });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting review" });
    }
};
