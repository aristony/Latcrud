import React, { useState } from 'react';
import axios from 'axios';

const CreateForm = () => {
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');

  const handleNamaChange = (e) => {
    setNama(e.target.value);
  };

  const handleHargaChange = (e) => {
    setHarga(e.target.value);
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('http://www.admincarwash.byethost9.com/api.php', {
        nama,
        harga,
      });

      if (response.status === 200) {
        console.log(response.data.message); // Data berhasil ditambahkan
        // You can add additional logic here, such as updating the UI
      } else {
        console.error(response.data.error); // Log the error
        // Handle error scenarios in your application
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create New Barang</h2>
      <label>Nama:</label>
      <input type="text" value={nama} onChange={handleNamaChange} />
      <br />
      <label>Harga:</label>
      <input type="text" value={harga} onChange={handleHargaChange} />
      <br />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateForm;
