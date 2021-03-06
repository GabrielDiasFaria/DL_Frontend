import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import '../styles/style.css'
import api from '../../../service/api'
import Parser from 'html-react-parser'

export default function MenuBlogView() {

    const [categories, setCategories] = useState("")

    useEffect(() => {
        const fetch = async () => {
            let categoryHtml = ""
            await api.get('categories/tree').then(response => {
                response.data.forEach(header => {

                    categoryHtml += `<li><a href="//category/${header.id}/${header.name}">${header.name}</a>`

                    if (header.children.length > 0) {
                        categoryHtml += `<ul>`
                        header.children.forEach(child => {
                            categoryHtml += `<li><a href="//category/${child.id}/${child.name}">${child.name}</a></li>`
                        })
                        categoryHtml += `</ul>`
                    }

                    categoryHtml += `</li>`
                });

                setCategories(categoryHtml)
            })
        }
        fetch()
    }, [])

    return (
        <header id="header">
            <div className="container box_1170 main-menu">
                <div className="row align-items-center justify-content-between d-flex">
                    <div id="logo">
                        <Link to="/"><img src={`${process.env.PUBLIC_URL}/assets/img/Logo-Descomplicando-Linguagens.png`} width="55" height="55" alt="" title="" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">

                            <li><Link to="/">Categorias</Link>
                                <ul>
                                    {
                                        Parser(categories)
                                    }
                                    {/* <li><a href="elements.html">SAP</a>
                                        <ul>
                                            <li><a href="elements.html">ABAP</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="elements.html">Categoria 2</a></li> */}
                                </ul>
                            </li>
                            {/* <li><a href="archive.html">Archive</a></li> */}
                            {/* <li className="menu-has-children"><a href="/">Pages</a>
                                <ul>
                                    <li><a href="elements.html">Elements</a></li>
                                </ul>
                            </li> */}
                            <li><Link to="/">Sobre</Link></li>
                            {/* <li className="menu-has-children"><a href="/">Blog</a>
                                <ul>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> */}
                            <li><Link to="/">Contato</Link></li>
                            <li><Link to="/">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}