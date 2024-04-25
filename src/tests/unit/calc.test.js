const { Soma, Sub, Mult, Div, Cousin, CPF_verifier } = require("../../common/calc");

describe('Calculadora', () => {
    describe('Soma', () => {
        it('Deve retornar o resultado da soma de 1 + 2', () => {
            const res = Soma(1, 2);
            expect(res).toBe(3);
        })
    })

    describe('Subtração', () => {
        it('Deve retornar o resultado da subtração de 2 - 1', () => {
            const res = Sub(2, 1);
            expect(res).toBe(1);
        })
    })

    describe('Multiplicação', () => {
        it('Deve retornar o resultado da multiplicação de 1 * 2', () => {
            const res = Mult(1, 2);
            expect(res).toBe(2);
        })
    })

    describe('Divisão', () => {
        it('Deve retornar o resultado da divisão de 5 / 0', () => {
            const res = Div(5, 0);
            expect(res).toBe('Erro');
        }),
            it('Deve retornar o resultado da divisão de 8 / 2', () => {
                const res = Div(8, 2);
                expect(res).toBe(4);
            })
    })

    describe('Primo', () => {
        it('Deve retornar o resultado se o número 7 é primo', () => {
            const res = Cousin(7);
            expect(res).toBe('Primo');
        }),
            it('Deve retornar o resultado se o número 6 não é primo', () => {
                const res = Cousin(6);
                expect(res).toBe('Não é primo');
            }),
            it('Deve retornar o resultado se o número 23 é primo', () => {
                const res = Cousin(23);
                expect(res).toBe('Primo');
            }),
            it('Deve retornar o resultado se o número 24 não é primo', () => {
                const res = Cousin(24);
                expect(res).toBe('Não é primo');
            }),
            it('Deve retornar o resultado se o número 2 é primo', () => {
                const res = Cousin(2);
                expect(res).toBe('Primo');
            }),
            it('Deve retornar o resultado se o número 1 não é primo', () => {
                const res = Cousin(1);
                expect(res).toBe('Não é primo');
            })
    })
})

describe('CPF verifier', () => {
    it('Deve retornar o resultado se o CPF não for verificado', () => {
        const res = CPF_verifier('145220620');
        expect(res).toBe('Erro');
    }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('14538220620');
            expect(res).toBe('Verificado');
        }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('13183942950');
            expect(res).toBe('Verificado');
        }),
        it('Deve retornar o resultado se o CPF não for verificado', () => {
            const res = CPF_verifier('13183942911');
            expect(res).toBe('Erro');
        }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('14062931990');
            expect(res).toBe('Verificado');
        }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('07564684933');
            expect(res).toBe('Verificado');
        }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('10211636940');
            expect(res).toBe('Verificado');
        }),
        it('Deve retornar o resultado se o CPF for verificado', () => {
            const res = CPF_verifier('25328753801');
            expect(res).toBe('Verificado');
        })
})