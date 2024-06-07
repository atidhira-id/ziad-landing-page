/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

function DownloadLink({ platforms }) {
  return (
    <div className="w-md max-w-md">
      <Link href="https://play.google.com/store/apps/details?id=com.ziad.pesantren">
        <img src={platforms === 'playstore' ? './download-apple.jpg' : './download-google.jpg'} jpg alt="download-ziad-link-image-button" height="auto" width="150px" />
      </Link>
    </div>
  );
}

export default DownloadLink;
