const db = require("../models");
const Author = db.authors;

exports.getAll = async (req, res) => {
  try {
    const books = await Author.findAll({ include: ["books"] });
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res) => {
  try {
    const book = await Author.findByPk(req.params.id, { include: ["books"] });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res) => {
  try {
    const AUTHOR_MODEL = {
      fullName: req.body.fullName,
      origins: req.body.origins,
    };

    try {
      const book = await Author.create(AUTHOR_MODEL);
      console.log("Author crerated");
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
    const AUTHOR_MODEL = {
      fullName: req.body.fullName,
      origins: req.body.origins,
    };

    try {
      const book = await Author.update(AUTHOR_MODEL, {
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
    const book = await Author.destroy({ where: { id: req.params.id } });
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json(error);
  }
};
