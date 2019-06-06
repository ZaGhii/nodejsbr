const util = require('util')
const obeterEnderecoAsync = util.promisify(obeterEndereco)
function obterUsuario(callback) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '1111111',
                ddd: '22'
            })
        }, 2000);
    })
}

function obeterEndereco(idUsuario, callback) {
    return new Promise(function resolverEdereco(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'Rua AAAA',
                numero: '77'
            })
        }, 1000);

    })
}
main()
async function main() {
    try {
        const usuario = await obterUsuario()
        // const telefone = await obterTelefone(usuario.id)
        //  const endereco = await obeterEndereco(usuario.id)
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obeterEndereco(usuario.id)
        ])
        const telefone = resultado[0]
        const endereco = resultado[1]
        console.log(`
            Nome: ${usuario.nome}
            Endereço: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd}) - ${telefone.telefone}
        `)

    } catch (error) {
        console.error('Erro', error);
    }
}

//const usuarioPromise = obterUsuario();
//
//usuarioPromise
//    .then(function (usuario) {
//        return obterTelefone(usuario.id)
//            .then(function resolverTelefone(result) {
//                return{
//                    usuario: {
//                        nome: usuario.nome,
//                        id: usuario.id
//                    },
//                    telefone: result
//                }
//            })
//    })
//    .then(function(resultado){
//        const endereco = obeterEnderecoAsync(resultado.usuario.id)
//        return endereco.then(function resolverEdereco(result){
//            return {
//                usuario: resultado.usuario,
//                telefone: resultado.telefone,
//                endereco: result
//            }
//        })
//    })
//    .then(function (resultado) {
//        console.log(`
//            Nome: ${resultado.usuario.nome}
//            Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
//            Telefone: (${resultado.telefone.ddd}) - ${resultado.telefone.telefone}
//        `)
//    })
//    .catch(function (error) {
//        console.log('Erro usuário', error)
//    })