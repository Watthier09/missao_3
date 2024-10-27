// src/LivroLista.tsx
import React from 'react';
import './index.css';

const LivroLista: React.FC = () => {
    return (
        <div>
            <h2 className="text-center">Lista de Livros</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Autores</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>O Senhor dos Anéis</td>
                        <td>J.R.R. Tolkien</td>
                        <td>
                            <button className="btn btn-danger">Excluir</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1984</td>
                        <td>George Orwell</td>
                        <td>
                            <button className="btn btn-danger">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LivroLista;