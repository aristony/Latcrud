import React, { useState, useEffect } from 'react';

const Barang00 = () => {
  const [barangList, setBarangList] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(null);

  useEffect(() => {
    fetchData();
  }, [deleteStatus]);

  const fetchData = () => {
    fetch('http://www.admincarwash.byethost9.com/api.php')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setBarangList(data))
      .catch(error => console.error('Error fetching data: ', error));
  };

  const handleDelete = (id) => {
    const apiUrl = 'http://www.admincarwash.byethost9.com/api.php'; // Replace 'http://www.newapiurl.com' with your actual API URL
  
    fetch(`${apiUrl}?id=${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data berhasil dihapus:', data);
        setDeleteStatus('success');
      })
      .catch(error => {
        console.error('Error menghapus data: ', error);
        setDeleteStatus('error');
      });
  };
  

  return (
    <div>
      <h2>List Barang</h2>
      {deleteStatus === 'success' && (
        <div style={{ color: 'green' }}>Data berhasil dihapus</div>
      )}
      {deleteStatus === 'error' && (
        <div style={{ color: 'red' }}>Gagal menghapus data</div>
      )}
      <ul>
        {barangList.map(barang => (
          <li key={barang.id}>
            {barang.nama} - ${barang.harga}
            <button onClick={() => handleDelete(barang.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Barang00;
