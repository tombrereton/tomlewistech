import React from "react"

export default function projectCard(props) {
    return (
        <div style={squareContainer}>
            <img style={imgStyles} src={props.imgSrc} />
            <h5 style={projectTitleStyles}>{props.title}</h5>
        </div>
    )
}

var imgStyles = {
    minWidth: '100px',
    height: '100px',
    objectFit: 'scale-down',
    backgroundColor: 'black',
    margin: 'auto',
    borderRadius: '4px',
    filter: 'drop-shadow(3px 3px 4px #232323)',
}

var squareContainer = {
    display: 'flex',
    position: 'relative',
    marginLeft: '0.5em',
    marginRight: '0.5em',
}

var projectTitleStyles = {
    color: '#F3F3F3',
    position: 'absolute',
    left: 0,
    textAlign: 'center',
    width: '100%',
    top: '40%'
}
