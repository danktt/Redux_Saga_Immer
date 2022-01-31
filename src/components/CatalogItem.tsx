import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '../store/modules/cart/types';
import { addProductToCartRequest } from '../store/modules/cart/aciton'
import { IState } from '../store';
import { spawn } from 'child_process';


interface CatalogItemProps {
  product: IProduct;
}

const CatalogItem: React.FC<CatalogItemProps> = ({product} ) => {
  const dispatch = useDispatch()

  const hasFailedStockCheck = useSelector<IState, boolean>(state =>{
    return state.cart.failedStockCheck.includes(product.id)
  } )


  const handleAddProductToCart = useCallback(()=> {
    dispatch(addProductToCartRequest(product))
  }, [dispatch, product]);


  return (
    <article > 
        <b>{product.title}</b> {" - "}
        <span>{product.price}</span> {"   "}

        <button
         type="button"
         onClick={handleAddProductToCart}
         >
          Buy
        </button>

        {hasFailedStockCheck && <span style={{color: "red"}}> Falta de estoque</span>}
      </article>
  );
}

export default CatalogItem;