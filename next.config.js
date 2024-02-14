/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'scss')],
      },
      env: {
        development: "http://localhost:8010",
        ACCESS_TOKEN: "accessToken",//'CREATE', 'UPDATE', 'DELETE', 'ACTIVE'
        actionTypeOptions:[
          {
            display:'Crear',
            value:'CREATE'
          },
          {
            display:'Actualizar',
            value:'UPDATE'
          },
          {
          display:'Eliminar',
          value:'DELETE'
         },
          {
            display:'Activar',
            value:'ACTIVE'
          }
      ],
        targetOptions: [
          {
            display:'Usuarios',
            value:'User'
          },
          {
            display:'Clientes',
            value:'Customer'
          },
      ],
        routes:[
          {
            name: "Usuarios",
            route: "users",
        }
        ]
      },
      images: {
        domains: ["localhost"]
      }
}

module.exports = nextConfig
