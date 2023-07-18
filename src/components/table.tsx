import React, { useEffect } from 'react';
import DataTable from 'datatables.net-dt';

export default function Table() {
    useEffect(() => {
        let table = new DataTable('#myTable', {
          paging: true,
          
        }); 
        return () => {
            table.destroy(false);
          };
        }, []);
    return(
        <>
        <link rel="stylesheet" href="https://cdn.datatables.net/1.13.5/css/jquery.dataTables.css" />
            <table id="myTable" className="display">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>General</th>
                        <th>INE</th>
                        <th>CURP</th>
                        <th>RFC</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Negativo</td>
                        <td>815155486185</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>751518266921</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>9512548163698</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>21354261945</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>181856292056459</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Negativo</td>
                        <td>67915606645959</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Negativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Negativo</td>
                        <td>4651564654651</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                    <tr>
                        <td>Ivan Linares Gaona</td>
                        <td>Afirmativo</td>
                        <td>12546925818</td>
                        <td>LIGI23345HDC534</td>
                        <td>LIGI24323</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}