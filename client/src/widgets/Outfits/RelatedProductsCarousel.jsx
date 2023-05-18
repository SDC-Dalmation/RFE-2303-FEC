import React, {useState, useEffect} from "react";
import RelatedProductsEntry from "./RelatedProductsEntry.jsx"
import PostAPIInteraction from "../PostAPIInteraction.jsx"

const RelatedProductsCarousel = ({currentProduct, relatedProducts, setCurrentProduct}) => {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [length, setLength] = useState(relatedProducts.length)
  const [listTranslateXIndex, setListTranslateXIndex] = useState(0);
  const [oldProduct, setOldProduct] = useState(currentProduct)
  const showLeft = currentIndex;
  const showRight = currentIndex;

  useEffect(() => {
    setLength(relatedProducts.length)
  }, [relatedProducts])

  const next = () => {
    PostAPIInteraction("next button in RelatedProductsCarousel.jsx", "Outfits")
    if (currentIndex < (length - 1)) {
        setCurrentIndex(prevState => prevState + 1);
        setListTranslateXIndex(listTranslateXIndex-355);
    }
  }

  const prev = () => {
    PostAPIInteraction("prev button in RelatedProductsCarousel.jsx", "Outfits")
    if (currentIndex > 1) {
        setCurrentIndex(prevState => prevState - 1);
        setListTranslateXIndex(listTranslateXIndex+355);
    }
  }

  return (
    <div data-testid="ProductsCarousel" style={{
      position: 'relative',
      display: 'flex',
      border: '1px solid black',
      borderRadius: 3,
      padding: 5,
      margin: 10,
      width: 1055,
      height: 'auto',
      overflow: 'hidden'
    }}>
      {showLeft !== 2 ? <button style={{
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 60,
        height: 200,
        borderRadius: 5,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        left: 0,
        fontSize: 30,
        fontWeight: 'bold',
        opacity: 0.7
      }} onClick={prev}>
      {"<"}
      </button> : null}
        {relatedProducts.map((product, index) => (
          <div key={index} style={{transform: `translateX(${listTranslateXIndex}px)`}}>
            {<RelatedProductsEntry product={product} setCurrentProduct={setCurrentProduct} currentProduct={currentProduct} oldProduct={oldProduct} setOldProduct={setOldProduct}/>}
          </div>
          )
        )}
      {showRight !== length - 1 ? <button style={{
        position: 'absolute',
        zIndex: 1,
        top: '50%',
        transform: 'translateY(-50%)',
        width: 60,
        height: 200,
        borderRadius: 5,
        backgroundColor: 'white',
        border: '1px solid #ddd',
        right: 0,
        fontSize: 30,
        fontWeight: 'bold',
        opacity: 0.7
      }} onClick={next}>
        {">"}
      </button> : null}
    </div>
  )
}

export default RelatedProductsCarousel;