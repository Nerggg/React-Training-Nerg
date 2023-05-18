import React from 'react';
import './FooterRect.css'; // import the CSS file that styles the rectangle

const FooterRectangle = ({ children }) => {
  return (
    <div className="footer-rect">
      <span className="loakpost">Loakpost - Tempat Jual Beli Barang Bekas Jatinangor</span>
      <span className="loakpost-deskripsi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis a arcu ac volutpat. Etiam in urna orci. Donec vitae massa ut enim feugiat hendrerit. Mauris lacinia blandit nisl, ac congue magna cursus efficitur. Ut nec blandit felis. Ut eros eros, finibus sed sodales tempus, posuere fermentum justo. Aliquam condimentum lorem in turpis suscipit, ultrices dictum quam ornare. Curabitur ut nisi sollicitudin, tempor eros nec, volutpat libero. Aliquam sagittis sit amet sapien in ullamcorper. Suspendisse faucibus laoreet elit, quis rutrum nulla vestibulum nec. Etiam viverra diam eget nunc ultrices dictum. Morbi a massa pellentesque, volutpat odio sit amet, dictum nunc. Integer non velit in mi auctor rutrum semper at risus. Cras sit amet risus risus. Suspendisse et orci sem. Integer fermentum tortor fringilla augue vestibulum pharetra a eget turpis.</span>
      {children}
    </div>
  );
};

export default FooterRectangle;
