import React from 'react';
import './ClientsSection.css';  // Import the CSS file for styling

const clientsData = [
  { id: 1, name: 'Client 1', logo: 'client1.png' },
  { id: 2, name: 'Client 2', logo: 'client2.png' },
  // Add more clients as needed
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="container mx-auto clients-grid">
        {clientsData.map((client) => (
          <div key={client.id} className="client-item">
            <img
              src={`/images/${client.logo}`}
              alt={client.name}
              className="h-16 client-logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
