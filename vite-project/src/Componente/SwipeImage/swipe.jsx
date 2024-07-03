import './ImageComparisonSlider.css';
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

function ImageComparisonSlider() {
  return (
    <div className="image-comparison-container">
      <ReactCompareSlider
        className="react-compare-slider"
        itemOne={
          <ReactCompareSliderImage
            src="https://st2.depositphotos.com/1007373/5523/i/450/depositphotos_55232293-stock-photo-apartment-interior.jpg"
            alt="Image one"
            className="react-compare-slider-image"
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src="https://http2.mlstatic.com/D_NQ_NP_716073-MLA75974667868_052024-O.webp"
            alt="Image two"
            className="react-compare-slider-image"
          />
        }
      />
    </div>
  );
}

export default ImageComparisonSlider;
