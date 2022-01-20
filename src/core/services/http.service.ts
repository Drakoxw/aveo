import axios, { AxiosResponse } from 'axios';
import VueAxios from 'vue-axios';
import { Base64 } from '../interfaces/others';
import { RespProductos } from '../interfaces/productos';

const URL = 'http://localhost';

const BASE64 = {

  async convert64(file: File) {
    return new Promise<Base64>((resolve, reject ) => {
      try {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve({
            blob: file,
            base: reader.result,
          });
        };
        reader.onerror = (err) => {
          resolve({
            blob: file,
            base: null,
          });
        };
      } catch (err) {
        reject(err);
      }
    });
  },

  getBase64: async (id: string) => 
  new Promise<AxiosResponse<Base64>>((resolve, reject) => {
    try {
      axios.get<Base64>(`${URL}/documentos/${id}`)
      .then(res => resolve(res) )
      .catch((err) => reject(err) );
    } catch (err) {
      reject(err)
    }
    
  })

}

const PRODUCTOS = {

  getAll: async () => 
  new Promise<AxiosResponse<RespProductos>>((resolve, reject) => {
    try {
      axios.get<RespProductos>(`${URL}/productos`)
      .then(res => resolve(res) )
      .catch((err) => reject(err) );
    } catch (err) {
      reject(err)
    }
    
  })
}

export {PRODUCTOS, BASE64}
