import { useNavigate } from 'react-router-dom';

function ItemList() {

  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate('/product');
  };

  return (
    <div className="relative flex flex-wrap justify-evenly w-full">
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
      <div className="relative w-[175px] h-[200px] bg-itemgray my-2 mx-1 rounded-[7px] cursor-pointer" onClick={handleProductClick} />
    </div>
  );
}

export default ItemList;
