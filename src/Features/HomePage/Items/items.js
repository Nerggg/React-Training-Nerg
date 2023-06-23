import { useNavigate } from 'react-router-dom';

function ItemList() {

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product');
  };

  return (
    <div className="relative flex flex-wrap justify-evenly w-full">
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
      <div className="relative w-28 h-40 bg-itemgray my-2 mx-1 rounded-[7px]" />
    </div>
  );
}

export default ItemList;
