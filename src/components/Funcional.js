import React, { useState } from 'react';
import '../style/Funcional.css';
import axios from 'axios';
import ProfileUpdate from './ProfileUpdate';
import CategoryList from './CategoryList';
import { token } from './login';


export default function Funcional() {
    const [visibilityUpdateYourData, setVisibilityUpdateYourData] = useState(false);
    const [visibilityCatogryList, setVisibilityCatogryList] = useState(false);
    const [visibilityCreateProduct, setVisibilityCreateProduct] = useState(false);
    const [visibilityEditProduct, setVisibilityEditProduct] = useState(false);
    const [visibilityListProducts, setVisibilityListProducts] = useState(false);
    const [visibilityDetailProduct, setVisibilityDetailProduct] = useState(false);
    const [visibilityDeleteProduct, setVisibilityDeleteProduct] = useState(false);
    const [visibilityCreateCustomer, setVisibilityCreateCustomer] = useState(false);
    const [visibilityEditCustomer, setVisibilityEditCustomer] = useState(false);
    const [visibilityListCustomers, setVisibilityListCustomers] = useState(false);
    const [visibilityDetailCustomer, setVisibilityDetailCustomer] = useState(false);

    const toggleVisibilityUpdateYourData = () => {
        setVisibilityUpdateYourData(true);
    };

    const toggleVisibilityCatogryList = () => {
        setVisibilityCatogryList(true);
    };

    const toggleVisibilityCreateProduct = () => {
        setVisibilityCreateProduct(true);
    };

    const toggleVisibilityEditProduct = () => {
        setVisibilityEditProduct(true);
    };

    const toggleVisibilityListProducts = () => {
        setVisibilityListProducts(true);
    };

    const toggleVisibilityDetailProduct = () => {
        setVisibilityDetailProduct(true);
    };

    const toggleVisibilityDeleteProduct = () => {
        setVisibilityDeleteProduct(true);
    };

    const toggleVisibilityCreateCustomer = () => {
        setVisibilityCreateCustomer(true);
    };

    const toggleVisibilityEditCustomer = () => {
        setVisibilityEditCustomer(true);
    };

    const toggleVisibilityListCustomers = () => {
        setVisibilityListCustomers(true);
    }

    const toggleVisibilityDetailCostumer = () => {
        setVisibilityDetailCustomer(true)
    }

    return (
        <div className='Funcional-div'>
            <ul className='Funcional-div-list'>
                <li onClick={toggleVisibilityUpdateYourData}>▼  Alterar seu dados {visibilityUpdateYourData && <ProfileUpdate token={token} />}</li>
                <li onClick={toggleVisibilityCatogryList}>▼  Listar Categorias {visibilityCatogryList && <CategoryList token={token} />}</li>
                <li onClick={toggleVisibilityCreateProduct}>▼  Cadastrar Produto</li>
                <li onClick={toggleVisibilityEditProduct}>▼  Editar dados do produto</li>
                <li onClick={toggleVisibilityListProducts}>▼  Listar Produtos</li>
                <li onClick={toggleVisibilityDetailProduct}>▼  Detalhar Produto</li>
                <li onClick={toggleVisibilityDeleteProduct}>▼  Excluir Produto</li>
                <li onClick={toggleVisibilityCreateCustomer}>▼  Cadastrar Cliente</li>
                <li onClick={toggleVisibilityEditCustomer}>▼  Editar dados do cliente</li>
                <li onClick={toggleVisibilityListCustomers}>▼  Listar Clientes</li>
                <li onClick={toggleVisibilityDetailCostumer}>▼  Detalhar Cliente</li>
            </ul>
        </div>
    );
}
