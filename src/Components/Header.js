import React from 'react';
import {Grid, Button, Image} from 'react-bootstrap';
import '../Css/main.css';
import * as ReactTranslated from 'react-translated';
import translation from '../Translation';
import peru from '../Img/peru.png';
import eeuu from '../Img/eeuu.jpg';

export const Header = ({title, subtitle, switchLanguage, language}) => {
    return (
        <Grid className="header">
            <div className="title">
                <p className="spaceag">
                    <ReactTranslated.Translate
                        text="{title}"
                        data={{ title: title }}
                    /> 
                </p>
                <p className="spaceag subtitle">
                    <ReactTranslated.Translate
                        text="{subtitle}"
                        data={{ subtitle: subtitle }}
                    /> 
                </p> 
            </div>  
            <div className="btn-swicth-language">
                <div className="click-language">
                    <h3 className="language">{language == 'es'? 'Español': 'English'}</h3>
                    <Button onClick={switchLanguage}><ReactTranslated.Translate text="Idioma" src=""/></Button>
                </div>
            </div>       
       </Grid>
    );
}