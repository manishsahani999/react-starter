import React from "react";
import {
  Container,
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  Form,
} from "reactstrap";
import { connect } from "react-redux";
import { userActions } from "support/actions";
import { Redirect } from "react-router-dom";
import { __ROUTE_DASHBOARD } from "support/helpers";
import { Blob } from 'react-blob'

const BackgroundBlob = ({ style, props }) => (
  <Blob size="100vh"
    style={{
      position: 'absolute',
      top: '-5%',
      left: '-5%',
      translate: '-50% -50%',
      zIndex: -1,
      backgroundColor: '#c70039',
      color: 'white',
      height: '30rem',
      width: '30rem',
      opacity: 0.65,
      ...style
    }}
    {...props}
  />
)

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'janedoe@gmail.',
      password: "password",
      iColor: '#e8e8e8'
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ iColor: '#222a42' })
    this.props.login(this.state);
  };


  render() {
    const { auth } = this.props;
    if (auth && auth.loggedIn && auth.isEmployer) return <Redirect to={__ROUTE_DASHBOARD} />
    if (auth && auth.loggedIn && !auth.isEmployer) return <Redirect to={__ROUTE_DASHBOARD} />
    return (
      <>
        <div
          className="page-header index-header"
          style={{ background: "white", position: "relative", paddingTop: '100px' }}
        >
          <Container style={{ zIndex: 1 }}>
            {/* <BackgroundBlob /> */}
            <div className="motto">
              <Row className="justify-content-center">
                {/* <Col>
                  <span className="text-super">
                  </span>
                </Col> */}
                <Col md="4">
                  <div className="pt-2 mb-2 text-center">

                    <Key options={{ fill: this.state.iColor, marginLeft: '-35px' }} />
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Input
                          onChange={this.handleChange}
                          value={this.state.email}
                          name="email"
                          className="border-input"
                          placeholder="Enter the worker's email"
                          type="email"
                          size="lg"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          onChange={this.handleChange}
                          value={this.state.password}
                          name="password"
                          className="border-input"
                          placeholder="Enter Password"
                          type="password"
                          size="lg"
                        />
                      </FormGroup>
                      <Button
                        className="btn mr-1"
                        onClick={this.handleSubmit}
                        color="dark"
                        outline
                        size="lg"
                        type="button"
                        style={{
                          width: "100%",
                          // background: "#82b5a5",
                          // border: "none",
                        }}
                      >
                        <span className="text-dark">Login</span>
                      </Button>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const Key = ({ options }) => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="264" height="264"
    viewBox="0 0 128 128"
    style={{ ...options, marginBottom: '1rem' }}>    <path d="M 99.189453 0.98046875 C 98.997461 0.96933594 98.799609 0.975 98.599609 1 C 97.899609 1.1 97.300391 1.4003906 96.900391 1.9003906 L 92.900391 5.9003906 C 90.000391 8.8003906 86.199609 10.700391 82.099609 10.900391 C 77.399609 11.200391 72.9 9.4992187 69.5 6.1992188 L 65.199219 1.9003906 C 64.699219 1.4003906 64.1 1.1 63.5 1 C 61.9 0.8 60.499219 1.9007813 60.199219 3.3007812 L 37.900391 102.59961 C 37.300391 105.29961 37.300781 108.09922 37.800781 110.69922 C 38.100781 112.49922 38.699609 114.30039 39.599609 115.90039 C 40.299609 117.30039 39.899219 119.00078 38.699219 119.80078 C 38.199219 120.20078 37.6 120.30078 37 120.30078 C 35.9 120.30078 34.900781 119.69922 34.300781 118.69922 C 33.000781 116.19922 32.200781 113.49922 31.800781 110.69922 C 31.700781 109.89922 31.100781 109.2 30.300781 109 L 16.400391 105.80078 C 13.200391 105.10078 9.9007813 105.80039 7.3007812 107.90039 C 4.6007812 110.10039 3.1007812 113.40039 3.3007812 116.90039 C 3.6007812 122.60039 8.6003906 127 14.400391 127 L 90.099609 127 L 90.5 127 L 90.800781 127 L 91 127 C 92.6 126.6 93.799219 124.89961 93.199219 123.09961 C 92.799219 121.89961 91.600781 121.09961 90.300781 121.09961 C 88.700781 121.09961 87.400391 119.69961 87.400391 118.09961 L 87.400391 117.69922 L 86.900391 99 C 86.900391 97.3 88.200391 96 89.900391 96 C 91.500391 96 92.900391 97.3 92.900391 99 L 93 115.5 C 96.5 116.7 99 120.1 99 124 L 99 124.80078 C 98.9 126.00078 99.700391 127 100.90039 127 L 104.19922 127 C 110.19922 127 115.90078 124.59961 119.80078 120.09961 C 124.00078 115.29961 125.59922 108.79961 124.19922 102.59961 L 101.90039 3.3007812 C 101.63789 1.9882812 100.5334 1.0583984 99.189453 0.98046875 z M 71 31 C 72.7 31 74 32.3 74 34 C 74 35.7 72.7 37 71 37 C 69.3 37 68 35.7 68 34 C 68 32.3 69.3 31 71 31 z M 91 31 C 92.7 31 94 32.3 94 34 C 94 35.7 92.7 37 91 37 C 89.3 37 88 35.7 88 34 C 88 32.3 89.3 31 91 31 z M 71.900391 96 C 73.600391 96 74.900391 97.3 74.900391 99 L 75 117.40039 C 75 119.10039 73.7 120.40039 72 120.40039 C 70.3 120.40039 69 119.10039 69 117.40039 L 68.900391 99 C 68.900391 97.3 70.200391 96 71.900391 96 z"></path></svg>
)

const mapStateToProps = (state) => ({ auth: state.authentication });
const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, mapDispatchToProps)(Login);

export default connected;
