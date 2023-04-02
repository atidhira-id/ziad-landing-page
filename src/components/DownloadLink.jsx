/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

function DownloadLink({ platforms }) {
  return (
    <div className="w-md max-w-md">
      <img src={platforms === 'playstore' ? './download-apple.jpg' : './download-google.jpg'} jpg alt="download-ziad-link-image-button" height="auto" width="150px" />
    </div>
  );
}

export default DownloadLink;
