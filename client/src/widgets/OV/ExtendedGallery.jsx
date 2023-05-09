import React, {useState} from 'react';

function ExtendedGallery({handleExtendedBtn, showModal}) {


  var modalClassName = 'default-gallery-view';

  if (showModal) {
    modalClassName = 'extended-gallery-bg';
    return (
      <div className={modalClassName}>
        <div className='extended-gallery-view'>
        PHOTOS GONNA GO HERE
        </div>
        <button onClick={handleExtendedBtn}>back</button>
      </div>
    )
  } else {
    modalClassName = 'default-gallery-view';
    return (
      <div className={modalClassName}>
        <button onClick={handleExtendedBtn}>extended</button>
      </div>
    )
  }

}

export default ExtendedGallery;