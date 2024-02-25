import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BarangList = () => {
  const [barangi, setBarang] = useState([]);

  useEffect(() => {
    axios.get('http://www.admincarwash.byethost9.com/api.php')
      .then(response => setBarang(response.data))
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      <h2>List Barang</h2>
      <ul>
        {barangi.map(bar => (
          <li key={bar.id}>{bar.nama} - ${bar.harga}</li>
        ))}
      </ul>
    </div>
  );
};

export default BarangList;
