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
        <button onClick={handleExtendedBtn}>extended</button>
    )
  }

}

export default ExtendedGallery;