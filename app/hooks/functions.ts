import {json , LoaderFunction } from "@remix-run/node";

export function formatNumberWithCommas(value: number): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const loader:LoaderFunction = async () =>{
    const response = await fetch("http://localhost:1234/api/v1/production/list",{ 
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json',  
        }
      });
    const data = await response.json();
    
    return json( data );
  };
  
//   type User = {
//     id: number
//     name: string
//   }
  
//   export const loader: LoaderFunction = async () => {
//     const userData = {
//       id: 1,
//       name: 'foo',
//     };
  
//     return json<User>(userData);
//   };