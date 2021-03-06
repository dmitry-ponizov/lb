import React from 'react'


const LayoutHTML = (props) => (
    <html>
        <head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="./css/style.css" />
        <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet"></link>
        </head>
        <body >
            { props.children }
        </body>
    </html>
) 

export default LayoutHTML;