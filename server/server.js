import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';


const PORT = 8000;
const app = express();

app.use('^/$', (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data) => {
        //Mikäli tiedoston luku epäonnistuu
        if(err) {
            console.log("Tapahtui virhe: " + err);
            //Virhekoodi clientille
            return res.status(500).send("Internal server error");
        }
        //Lähetetään index.html mutta ensin renderöidään näkymä palvelimella
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(<App />)}</div>`
            )
        );
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(PORT, () => {
    console.log(`Applikaatio avattu portissa ${PORT}`);
});