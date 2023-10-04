import React, { useState } from "react";

const getListBox = () => {
  const [showContent1, setShowContent1] = useState(false);
  const [showContent2, setShowContent2] = useState(false);
  const [showContent3, setShowContent3] = useState(false);
  const [showContent4, setShowContent4] = useState(false);
  const [showContent5, setShowContent5] = useState(false);

  const toggleContent = (contentNumber) => {
    switch (contentNumber) {
      case 1:
        setShowContent1(!showContent1);
        break;
      case 2:
        setShowContent2(!showContent2);
        break;
      case 3:
        setShowContent3(!showContent3);
        break;
      case 4:
        setShowContent4(!showContent4);
        break;
      case 5:
        setShowContent5(!showContent5);
        break;
      default:
        break;
    }
  };

  const liStyle = {
    cursor: 'pointer',
    borderBottom: '1px solid black',
    width: '100%',
    height: '30px',
    listStyle: 'none',
    padding: '8px 0',
    transition: 'color 0.2s ease-in-out'
  };

  return (
    <div style={{ flex: '1', padding: '30px', display: 'grid', placeItems: 'center' }}>
      <h1>FAQ</h1>
      <div style={{ overflowY: 'scroll', width: '100%', height: '390px' }}>
        <h4 style={liStyle} className='hoverable-h4' onClick={() => toggleContent(1)}>click here!</h4>
        {showContent1 && <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>}
        <h4 style={liStyle} className='hoverable-h4' onClick={() => toggleContent(2)}>click here!</h4>
        {showContent2 && <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>}
        <h4 style={liStyle} className='hoverable-h4' onClick={() => toggleContent(3)}>click here!</h4>
        {showContent3 && <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>}
        <h4 style={liStyle} className='hoverable-h4' onClick={() => toggleContent(4)}>click here!</h4>
        {showContent4 && <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>}
        <h4 style={liStyle} className='hoverable-h4' onClick={() => toggleContent(5)}>click here!</h4>
        {showContent5 && <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>}
      </div>
    </div>
  );
}

export default getListBox;
