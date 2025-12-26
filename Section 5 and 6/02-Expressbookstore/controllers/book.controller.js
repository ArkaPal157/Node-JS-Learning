const booksTable = require('../models/book.model');
const authorsTable = require('../models/author.model');
const db = require('../db');
const { sql } = require("drizzle-orm");
const { eq, ilike } = require('drizzle-orm');

exports.getAllBooks = async function(req, res) {
  const search = req.query.search;

  if (search) {
    await db.select().from(booksTable.books).where(sql`to_tsvector('english', ${booksTable.books.title}) @@ plainto_tsquery('english', ${search})`);
    return res.json(books);
  }

  const books = await db.select().from(bookstable.books);
  return res.json(books);
}

exports.getBookById = function (req, res) {
  const id = req.params.id;

  const [book] = db.select().from(booksTable.books).where(table => eq(table.id, id)).leftJoin(authorsTable, eq(booksTable.authorId, authorsTable.id)).limit(1);

  if (!book)
    return res
      .status(404)
      .json({ error: `Book with id ${id} does not exists!` });

  return res.json(book);
};

exports.createBook = async function (req, res) {
  const { title, description, authorId } = req.body;

  if (!title || title === "")
    return res.status(400).json({ error: "title is required" });

  const result = db.insert(booksTable.books).values({
    title,
    authorId,
    description,
  }).returning({id: booksTable.id});

  return res.status(201).json({ message: "Book created success", id: result.id });
};

exports.deleteBookById = async function (req, res) {
  const id = req.params.id;

  await db.delete(booksTable.books).where(eq(booksTable.id, id));

  return res.status(200).json({ message: "book deleted" });
};