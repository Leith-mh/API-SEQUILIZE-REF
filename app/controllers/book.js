const Book = require("../models/Book");

exports.health = (req, res) => {
  return res.status(200).json("hello world");
};

exports.getAll = async (req, res) => {
  try {
    const books = await Book.findAll();
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res) => {
  try {
    const BOOK_MODEL = {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
    };

    try {
      const book = await Book.create(BOOK_MODEL);
      console.log("Book crerated");
      return res.status(201).json(book);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res) => {
  try {
    const BOOK_MODEL = {
      title: req.body.title,
      author: req.body.author,
      isbn: req.body.isbn,
    };

    try {
      const book = await Book.update(BOOK_MODEL, {
        where: { id: req.params.id },
      });
      return res.status(200).json(book);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const book = await Book.destroy({ where: { id: req.params.id } });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};
