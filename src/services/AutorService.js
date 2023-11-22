const pool = require('../config/database');

async function listarAutores() {
  const [autores] = await pool.query('SELECT * FROM Autores');
  return autores;
}

async function adicionarAutor(Autor) {
  const { nome, biografia, dataNascimento } = Autor;
  const [results] = await pool.query('INSERT INTO Editoras (nome, biografia, dataNascimento) VALUES (?, ?, ?)', [nome, biografia, dataNascimento]);
  return results.insertId;
}

async function atualizarAutor(id, Autor) {
  const { nome, biografia, dataNascimento } = Autor;
  await pool.query('UPDATE Editoras SET nome = ?, biografia = ?, dataNascimento = ? WHERE id = ?', [nome, biografia, dataNascimento, id]);
}

async function deletarAutor(id) {
  await pool.query('DELETE FROM livros WHERE id = ?', [id]);
}

module.exports = {
  listarAutores,
  adicionarAutor,
  atualizarAutor,
  deletarAutor
};