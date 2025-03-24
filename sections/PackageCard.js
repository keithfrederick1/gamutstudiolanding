import React from 'react';

const PackageCard = ({ packageData }) => {
  const cardStyle = {
    backgroundColor: '#4A4AFF', // Darker blue background color
    color: '#fff',
    borderRadius: '10px',
    padding: '20px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    margin: '10px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const priceStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const featureStyle = {
    marginBottom: '10px',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    marginTop: '20px',
  };

  return (
    <div style={cardStyle}>
      <div style={titleStyle}>{packageData.name}</div>
      <div style={priceStyle}>{packageData.price}</div>
      {packageData.features.map((feature, index) => (
        <div key={index} style={featureStyle}>
          ✔️ {feature}
        </div>
      ))}
      <button style={buttonStyle}>Subscribe</button>
    </div>
  );
};

export default PackageCard;
