
// LivroLista.js
import React, { useEffect, useState } from 'react';
import { ControleLivros } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import './LivroLista.css'; // Importa o CSS para estilização

const controleLivros = new ControleLivros();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
    const { livro, excluir } = props;

    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{livro.resumo}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>{nomeEditora}</td>
            <td>
                <button onClick={() => excluir(livro.codigo)}>Excluir</button>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(controleLivros.obterLivros());
        setCarregado(true);
    }, []);

    const excluir = (codigo) => {
        controleLivros.excluir(codigo);
        setLivros(controleLivros.obterLivros());
        setCarregado(false);
    };

    return (
        <div className="table-container">
            <h2>Lista de Livros</h2>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Resumo</th>
                        <th>Autores</th>
                        <th>Editora</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro
                            key={livro.codigo}
                            livro={livro}
                            excluir={excluir}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default LivroLista;