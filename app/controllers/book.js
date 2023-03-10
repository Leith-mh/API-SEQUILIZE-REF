const db = require("../models");
const Book = db.books;

exports.health = (req, res) => {
  return res.status(200).send("hello world");
};

exports.getAll = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: {
        model: db.authors,
        as: "author",
        attributes: ["fullName", "origins"],
      },
      include: {
        model: db.tags,
        as: "tags",
        attributes: ["genre"],
      },
    });
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.addTag = async (req, res) => {
  try {
    const BOOK_MODEL = {
      bookId: req.body.bookId,
      tagId: req.body.tagId,
    };
    const book = await Book.create(BOOK_MODEL);

    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: {
        model: db.authors,
        as: "author",
        attributes: ["fullName", "origins"],
      },
    });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.getOneByAuthor = async (req, rest) => {
  try {
    const book = await Book.findByPk(req.params.authorId, {
      include: {
        model: db.authors,
        as: "author",
        attributes: ["fullName", "origins"],
      },
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};
exports.createOne = async (req, res) => {
  try {
    const BOOK_MODEL = {
      title: req.body.title,
      authorId: req.body.authorId,
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
      authorId: req.body.authorId,
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
