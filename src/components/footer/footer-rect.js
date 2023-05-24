import React from 'react';

const FooterRectangle = ({ children }) => {
  return (
    <div className="flex relative items-center top-[1000px] left-0 w-screen h-[400px] bg-white border-t-solid border-t-[9px] border-t-[#212d32]">
      <span className="absolute font-bold text-[20px] text-black mb-[360px] ml-[45px]">Loakpost - Tempat Jual Beli Barang Bekas Jatinangor</span>
      <span className="absolute text-center text-[14px] text-black mx-[60px] mb-[150px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam convallis a arcu ac volutpat. Etiam in urna orci. Donec vitae massa ut enim feugiat hendrerit. Mauris lacinia blandit nisl, ac congue magna cursus efficitur. Ut nec blandit felis. Ut eros eros, finibus sed sodales tempus, posuere fermentum justo. Aliquam condimentum lorem in turpis suscipit, ultrices dictum quam ornare. Curabitur ut nisi sollicitudin, tempor eros nec, volutpat libero. Aliquam sagittis sit amet sapien in ullamcorper. Suspendisse faucibus laoreet elit, quis rutrum nulla vestibulum nec. Etiam viverra diam eget nunc ultrices dictum. Morbi a massa pellentesque, volutpat odio sit amet, dictum nunc. Integer non velit in mi auctor rutrum semper at risus. Cras sit amet risus risus. Suspendisse et orci sem. Integer fermentum tortor fringilla augue vestibulum pharetra a eget turpis.</span>
      {children}
    </div>
  );
};

export default FooterRectangle;
