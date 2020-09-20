import React, { Component } from 'react';
import { Container } from "reactstrap";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Winner = () => {
    const { width, height } = useWindowSize()
    return <>
        <Confetti
            width={width}
            height={height}
        />
        <div
            className="page-header index-header"
            style={{ background: "#fff7ea", position: "relative", paddingTop: '10%' }}
        >
            <Container style={{ zIndex: 1 }}>
                <div className="text-center">
                    <img style={{ width: '20rem' }} src={require('assets/svg/done.svg')} alt="" srcset="" />
                    <div>
                        <span className="text-super text-muted" style={{ marginLeft: '11px', marginBottom: '-20px' }}>You did it</span>
                        <br />
                        <span className="text-super text-danger" style={{ marginLeft: '0px' }}>smarty pants </span>
                        <br />
                        <br />
                        <span className="h4 mt-5 text-muted">reload the page to play agian</span>
                    </div>
                </div>
            </Container>
        </div>
    </>
}

export default Winner;

{/*  */ }