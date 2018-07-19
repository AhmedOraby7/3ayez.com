import React from "react";
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from "material-ui/Table";

const row = (x, i, header) => {
    return(
        <TableRow key={`tr-${i}`}>
            {header.map((y, k) => {
                console.log("Y",y);
                console.log("K",k);
                if(y.prop === "image_url"){
                    return(
                        <TableRowColumn key={`trc-${k}`}>
                            <img src={x[y.prop]} />
                        </TableRowColumn>
                    );
                }
                 return(
                     <TableRowColumn key={`trc-${k}`}>
                         {x[y.prop]}
                     </TableRowColumn>
                 );

            })}
        </TableRow>
    );
};


export default ({ data, header }) =>
    <Table>
        <TableHeader>
            <TableRow>
                {header.map((header, index) =>
                    <TableHeaderColumn key={`thc-${index}`}>
                        {header.name}
                    </TableHeaderColumn>
                )}
            </TableRow>
        </TableHeader>
        <TableBody>
            {data.map((data, index) => row(data, index, header))}
        </TableBody>
    </Table>;