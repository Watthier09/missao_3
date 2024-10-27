// ControleLivros.ts
import { Livro } from '../modelo/Livro';

const livros: Livro[] = [
    new Livro(1, 1, 'Livro A', 'Resumo do Livro A', ['Autor 1', 'Autor 2']),
    new Livro(2, 2, 'Livro B', 'Resumo do Livro B', ['Autor 3']),
    new Livro(3, 1, 'Livro C', 'Resumo do Livro C', ['Autor 4', 'Autor 5']),
];

export class ControleLivros {
    obterLivros(): Livro[] {
        return livros;
    }

    incluir(livro: Livro): void {
        const maxCodigo = livros.reduce((max, l) => Math.max(max, l.codigo), 0);
        livro.codigo = maxCodigo + 1;
        livros.push(livro);
    }

    excluir(codigo: number): void {
        const index = livros.findIndex(l => l.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
