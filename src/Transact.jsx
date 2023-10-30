import React from "react";

function Transact({date,description,category,amount}) {
    return (
<>
{/* <table>
    <thead>
<tr>
<th>Date</th>
<th>Description</th>
<th>Category</th>
<th>Amount</th>
</tr>
</thead>
</table> */}
<table>
<tbody>
<tr>
    <td>{date}</td>
    <td>{description}</td>
    <td>{category}</td>
    <td>{amount}</td>
</tr>
</tbody>
</table>
</>
    )
}

export default Transact