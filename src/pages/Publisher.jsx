import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Publisher() {
  const [publishers, setPublishers] = useState([]);
  const [publisher, setPublisher] = useState({ name: '', establishmentYear: '', address: '' });
  const [editingId, setEditingId] = useState(null);

  const baseUrl = 'http://localhost:8080/api/v1/publishersr'; // API Base URL

  // Yayıncıları listele
  useEffect(() => {
    fetchPublishers();
  }, []);

  const fetchPublishers = async () => {
    try {
      const response = await axios.get(baseUrl);
      setPublishers(response.data);
    } catch (error) {
      console.error('Error fetching publishers:', error);
    }
  };

  // Yayıncı ekle veya güncelle
  const savePublisher = async () => {
    try {
      if (editingId) {
        // Güncelleme işlemi
        await axios.put(`${baseUrl}/${editingId}`, publisher);
      } else {
        // Yeni ekleme
        await axios.post(baseUrl, publisher);
      }
      fetchPublishers();
      setPublisher({ name: '', establishmentYear: '', address: '' });
      setEditingId(null);
    } catch (error) {
      console.error('Error saving publisher:', error);
    }
  };

  // Yayıncı sil
  const deletePublisher = async (id) => {
    try {
      await axios.delete(`${baseUrl}/${id}`);
      fetchPublishers();
    } catch (error) {
      console.error('Error deleting publisher:', error);
    }
  };

  // Yayıncı düzenleme
  const editPublisher = (publisher) => {
    setPublisher({ name: publisher.name, establishmentYear: publisher.establishmentYear, address: publisher.address });
    setEditingId(publisher.id);
  };

  return (
    <div className="publisher-page" style={{ padding: '20px' }}>
      <h3>CRUD OPERATIONS</h3>

      {/* Form */}
      <div>
        <label>Publisher Name:</label>
        <input
          type="text"
          value={publisher.name}
          onChange={(e) => setPublisher({ ...publisher, name: e.target.value })}
          placeholder="Publisher Name"
        />
        <br />
        <label>Establishment Year:</label>
        <input
          type="text"
          value={publisher.establishmentYear}
          onChange={(e) => setPublisher({ ...publisher, establishmentYear: e.target.value })}
          placeholder="Establishment Year"
        />
        <br />
        <label>Address:</label>
        <input
          type="text"
          value={publisher.address}
          onChange={(e) => setPublisher({ ...publisher, address: e.target.value })}
          placeholder="Address"
        />
        <br />
        <button onClick={savePublisher} style={{ backgroundColor: 'green', color: 'white' }}>
          {editingId ? 'Update Publisher' : 'Add Publisher'}
        </button>
      </div>

      {/* Listeleme */}
      <h4>Publisher List:</h4>
      <ul>
        {publishers.map((pub) => (
          <li key={pub.id}>
            {pub.id}. {pub.name} - {pub.establishmentYear} - {pub.address}
            <button
              onClick={() => editPublisher(pub)}
              style={{ marginLeft: '10px', backgroundColor: 'yellow' }}
            >
              Edit
            </button>
            <button
              onClick={() => deletePublisher(pub.id)}
              style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Publisher;
