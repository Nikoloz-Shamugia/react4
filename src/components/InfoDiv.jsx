import '../app.css';
import ImageBox from './ImgDiv';
import FAQsection from './ListSection';

const info = () => {
  const divInfoStyle = {
    backgroundColor: 'white',
    width: '840px',
    height: '550px',
    borderRadius: '15px',
    display: 'flex',
  };

  return (
    <div className="info" style={divInfoStyle}>
      <ImageBox />
      <FAQsection />
    </div>
  );
};

export default info;
