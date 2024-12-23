import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Iproducts } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  private baseURL = 'https://fakestoreapi.com/products';

  constructor(private _httpClient: HttpClient) {}

     /**
     * Este metodo retorna  los datos de la api que esta almacenada en @baseUrl
     * @_httpClient array completo
     */
    //practica para agregar mas logica al codigo 
     /*public getProducts(sort?: string) :Observable<Iproducts[]> {
      //const params = sort ? `?sort=${sort}`: "";// validacion si vuelve vacio

      return this._httpClient.get<Iproducts[]>(`${this.baseURL}?sort=${sort}`)
      //return this._httpClient.get<Iproducts[]>(`${this.baseURL}${params}`)
    }*/


     /**
      * este metodo devuel todos los productos
      * @returns los productos 
      */ 
    public getAllProducts() :Observable<Iproducts[]> {
      return this._httpClient.get<Iproducts[]>(`${this.baseURL}`)
    }
    /**
     * este metodo permite devolver un producto por su id
     * @param id id producto 
     * @returns observable con su producto por su id
     */

    public getProducts(id: number | string) :Observable<Iproducts>{
      return this._httpClient.get<Iproducts>(`${this.baseURL}/${id}`)
    }
    /**
     * esye metodo permite devolver las categorias 
     * @returns observable con las las categorias
     */

    public getAllCategories():Observable<Category[]>{
      return this._httpClient.get<Category[]>(`${this.baseURL}/categories`)
    }

    /**
     * este metodo permite agreggar nuevos producots
     * @param products enviar de datos
     * @returns observable con producto ingresador
     */
    public newProduct(products: Iproducts): Observable<Iproducts>{
      return this._httpClient.post<Iproducts>(`${this.baseURL}`, products);
    }
   /** * Este método permite actualizar un producto.
    *  @param id - Identificador del producto. 
    *  @param product - Objeto con los datos actualizados del producto. 
    *  @returns Observable<Iproducts> - Un Observable con el producto actualizado.
     */

    public updateProduct(id: number, product: Iproducts):Observable<Iproducts>{
      return this._httpClient.put<Iproducts>(`${this.baseURL}/${id}`, product);
    }

    /**
     * este metodo permite eliminar un producto
     * @param id Identificador del producto
     * @returns observable<Iproduts> - Un Observable con el producto eliminado.
     */

    public deteleProduct(id:number): Observable<Iproducts>{
      return this._httpClient.delete<Iproducts>(`${this.baseURL}/${id}`)
    }

    
}
