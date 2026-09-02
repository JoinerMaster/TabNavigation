interface User {
    id: string,
    nombre: string,
}

interface Telefono {
    id: string,
    id_user: number,
    marca_celular: string,
    modelo: string,
    sistema: string,
    procesador: string,
    estado: Estado
}

interface Estado {
    id: string,
    name: string
}