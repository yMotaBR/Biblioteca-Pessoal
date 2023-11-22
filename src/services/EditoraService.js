const pool = require('../config/database');

async function listarEditoras() {
  const [editoras] = await pool.query('SELECT * FROM Editoras');
  return editoras;
}

async function adicionarEditora(Editora) {
  const { nome, endereco, telefone } = Editora;
  const [results] = await pool.query('INSERT INTO Editoras (nome, endereco, telefone) VALUES (?, ?, ?)', [nome, endereco, telefone]);
  return results.insertId;
}

async function atualizarEditora(id, Editora) {
  const { nome, endereco, telefone } = Editora;
  await pool.query('UPDATE Editoras SET nome = ?, endereco = ?, telefone = ? WHERE id = ?', [nome, endereco, telefone, id]);
}

async function deletarEditora(id) {
await pool.query('DELETE FROM livros WHERE id = ?', [id]);
  await pool.query('', [id]);
}

module.exports = {
  listarEditoras,
  adicionarEditora,
  atualizarEditora,
  deletarEditora
};

