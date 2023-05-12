import React, {useState, useEffect} from "react";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"

const RelatedProductsCarousel = ({currentProduct, relatedProducts, setCurrentProduct}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [length, setLength] = useState(relatedProducts.length)

  useEffect(() => {
    setLength(relatedProducts.length)
  }, [relatedProducts])

  const next = () => {
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
        setCurrentIndex(prevState => prevState - 1)
    }
  }

  return (
    <div className="carousel-container"
      style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      }}>
      <div className="carousel-wrapper"
        style={{
        display: 'flex',
        width: '100%',
        position: 'relative',
        }}>
        <button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: `translateY(-50%)`,
          width: 24,
          height: 48,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          left: 24
        }} onClick={prev}>
        {"<"}
        </button>
        <div className="carousel-content-wrapper"
          style={{
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          }}>
            <div className="carousel-content"
              style={{
              display: 'flex',
              transition: 'all 250ms linear',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
              width: '100%',
              flexShrink: 0,
              flexGrow: 1,
              transform: `translateX(-${currentIndex * 100}%)`
            }}>
              {relatedProducts.map((product, index) => (
                <RelatedProductsEntry key={index} product={product} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct}/>
            ))}
          </div>
        </div>
        <button style={{
          position: 'absolute',
          zIndex: 1,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 24,
          height: 48,
          borderRadius: 5,
          backgroundColor: 'white',
          border: '1px solid #ddd',
          right: 24
        }} onClick={next}>
          {">"}
        </button>
      </div>
    </div>
  )
}

export default RelatedProductsCarousel;