# DIMAS - Distributor Management System

Aplikasi ini digunakan untuk melakukan manajemen distributor dari PT. Pupuk Indonesia Holding Company (PIHC).

---

## Features
### Modules Pendaftaran
- Pendaftaran dan Pengisian data oleh distributor
- Approval oleh VP Sales Region
- Approval oleh SVP Wilayah
- Upload data alokasi Tonase dan Distributor per-kabupaten oleh SVP PSO PM
- Rekomendasi penerimaaan Distributor oleh SVP PSO
- Penentuan penilaian oleh SEVP Marketing Ops
- Pengambilan Keputusan Akhir oleh Direktur Pemasaran

### Modules Penilaian
- Pengajuan penilaian oleh distributor
- Verifikasi data oleh VP Sales Region
- Verifikasi data oleh SVP Wilayah
- Rekomendasi nilai oleh SVP PSO
- Keputusan penilaian oleh SEVP Marketing Ops

---

## Project Setup 
1. Environtment Configuration
    ```
    # filename : .env
    NODE_ENV=development
    VUE_APP_PUBLIC_PATH="/"
    VUE_APP_API_ENDPOINT="http://localhost:8000" #API URL from BACKEND
    
    # filename : .env.production-server
    NODE_ENV=production
    VUE_APP_PUBLIC_PATH="/web"
    VUE_APP_API_ENDPOINT="https://dimas.pupuk-indonesia.com/api"

    # filename : .env.qas-server
    NODE_ENV=production
    VUE_APP_PUBLIC_PATH="/web"
    VUE_APP_API_ENDPOINT="https://dimas-qas.pupuk-indonesia.com/api"
    ```
2. Installing Dependency
    ```
    # NPM
    $ npm install

    # Yarn
    $ yarn install
    ```
3. Run Local Development
    ```
    # NPM
    $ npm run serve

    # Yarn
    $ yarn serve
    ```

---

## Deployment
### Deployment on QAS server
1. Build this app on your local computer, QAS server will use environtment on .env.qas-server file. 
    ```
    npm run build-qas
    ```
2. After building process done, then commit your the build result ("/qas-dist" folder) and push to github repository. 
3. Clone project to QAS Server
4. Make configuration on QAS Server (NGINX), set path to "/qas-dist" folder
5. Test the application, make sure application run properly

### Deployment on Production server
1. Build this app on your local computer, QAS server will use environtment on .env.qas-server file. 
    ```
    npm run build-production
    ```
2. After building process done, then commit your the build result ("/production-dist" folder) and push to github repository. 
3. Clone project to Production Server
4. Make configuration on Production Server (NGINX), set path to "/production-dist" folder
5. Test the application, make sure application run properly
    
#### NOTE
> If any code changes in the application then build for preferred server and push to github repository. then just do a pull from server without re-build on server.

> If already deployed, then just need a pull on server after building on local computer.

---
### Other Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
