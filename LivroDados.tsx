import React, { useState } from 'react';
import "./LivroLista.css";

const LivroDados: React.FC = () => {
    const [titulo, setTitulo] = useState('');
    const [autores, setAutores] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica para cadastrar o livro
        console.log('Título:', titulo);
        console.log('Autores:', autores);
    };

    return (
        <div className="card">
            <div className="card-header">
                <h5>Cadastrar Livro</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite o título do livro"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Autores</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite os nomes dos autores"
                            value={autores}
                            onChange={(e) => setAutores(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Cadastrar</button>
               </form>
            </div>
        </div>
    );
};

export default LivroDados;
