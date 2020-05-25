import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import '../styles/style.css'
import api from '../../../service/api'
import Parser from 'html-react-parser'

import logo from '../../../assets/img/Logo-Descomplicando-Linguagens.png'

export default function MenuBlogView() {

    const [categories, setCategories] = useState("")

    useEffect(() => {
        const fetch = async () => {
            let categoryHtml = ""
            await api.get('categories/tree').then(response => {
                response.data.forEach(header => {

                    categoryHtml += `<li><a href="/blog/blogcategory/${header.id}/${header.name}">${header.name}</a>`

                    if (header.children.length > 0) {
                        categoryHtml += `<ul>`
                        header.children.forEach(child => {
                            categoryHtml += `<li><a href="/blog/blogcategory/${child.id}/${child.name}">${child.name}</a></li>`
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
                        <Link to="/blog"><img src={logo} width="55" height="55" alt="" title="" /></Link>
                    </div>
                    <nav id="nav-menu-container">
                        <ul className="nav-menu">

                            <li><Link to="/blog">Categorias</Link>
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
                            {/* <li className="menu-has-children"><a href="/blog">Pages</a>
                                <ul>
                                    <li><a href="elements.html">Elements</a></li>
                                </ul>
                            </li> */}
                            <li><Link to="/blog">Sobre</Link></li>
                            {/* <li className="menu-has-children"><a href="/blog">Blog</a>
                                <ul>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li> */}
                            <li><Link to="/blog">Contato</Link></li>
                            <li><Link to="/blog">Login</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}