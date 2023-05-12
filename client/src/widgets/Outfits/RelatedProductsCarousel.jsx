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
    <div style={{
      position: 'relative',
      display: 'flex',
      border: '1px solid black',
      borderRadius: 3,
      padding: 5,
      margin: 10,
      width: '50%'
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
        {relatedProducts.map((product, index) => (
          <div key={index}>
            {index === currentIndex && <RelatedProductsEntry product={product} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct}/>}
          </div>
          )
        )}
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
  )
}

export default RelatedProductsCarousel;