import React from "react";
import { Container, Row, Button, Col, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

import data from 'assets/problems.json';
import { handle } from "support/helpers/api";
import Winner from "./Winner";
const URL = 'https://leetcode.com/api/problems/all/';

class Bingo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            problems: [],
            table: true,
            idx: 0,
            index: 0,
            done: [],
            bingo: false,
            count: 0
        };
        // this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        let c = [];
        for (let index = 1; index < 26; index++) {
            const idx = Math.floor((Math.random() * data.problems.length));
            c.push(idx);
        }

        this.setState({ problems: c })
    }

    checkforbingo() {
        console.log("Checking for bingo");
        let table = [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ];
        this.state.done.forEach(element => {
            table[Math.floor(element / 5)][element % 5] = 1;
        });

        let count = 0;

        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (table[i][j] == 0) break;
                if (j == 4) count++;
            }
        }

        for (let i = 0; i < table.length; i++) {
            for (let j = 0; j < table[i].length; j++) {
                if (table[j][i] == 0) break;
                if (j == 4) count++;
            }
        }
        for (let i = 0; i < table.length; i++) {
            if (table[i][i] === 0) break;
            if (i === 4) count++;
        }
        for (let i = 0; i < table.length; i++) {
            if (table[i][table.length - i - 1] === 0) break;
            if (i === 4) count++;
        }

        return count;
    }

    handleClick = (id, index) => {
        // this.setState({table: !this.state.table})
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {
                table: !state.table,
                idx: id,
                index: index,
                count: this.checkforbingo()
            }
        });
    }

    handleSelection = (id) => {
        this.setState((state) => {
            // Important: read `state` instead of `this.state` when updating.
            return {
                table: !state.table,
                done: [...state.done, id],
                count: this.checkforbingo()
            }
        });
    }

    render() {

        if (this.checkforbingo() > 4) return <Winner />
        console.log(this.state);
        const selected = data.problems[this.state.idx];
        let selectedColor = 'danger', type = 'Oooooo, do you wanna try a hard one', bg = 'orange';
        if (selected) {
            if (selected.difficulty.level == 1) {
                selectedColor = 'success';
                type = 'this you can do, i belive in you';
                bg = 'green'
            }
            else if (selected.difficulty.level == 2) {
                selectedColor = 'warning';
                bg = 'yellow'
                type = 'Yay, be faster okayy';
            }
            else {
                selectedColor = 'danger';
                type = 'Oooooo, do you wanna try a hard one';
                bg = 'orange';
            }
        }

        return (
            <>
                <div
                    className="page-header index-header"
                    style={{ background: "white", position: "relative", paddingTop: '8%' }}
                >
                    <Tape options={{ fill: "#e8e8e8", position: "absolute", left: "-5%", top: "5%" }} />
                    <Message options={{ fill: "#e8e8e8", position: "absolute", right: "-1%", bottom: "-2%" }} />
                    <Container style={{ zIndex: 1 }}>

                        {
                            (this.state.table && this.state.problems && this.state.problems.length > 0) && (
                                <Row>
                                    <Col md="4">
                                        <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
                                            <div>
                                                {/* <img style={{ width: '80%' }} src={require('assets/svg/landing.svg')} alt="" srcset="" /> */}
                                            </div>
                                            <div>
                                                <span className="text-super" style={{ marginLeft: '51px', marginBottom: '-20px' }}>lets</span>
                                                <br />
                                                <span className="text-super" style={{ marginLeft: '-35px' }}>Play</span>
                                                <br />
                                                <span className="text-super text-danger" style={{ marginLeft: '25px' }}>bingo</span>
                                            </div>
                                            <h5 className="font-for-motto text-left mr-5 mt-3" style={{ marginLeft: '65px', fontSize: "1em !important" }}>
                                                the game is simple, just solve <span className="text-danger">question</span>
                                            </h5>
                                            <small className="mb-4"><span className="text-muted">You are {5 - this.state.count} steps away from a win. </span></small>
                                        </div>
                                    </Col>
                                    <Col md="8">
                                        <div className="motto">
                                            {[0, 1, 2, 3, 4].map(row => {
                                                return <div key={row}>
                                                    <Row className="justify-content-center">
                                                        {[0, 1, 2, 3, 4].map(col => {

                                                            const problem = data.problems[this.state.problems[row * 5 + col]];
                                                            let color;
                                                            if (problem.difficulty.level == 1) color = 'success';
                                                            else if (problem.difficulty.level == 2) color = 'warning';
                                                            else color = 'danger'
                                                            return <Button
                                                                color={color}
                                                                // ( this.state.done.includes(row + col) ? "" : outline)}
                                                                outline={this.state.done.includes(row * 5 + col) === true ? false : true}
                                                                md="2"
                                                                onClick={() => {
                                                                    this.handleClick(this.state.problems[row * 5 + col], row * 5 + col)
                                                                }}
                                                                style={{
                                                                    margin: '2px',
                                                                    height: "7rem",
                                                                    width: "9rem",
                                                                }}
                                                                key={row * 5 + col}>
                                                                {problem.stat.question__title.substr(0, 20) + ((problem.stat.question__title.length > 20) ? "..." : "")}
                                                            </Button>
                                                        })}
                                                    </Row>
                                                    {/* <BingoRow handleClick={handleClick} problems={problems} row_id={item * 5} /> */}
                                                </div>
                                            })}
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                        {
                            (!this.state.table) && (
                                <Row className="justify-content-center coloured-cards" style={{
                                    paddingTop: '5rem'
                                }}>
                                    <Col md="10" className="text-center" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                                        <div className="card-big-shadow">
                                            <Card
                                                style={{
                                                }}
                                                className="card-just-text"
                                                data-color={bg}
                                                data-radius="none"
                                            >
                                                <CardBody>
                                                    <h6 className="card-category">{type}</h6>
                                                    <CardTitle tag={(selected.stat.question__title.length < 20) ? "h1" : "h3"}>
                                                        {selected.stat.question__title}
                                                    </CardTitle>
                                                    <p className="card-description">
                                                        <a target="_blank" href={'https://leetcode.com/problems/' + selected.stat.question__title_slug}>
                                                            <Button
                                                                className="link"
                                                                color='neutral'
                                                                // outline
                                                                md="2"
                                                                style={{
                                                                    marginTop: '1rem',
                                                                }}
                                                                size="lg"
                                                                key={this.state.idx}>
                                                                <span style={{
                                                                    color: { bg }
                                                                }}>try it</span>
                                                            </Button>
                                                        </a>
                                                        <Button
                                                            className="mb-3"
                                                            color={selectedColor}
                                                            // outline
                                                            md="2"
                                                            onClick={() => this.handleSelection(this.state.index)}
                                                            style={{
                                                                marginTop: '1rem',
                                                            }}
                                                            size="sm"
                                                            key={this.state.idx}>
                                                            <span style={{
                                                                color: "black"
                                                            }}>Done? Yay!</span>
                                                        </Button>
                                                        <br />
                                                        <Link onClick={() => this.handleClick(0, 0)} className="text-black" >
                                                            <span style={{
                                                                color: "black"
                                                            }}> <small>Selected Another</small></span>
                                                        </Link>
                                                    </p>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            )
                        }
                    </Container>
                </div>
            </>
        )
    }
}


const BingoRow = ({ row_id, problems, handleClick }) => {
    const row = [0, 1, 2, 3, 4].map(item => {
        const problem = data.problems[problems[row_id + item]];
        let color;
        if (problem.difficulty.level == 1) color = 'success';
        else if (problem.difficulty.level == 2) color = 'warning';
        else color = 'danger'
        return <Button
            color={color}
            outline
            md="2"
            onClick={handleClick(row_id + item)}
            style={{
                margin: '2px',
                height: "7rem",
                width: "9rem",
            }}
            key={item}>
            {}
            {problem.stat.question__title.substr(0, 20)}
            {(problem.stat.question__title > 20) && <>...</>}
        </Button>
    })
    return (
        <div>
            <Row className="justify-content-center">
                {row}
            </Row>
        </div>
    )
}

const BingoTable = ({ problems, handleClick }) => {
    console.log(problems);
    [0, 1, 2, 3, 4].forEach(item => console.log(problems[item * 5]));
    const table = [0, 1, 2, 3, 4].map(item => <div key={item}><BingoRow handleClick={handleClick} problems={problems} row_id={item * 5} /></div>)
    return (
        <div>
            {table}
        </div>
    );
}


const Tape = ({ options }) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="512" height="512"
        viewBox="0 0 128 128"
        style={options}
    >
        <path d="M 13 13 C 10.25 13 8 15.25 8 18 L 8 67 L 72 67 L 72 18 C 72 15.25 69.75 13 67 13 Z M 13 15 L 67 15 C 68.667969 15 70 16.332031 70 18 L 70 21 C 69.449219 21 69 21.449219 69 22 C 69 22.550781 69.449219 23 70 23 L 70 65 L 10 65 L 10 23 C 10.550781 23 11 22.550781 11 22 C 11 21.449219 10.550781 21 10 21 L 10 18 C 10 16.332031 11.332031 15 13 15 Z M 14 21 C 13.449219 21 13 21.449219 13 22 C 13 22.550781 13.449219 23 14 23 C 14.550781 23 15 22.550781 15 22 C 15 21.449219 14.550781 21 14 21 Z M 18 21 C 17.449219 21 17 21.449219 17 22 C 17 22.550781 17.449219 23 18 23 C 18.550781 23 19 22.550781 19 22 C 19 21.449219 18.550781 21 18 21 Z M 22 21 C 21.449219 21 21 21.449219 21 22 C 21 22.550781 21.449219 23 22 23 C 22.550781 23 23 22.550781 23 22 C 23 21.449219 22.550781 21 22 21 Z M 26 21 C 25.449219 21 25 21.449219 25 22 C 25 22.550781 25.449219 23 26 23 C 26.550781 23 27 22.550781 27 22 C 27 21.449219 26.550781 21 26 21 Z M 30 21 C 29.449219 21 29 21.449219 29 22 C 29 22.550781 29.449219 23 30 23 C 30.550781 23 31 22.550781 31 22 C 31 21.449219 30.550781 21 30 21 Z M 34 21 C 33.449219 21 33 21.449219 33 22 C 33 22.550781 33.449219 23 34 23 C 34.550781 23 35 22.550781 35 22 C 35 21.449219 34.550781 21 34 21 Z M 38 21 C 37.449219 21 37 21.449219 37 22 C 37 22.550781 37.449219 23 38 23 C 38.550781 23 39 22.550781 39 22 C 39 21.449219 38.550781 21 38 21 Z M 42 21 C 41.449219 21 41 21.449219 41 22 C 41 22.550781 41.449219 23 42 23 C 42.550781 23 43 22.550781 43 22 C 43 21.449219 42.550781 21 42 21 Z M 46 21 C 45.449219 21 45 21.449219 45 22 C 45 22.550781 45.449219 23 46 23 C 46.550781 23 47 22.550781 47 22 C 47 21.449219 46.550781 21 46 21 Z M 50 21 C 49.449219 21 49 21.449219 49 22 C 49 22.550781 49.449219 23 50 23 C 50.550781 23 51 22.550781 51 22 C 51 21.449219 50.550781 21 50 21 Z M 54 21 C 53.449219 21 53 21.449219 53 22 C 53 22.550781 53.449219 23 54 23 C 54.550781 23 55 22.550781 55 22 C 55 21.449219 54.550781 21 54 21 Z M 58 21 C 57.449219 21 57 21.449219 57 22 C 57 22.550781 57.449219 23 58 23 C 58.550781 23 59 22.550781 59 22 C 59 21.449219 58.550781 21 58 21 Z M 62 21 C 61.449219 21 61 21.449219 61 22 C 61 22.550781 61.449219 23 62 23 C 62.550781 23 63 22.550781 63 22 C 63 21.449219 62.550781 21 62 21 Z M 66 21 C 65.449219 21 65 21.449219 65 22 C 65 22.550781 65.449219 23 66 23 C 66.550781 23 67 22.550781 67 22 C 67 21.449219 66.550781 21 66 21 Z M 43.476563 31 L 33 58 L 35.003906 58 L 45.480469 31 Z M 28.292969 36.292969 L 20.585938 44 L 28.292969 51.707031 L 29.707031 50.292969 L 23.414063 44 L 29.707031 37.707031 Z M 51.707031 36.292969 L 50.292969 37.707031 L 56.585938 44 L 50.292969 50.292969 L 51.707031 51.707031 L 59.414063 44 Z"></path>
        </svg>
);

