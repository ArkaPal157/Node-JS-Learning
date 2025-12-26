const { pgTable, serial, text } = require('drizzle-orm/pg-core');

const books = pgTable('books', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  author: text('author').notNull(),
});

module.exports = { books };