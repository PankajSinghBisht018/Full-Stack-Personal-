const Book = require('../models/Book'); 

exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find(); 
        return res.status(200).json(books);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books" });
    }
};

exports.getBookByISBN = async (req, res) => {
    const { isbn } = req.params;
    try {
        const book = await Book.findOne({ isbn });
        if (!book) return res.status(404).json({ message: "Book not found" });
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching book by ISBN" });
    }
};

exports.getBooksByAuthor = async (req, res) => {
    const { author } = req.params;
    try {
        const filteredBooks = await Book.find({ author }); 
        if (filteredBooks.length === 0) return res.status(404).json({ message: "No books found for this author" });
        return res.status(200).json(filteredBooks);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books by author" });
    }
};

exports.getBooksByTitle = async (req, res) => {
    const { title } = req.params;
    try {
        const filteredBooks = await Book.find({ title });
        if (filteredBooks.length === 0) return res.status(404).json({ message: "No books found with this title" });
        return res.status(200).json(filteredBooks);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching books by title" });
    }
};