const Message = ({ options }) => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="240" height="240"
        viewBox="0 0 128 128"
        style={options}
    > <path d="M 24 1 C 16.8 1 11 6.8 11 14 L 11 79 C 11 86.2 16.8 92 24 92 L 92.800781 92 L 111.90039 111.09961 C 112.50039 111.69961 113.2 112 114 112 C 114.4 112 114.79961 111.90078 115.09961 111.80078 C 116.19961 111.30078 117 110.2 117 109 L 117 14 C 117 6.8 111.2 1 104 1 L 24 1 z M 24 7 L 104 7 C 107.9 7 111 10.1 111 14 L 111 101.80078 L 96.099609 86.900391 C 95.599609 86.300391 94.8 86 94 86 L 24 86 C 20.1 86 17 82.9 17 79 L 17 14 C 17 10.1 20.1 7 24 7 z M 40 36 C 38.3 36 37 37.3 37 39 C 37 40.7 38.3 42 40 42 L 88 42 C 89.7 42 91 40.7 91 39 C 91 37.3 89.7 36 88 36 L 40 36 z M 40 51 C 38.3 51 37 52.3 37 54 C 37 55.7 38.3 57 40 57 L 73 57 C 74.7 57 76 55.7 76 54 C 76 52.3 74.7 51 73 51 L 40 51 z M 88 51 A 3 3 0 0 0 85 54 A 3 3 0 0 0 88 57 A 3 3 0 0 0 91 54 A 3 3 0 0 0 88 51 z M 24 121 A 3 3 0 0 0 21 124 A 3 3 0 0 0 24 127 A 3 3 0 0 0 27 124 A 3 3 0 0 0 24 121 z M 39 121 C 37.3 121 36 122.3 36 124 C 36 125.7 37.3 127 39 127 L 114 127 C 115.7 127 117 125.7 117 124 C 117 122.3 115.7 121 114 121 L 39 121 z"></path></svg>
)

export default Bingo;
