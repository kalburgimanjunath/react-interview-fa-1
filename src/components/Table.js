import React from 'react';
export default function Table({ data, editItem }) {
  console.log(data);
  return (
    <table>
      {data && data.length > 0 ? (
        data.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                {item}
                {index}
              </td>
              <td>
                <button onClick={editItem(index)}>Edit</button>
              </td>
              <td>
                <button onClick={editItem(index)} value={index}>
                  Delete
                </button>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>Empty records</td>
        </tr>
      )}
    </table>
  );
}
