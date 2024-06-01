import { Box } from "@mui/material";

type propsType = {
    datasource: any[],
    cols: any[]
}

// let cols = [
//     {
//         key: 'firstName',
//         label: 'First Name'
//     },
//     {
//         key: 'lastName',
//         label: 'Last Name'
//     },
// ]

// let datasource = [
//     {
//         firstName: 'Abdul',
//         lastName: 'Basit'
//     },
//     {
//         firstName: 'Abu',
//         lastName: 'Hurera'
//     },
//     {
//         firstName: 'Muhammad',
//         lastName: 'Muawiya'
//     },
// ]


export default function BAGrid(props: propsType) {
    const { datasource, cols } = props



    return <>
        <Box>
            <table>
                <thead>
                    <tr>
                        {cols && cols.length > 0 ? cols.map((x, i) => <th key={i}>{x.label}</th>) : null}
                    </tr>
                </thead>
                <tbody>
                    {datasource && datasource.length > 0 ? datasource.map((row, rowInd) => <tr key={rowInd}>
                        {cols.map((col, colInd) => <td key={colInd}>{row[col.key]}</td>)}
                    </tr>) : null}
                </tbody>
            </table>
        </Box>
    </>
}